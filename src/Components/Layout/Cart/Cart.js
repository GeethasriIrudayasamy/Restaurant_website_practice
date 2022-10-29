import React, { useContext } from "react";
import CartContext from "../../../Store/cart-context";
import Modal from "../Modal/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
    const CartCtx = useContext(CartContext);
    const cartitems = (
        <ul className={classes["cart-list"]}>
            {CartCtx.items.map((item) => {
                return (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                    />
                );
            })}
        </ul>
    );

    return (
        <div className={classes["cart-list"]}>
            <Modal onClick={props.onClose}>
                {cartitems}
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>{CartCtx.totalAmount.toFixed(2)}</span>
                </div>
                <div className={classes.actions}>
                    <button
                        className={classes["button--alt"]}
                        onClick={props.onClose}
                    >
                        Close
                    </button>
                    <button className={classes.button}>Order</button>
                </div>
            </Modal>
        </div>
    );
};

export default Cart;
