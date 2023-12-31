import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header/Header";
import Blog from "./component/Blog/Blog";
import Bookmarked from "./component/Bookmarked/Bookmarked";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Answer from "./component/Question-Answer/Answer";
function App() {
  const [blogs, setBlogs] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const [addTime, setAddTime] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  //  handler for bookmarked
  const handleForBookmarked = (blog) => {
    const addedBook = bookmark.find((item) => item.id === blog.id);
    if (!addedBook) {
      const newBookmark = [...bookmark, blog];
      setBookmark(newBookmark);
    } else {
      toast("You Have Already Bookmarked This Blog!");
    }
  };
  // handler for time
  const handleForTime = (readTime) => {
    console.log(readTime);
    const newAddTime = readTime + addTime;
    setAddTime(newAddTime);
  };
  return (
    <div className="App">
      <div className="header  m-auto mb-3 ">
        <Header></Header>
      </div>
      <div className="main">
        <div className="container">
          <div className="blog">
            {blogs.map((blog) => (
              <Blog
                key={blog.id}
                blog={blog}
                handleForBookmarked={handleForBookmarked}
                handleForTime={handleForTime}
              ></Blog>
            ))}
          </div>
          <div className="bookmark">
            <Bookmarked
              key={bookmark.id}
              bookmark={bookmark}
              addTime={addTime}
            ></Bookmarked>
          </div>
          <div className="Answer-container">
            <Answer></Answer>
          </div>
        </div>

        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
}

export default App;
