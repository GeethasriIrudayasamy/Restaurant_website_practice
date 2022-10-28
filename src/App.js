import React, { Fragment } from "react";
import Cart from "./Components/Layout/Cart/Cart";
import Header from "./Components/Layout/Header/Header";
import Meals from "./Components/Meals/Meals";

const App = () => {
    return (
        <Fragment>
            <Cart />
            <Header />
            <Meals />
        </Fragment>
    );
};

export default App;
