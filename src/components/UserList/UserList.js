import React from "react";
import Card from "../UI/Card";

import classes from "./UserList.module.css";

export default function UserList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.data.map((user) => (
          <li key={user.userName}>
            {user.userName} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
