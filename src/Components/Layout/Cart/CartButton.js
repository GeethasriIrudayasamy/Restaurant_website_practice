import React, { Fragment } from "react";
import classes from "./CartButton.module.css";
import Button from "../../UI/Button/Button";
import CartIcon from "./CartIcon";

const CartButton = () => {
    return (
        <Fragment>
            <Button className={classes.button}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>0</span>
            </Button>
        </Fragment>
    );
};

export default CartButton;
