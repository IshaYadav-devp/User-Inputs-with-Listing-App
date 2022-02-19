import React, { useState, useRef } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import styles from "./InputForm.module.css";

const InputForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();

  // const nameChangeHandler = (event) => {
  //   setEnteredUserName(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredUserAge(event.target.value);
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty valuse).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age(>0).",
      });
      return;
    }

    props.onSaveUserData(enteredName, enteredAge);
    // setEnteredUserAge(""); //resetting input fields when using State
    // setEnteredUserName("");
    nameInputRef.current.value = ""; //resetting input fields when using Ref
    ageInputRef.current.value = ""; //it's direct DOM manipulation
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}
      <Card>
        <form onSubmit={submitHandler}>
          <div className={styles["new-user__control"]}>
            <div className={styles["new-user__control"]}>
              <label>User Name:</label>
              <input
                type="text"
                // value={enteredUserName}
                // onChange={nameChangeHandler}
                ref={nameInputRef}
              />
            </div>
            <div className={styles["new-user__control"]}>
              <label>Age (Years): </label>
              <input
                type="number"
                step="1"
                // value={enteredUserAge}
                // onChange={ageChangeHandler}
                ref={ageInputRef}
              />
            </div>
          </div>
          <div className={styles["new-user__actions"]}>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default InputForm;
