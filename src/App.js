import React, { useState } from "react";
import Cart from "./Components/Layout/Cart/Cart";
import Header from "./Components/Layout/Header/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";

const App = () => {
    const [cartIsOpen, setCartIsOpen] = useState(false);

    const showCartHandler = () => {
        setCartIsOpen(true);
    };

    const hideCartHandler = () => {
        setCartIsOpen(false);
    };

    return (
        <CartProvider>
            {cartIsOpen && <Cart onClose={hideCartHandler} />}
            <Header onClick={showCartHandler} />
            <Meals />
        </CartProvider>
    );
};

export default App;
