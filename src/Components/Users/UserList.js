import React from 'react';
import Card from '../UI/Card';
import classes from './UserList.module.css';
export const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name}({user.age}Years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
