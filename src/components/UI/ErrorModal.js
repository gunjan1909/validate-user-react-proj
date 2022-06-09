import React from "react";
import Card from "./Cards";
import Button from "./Button";

import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <Card>
      <h2>{props.title}</h2>
      <div>
        <p>{props.message}</p>
      </div>
      <footer>
        <Button>Okay</Button>
      </footer>
    </Card>
  );
};

export default ErrorModal;
