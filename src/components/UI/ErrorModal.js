import React, { Fragment } from "react";
import Card from "./Card";
import Button from "./Button";
import ReactDOM from "react-dom";

import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.resetErrorState} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.errorTitle}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.Message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.resetErrorState}>Okay</Button>
      </footer>
    </Card>
  );
};

export default function ErrorModal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop resetErrorState={props.resetErrorState} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          errorTitle={props.errorTitle}
          Message={props.Message}
          resetErrorState={props.resetErrorState}
        />,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
}
