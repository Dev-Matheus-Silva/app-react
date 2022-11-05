import React from "react";
import logo from "../../images/placeholders/logo.svg";

export default function UserPostForm() {
  return (
    <div className="wrapper">
      <div className="app-header">
        <div className="app-header__logo">
          <img src={logo} className="responsive" alt="" />
        </div>
        <div className="app-header__menu">
          <i className="fa fa-bars"></i>
        </div>
      </div>

      <div className="creat-post">
        <h1>criar</h1>

        <form className="creat-post__form">
          <div className="creat-post__form-name">
            <label htmlFor="name">Titulo</label>
            <input type="text" id="name" name="title" />
          </div>

          <div className="creat-post__form-content">
            <label htmlFor="content">conteúdo</label>
            <textarea name="contet" id="content"></textarea>
          </div>
          <button className="button-primary">salvar</button>
        </form>
      </div>

      <div className="app-footer">Módulo react :: Full Stack Development</div>
    </div>
  );
}
