import React, { Fragment, useContext } from "react";
import CartContext from "../../../Store/cart-context";
import classes from "./CartButton.module.css";
import CartIcon from "./CartIcon";

const CartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + +item.amount;
    }, 0);
    return (
        <Fragment>
            <button className={classes.button} onClick={props.onClick}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>{+numberOfCartItems}</span>
            </button>
        </Fragment>
    );
};

export default CartButton;
