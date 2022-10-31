import React, { useContext } from "react";
import CartContext from "../../../Store/cart-context";
import Modal from "../Modal/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
    const CartCtx = useContext(CartContext);

    const removeItem = (id) => {
        CartCtx.removeItem(id);
    };

    const addItem = (item) => {
        CartCtx.addItem(item);
    };

    const cartitems = (
        <ul className={classes["cart-list"]}>
            {CartCtx.items.map((item) => {
                return (
                    <CartItem
                        onAdd={addItem.bind(null, item)}
                        onRemove={removeItem.bind(null, item.id)}
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={+item.price}
                    ></CartItem>
                );
            })}
        </ul>
    );

    return (
        <div className={classes["cart-list"]}>
            <Modal>
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
