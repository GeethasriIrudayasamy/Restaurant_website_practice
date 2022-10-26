import React, { Fragment } from "react";
import MealsItem from "./MealsItem";
import MealsSummary from "./MealsSummary";

const Meals = () => {
    return (
        <Fragment>
            <MealsSummary />
            <MealsItem />
        </Fragment>
    );
};

export default Meals;
