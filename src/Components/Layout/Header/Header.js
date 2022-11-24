import React, { Fragment } from "react";
import HeaderImg from "../../../assets/images/imgforHeader.jpg";
import CartButton from "../Cart/CartButton";
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals!</h1>
                <CartButton onClick={props.onClick} />
            </header>
            <div className={classes["main-img"]}>
                <img
                    className={classes["main-img"]}
                    src={HeaderImg}
                    alt="Delicious food"
                />
            </div>
        </Fragment>
    );
};

export default Header;
