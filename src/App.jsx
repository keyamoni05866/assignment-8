import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header'
import Blog from './component/Blog/Blog';
import Bookmarked from './component/Bookmarked/Bookmarked';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  useEffect(()=>{
    fetch("data.json")
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])
//  handler for bookmarked
  const handleForBookmarked = (blog) =>{
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);

}

  return (
    <div className="App">
       <div className="header  m-auto mb-3 ">
            <Header></Header>
      </div>
      <div className="main">
      <div className="container">
        <div className="blog">
          {
            blogs.map(blog=> <Blog blog={blog} key={blog.id} handleForBookmarked={handleForBookmarked} ></Blog> )
          }
           
        </div>
        <div className="bookmark">
           <Bookmarked  bookmark={bookmark}></Bookmarked>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
