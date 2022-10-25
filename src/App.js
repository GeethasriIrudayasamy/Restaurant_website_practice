import React, { Fragment } from "react";
import Header from "./Components/Layout/Header/Header";
import MealsSummary from "./Components/Meals/MealsSummary";

const App = () => {
    return (
        <Fragment>
            <Header />
            <MealsSummary />
        </Fragment>
    );
};

export default App;
