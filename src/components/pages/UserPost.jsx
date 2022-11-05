import React from "react";

import logo from "../../images/placeholders/logo.svg";
import user1 from "../../images/placeholders/user-1.jpg";
import post3 from "../../images/placeholders/post-3.jpg";

export default function UserPost() {
  return (
    <div>
      <div className="wrapper">
        <div className="app-header">
          <div className="app-header__logo">
            <img src={logo} class="responsive" alt="" />
          </div>
          <div className="app-header__menu">
            <i class="fa fa-bars"></i>
          </div>
        </div>

        <div className="user-post">
          <h2 className="user-post__post-title">Usando React como SPA</h2>
          <div className="user-post__post-date">
            Publicado em 14/06/2022 por
            <img src={user1} class="avatar" alt="" />
            <strong> Chris Hudson</strong>
          </div>
          <div className="user-post__post-photo">
            <img src={post3} class="responsive" alt="" />
          </div>
          <div className="user-post__post-content">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </div>
        </div>

        <div className="app-footer">Módulo React :: Full Stack Development</div>
      </div>
    </div>
  );
}
