import React, { useState } from 'react';
import Card from '../UI/Card.js';
import classes from './AddUser.module.css';
import Button from '../UI/Button.js';
import { ErrorModal } from '../UI/ErrorModal';

export const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] =
    useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const userNameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  };
  const AgeChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredAge.trim().length === 0
    ) {
      setError({
        title: 'Invalid Value',
        message: 'Please Enter a valid value'
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid Value',
        message: 'Please Enter a valid age'
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName('');
    setEnteredAge('');
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
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={userNameChangeHandler}
          ></input>
          <label htmlFor="Age">Age(year)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={AgeChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
