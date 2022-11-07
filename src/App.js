import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/components/pages/Home";
import UserBlog from "../src/components/pages/UserBlog";
import Users from "../src/components/pages/Users";
import UserPostForm from "../src/components/pages/UserPostForm.1";

import "../src/styles/fontawesome.min.css";
import "../src/styles/main.css";
import "../src/styles/normalize.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserBlog />} />
        <Route path="/users/posts/new" element={<UserPostForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
