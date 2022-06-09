import React from "react";
import Card from "../UI/Cards";

import classes from "./UsersList.module.css";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            <div>
              <strong>{user.name}</strong>{" "}
            </div>
            <div>({user.age} years old)</div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
