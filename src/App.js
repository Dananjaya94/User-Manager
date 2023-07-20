import { Fragment, useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

const initial_users = [
  { userName: "Nuwan", age: "28" },
  { userName: "Oshini", age: "27" },
];

function App() {
  const [users, setUser] = useState(initial_users);

  const addUserHandler = (newData) => {
    console.log("In App.js");
    console.log(newData);
    setUser((prevData) => {
      return [newData, ...prevData];
    });
    console.log(users);
  };

  return (
    <Fragment>
      <AddUser onAddNewUser={addUserHandler} />
      <UserList data={users} />
    </Fragment>
  );
}

export default App;
