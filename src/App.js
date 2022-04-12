import { AddUser } from './Components/Users/AddUser';
import { UserList } from './Components/Users/UserList';
import React, { useState } from 'react';

const App = () => {
  const [usersList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        {
          name: uName,
          age: uAge,
          id: Math.random().toString()
        }
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
};

export default App;
