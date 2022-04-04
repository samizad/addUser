import React, { useState } from 'react';
import Card from '../UI/Card.js';
import classes from './AddUser.module.css';
import Button from '../UI/Button.js';

export const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] =
    useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const userNameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  };
  const AgeChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUserName, enteredAge);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input
          id="username"
          type="text"
          onChange={userNameChangeHandler}
        ></input>
        <label htmlFor="Age">Age(year)</label>
        <input
          id="age"
          type="number"
          onChange={AgeChangeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
