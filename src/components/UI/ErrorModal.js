import React from "react";
import Card from "./Card";
import Button from "./Button";

import classes from "./ErrorModal.module.css";

export default function ErrorModal(props) {
  const onOkayButtonClick = () => {
    props.resetErrorState();
  };
  return (
    <div>
      <div className={classes.backdrop} onClick={onOkayButtonClick} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.errorTitle}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.Message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={onOkayButtonClick}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}
