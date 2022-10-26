import React from "react";
import Card from "../UI/Card/Card";
import classes from "./MealsItem.module.css";
import MealsList from "./MealsList/MealsList";

const MealsItem = () => {
    const mealsAvailable = [
        {
            id: "1",
            name: "Sushi",
            description: "Finest fish and veggies",
            price: 22.99,
        },
        {
            id: "2",
            name: "Schnitzel",
            description: "A german specialty!",
            price: 16.5,
        },
        {
            id: "3",
            name: "Barbecue Burger",
            description: "American, raw, meaty",
            price: 12.99,
        },
        {
            id: "4",
            name: "Green Bowl",
            description: "Healthy...and green...",
            price: 12.09,
        },
    ];

    const mealsList = mealsAvailable.map((meal) => (
        <MealsList
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>{mealsList}</Card>
        </section>
    );
};

export default MealsItem;
