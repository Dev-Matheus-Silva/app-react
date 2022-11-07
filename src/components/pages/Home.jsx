import React from "react";

import logo from "../../images/placeholders/logo.svg";

export default function Home() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(()=> {
    fetch("https://62c4e487abea8c085a7e022a.mockapi.io/users")
     .then(response => response.json())

  },[]);

  return (
    <div className="home center">
      <div className="home__logo">
        <img src={logo} class="responsive" alt="" />
      </div>
      <select className="home__select-users">
        <option>User 1</option>
        <option>User 2</option>
        <option>User 3</option>
      </select>
      <button className="button-primary">Entrar</button>
    </div>
  );
}
