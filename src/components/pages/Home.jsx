import React from "react";

export default function Home() {
  return (
    <div class="home center">
      <div class="home__logo">
        <img src="images/logo.svg" class="responsive" alt="" />
      </div>
      <select class="home__select-users">
        <option>User 1</option>
        <option>User 2</option>
        <option>User 3</option>
      </select>
      <button class="button-primary">Entrar</button>
    </div>
  );
}
