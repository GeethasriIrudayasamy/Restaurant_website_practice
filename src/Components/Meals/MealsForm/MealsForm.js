import React, { useContext } from "react";
import Input from "../../UI/Input/Input";
import CartContext from "../../../Store/cart-context";
import classes from "./MealsForm.module.css";

const MealsForm = (props) => {
    const cartCtx = useContext(CartContext);

    const addItemToCart = (event) => {
        event.preventDefault();
        const amount = document.getElementById(props.id).value;
        cartCtx.addItem({ ...props.item, amount });
        console.log(cartCtx);
    };

    return (
        <form className={classes.form}>
            <Input
                label="Amount"
                input={{
                    id: props.id,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <button onClick={addItemToCart}>+Add</button>
        </form>
    );
};

export default MealsForm;
