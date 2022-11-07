import React from "react";

import Avatar from "../atoms/Avatar";

export default function UserBio(props) {
  return (
    <div className="user-blog__header">
      <div className="user-blog__header-photo">
        <Avatar src={props.user.avatar} />
      </div>
      <h1 className="user-blog__header-title">
        {props.user.fn} {props.user.ln}
      </h1>
      <p className="user-blog__header-bio">{props.user.bio}</p>
    </div>
  );
}
