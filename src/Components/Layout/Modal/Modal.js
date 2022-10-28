import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Modal = (props) => {
    const Backdrop = (props) => {
        return <div className={classes.backdrop}>{props.children}</div>;
    };
    const ModalOverlay = (props) => {
        return <div className={classes.modal}>{props.children}</div>;
    };

    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop />,
                document.getElementById("modal-overlay")
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                document.getElementById("modal-overlay")
            )}
        </Fragment>
    );
};

export default Modal;
