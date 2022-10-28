import Modal from "../Modal/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
    const cartitems = (
        <ul className={classes["cart-list"]}>
            {[
                {
                    id: "1",
                    name: "Sushi",
                    description: "Finest fish and veggies",
                    price: 22.99,
                },
            ].map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    );

    return (
        <div className={classes["cart-list"]}>
            <Modal>
                {cartitems}
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>22.99</span>
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
