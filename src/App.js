import { AddUser } from './Components/Users/AddUser';
import { UserList } from './Components/Users/UserList';

const App = () => {
  return (
    <div>
      <AddUser />
      <UserList users={[]} />
    </div>
  );
};

export default App;
