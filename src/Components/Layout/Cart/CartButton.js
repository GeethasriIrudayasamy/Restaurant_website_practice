import React, { Fragment } from "react";
import classes from "./CartButton.module.css";
import CartIcon from "./CartIcon";

const CartButton = (props) => {
    return (
        <Fragment>
            <button className={classes.button} onClick={props.onClick}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>0</span>
            </button>
        </Fragment>
    );
};

export default CartButton;
