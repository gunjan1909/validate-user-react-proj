import React, { useState } from "react";

import Card from "../UI/Cards";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const [error, setError] = useState("");

  const usernameChangeHandeler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandeler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    //validation
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid username and age(non-empty)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age(non-negative)",
      });
      return;
    }

    props.onAddUser(enteredUsername, +enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCloseError={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandeler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandeler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
