import React, { useState } from "react";
import classes from "./AddUser.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

export default function AddUser(props) {
  const [enteredUserName, setenteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const [error, setError] = useState();

  const userNameChangeHandler = (event) => {
    setenteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Input Error",
        message: "Enter a valid username and Age !",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Age Error",
        message: "Enter a valid age !",
      });
      return;
    }

    const userData = {
      userName: enteredUserName,
      age: enteredAge,
    };

    props.onAddNewUser(userData);
    setenteredUserName("");
    setEnteredAge("");
  };

  const resetError = () => {
    setError();
  };

  return (
    <div>
      {error && (
        <ErrorModal
          errorTitle={error.title}
          Message={error.message}
          resetErrorState={resetError}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <div>
            <label htmlFor="username">Username : </label>
            <input
              type="text"
              id="username"
              onChange={userNameChangeHandler}
              value={enteredUserName}
            />

            <label htmlFor="age">age : </label>
            <input
              type="number"
              id="age"
              onChange={ageChangeHandler}
              value={enteredAge}
            />

            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
