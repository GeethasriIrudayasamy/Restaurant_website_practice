import React, { Fragment } from "react";
import HeaderImg from "../../assets/images/imgforHeader.jpg";
import CartButton from "./CartButton";
// import Logo from "../../assets/icons/Logo_As_Icon.png";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                {/* <img
                    className={classes.logo}
                    src={Logo}
                    alt="Restaurant Logo"
                /> */}
                <h1>Yummy!</h1>
                <CartButton />
            </header>
            <div className={classes["main-img"]}>
                <img
                    className={classes["main-image-img"]}
                    src={HeaderImg}
                    alt="Delicious food"
                />
            </div>
        </Fragment>
    );
};

export default Header;
