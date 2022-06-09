import React from "react";
import Card from "./Cards";
import Button from "./Button";

import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onCloseError}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onCloseError}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
