import React from "react";
import Card from "../UI/Card";

import classes from "./UserList.module.css";

export default function UserList(props) {
  return (
    // <table>
    //   <thead>
    //     <tr>
    //       <td>UserName</td>
    //       <td>Age</td>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {props.data.map((user) => (
    //       <tr>
    //         <td>{user.userName}</td>
    //         <td>{user.age}</td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>

    <ul>
      {props.data.map((user) => (
        <li>
          <Card className={classes.list}>
            <div className={classes.users}>
              <h2>{user.userName}</h2>
              <div className={classes.userage}>{user.age}</div>
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
}
