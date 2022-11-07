import React from "react";

import Default from "../templates/Default";
import AppLoading from "../organisms/AppLoading";

export default function UserPostForm() {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    fetch("https://62c4e487abea8c085a7e022a.mockapi.io/users/23/posts", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ title, content }),
    }).then(() => {
      setTitle("");
      setContent("");
      setIsLoading(false);
    });
  };

  return isLoading ? (
    <AppLoading />
  ) : (
    <Default>
      <div className="create-post">
        <h1>Criar</h1>

        <form onSubmit={handleFormSubmit} className="create-post__form">
          <div className="create-post__form-name">
            <label htmlFor="name">Título</label>
            <input
              onChange={(event) => setTitle(event.target.value)}
              type="text"
              id="title"
              name="title"
              value={title}
            />
          </div>
          <div className="create-post__form-content">
            <label htmlFor="content">Conteúdo</label>
            <textarea
              onChange={(event) => setContent(event.target.value)}
              name="content"
              id="content"
              value={content}
            ></textarea>
          </div>
          <button className="button-primary">Salvar</button>
        </form>
      </div>
    </Default>
  );
}
