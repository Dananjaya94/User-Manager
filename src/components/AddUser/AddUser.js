import React, { useRef, useState } from "react";
import classes from "./AddUser.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";

export default function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Input Error",
        message: "Enter a valid username and Age !",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Age Error",
        message: "Enter a valid age !",
      });
      return;
    }

    const userData = {
      userName: enteredName,
      age: enteredUserAge,
    };

    props.onAddNewUser(userData);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const resetError = () => {
    setError();
  };

  return (
    <Wrapper>
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
            <input type="text" id="username" ref={nameInputRef} />

            <label htmlFor="age">age : </label>
            <input type="number" id="age" ref={ageInputRef} />

            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </Wrapper>
  );
}
