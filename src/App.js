import React, { Fragment, useState } from "react";
import Cart from "./Components/Layout/Cart/Cart";
import Header from "./Components/Layout/Header/Header";
import Meals from "./Components/Meals/Meals";

const App = () => {
    const [cartIsOpen, setCartIsOpen] = useState(false);

    const showCartHandler = () => {
        setCartIsOpen(true);
    };

    const hideCartHandler = () => {
        setCartIsOpen(false);
    };

    return (
        <Fragment>
            {cartIsOpen && <Cart onClose={hideCartHandler} />}
            <Header onClick={showCartHandler} />
            <Meals />
        </Fragment>
    );
};

export default App;
