import ListofPosts from "../components/ListofPosts.jsx";
import { useState} from "react";
import { Outlet } from "react-router-dom";


function Posts() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  
  return (
    <>
      <Outlet />
      <main className="App">
        <ListofPosts />
      </main>
    </>

  );
}

export default Posts;
