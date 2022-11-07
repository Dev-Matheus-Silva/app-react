import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Users from "./components/pages/Users";
import UserBlog from "./components/pages/UserBlog";
import UserPost from "./components/pages/UserPost";
import UserPostForm from "./components/pages/UserPostForm.1";

import "./styles/normalize.css";
import "./styles/fontawesome.min.css";
import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Users/:userId" element={<UserBlog />} />
        <Route path="/Users/:UsersId/posts/:postId" element={<UserPost />} />
        <Route path="/Users/:UsersId/posts/new" element={<UserPostForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
