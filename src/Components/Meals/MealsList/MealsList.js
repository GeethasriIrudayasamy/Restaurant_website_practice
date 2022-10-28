import React from "react";
import MealsForm from "../MealsForm/MealsForm";
import classes from "./MealsList.module.css";

const MealsList = (props) => {
    return (
        <li className={classes.list}>
            <div>
                <h2>{props.name}</h2>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{props.price}</div>
            </div>
            <div>
                <MealsForm id={props.id} />
            </div>
        </li>
    );
};
export default MealsList;
