import React from "react";
import UserListItem from "./UserListItem";

function UserListWrapper(props) {
  return (
    <div className="users__list">
      {props.users
        .sort((a, b) => a.fn.localeCompare(b.fn))
        .map((user) => (
          <UserListItem
            key={user.id}
            name={`${user.fn} ${user.ln}`}
            src={user.avatar}
            id={user.id}
          />
        ))}
    </div>
  );
}

export default UserListWrapper;
