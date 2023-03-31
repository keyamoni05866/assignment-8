import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header'
import Blog from './component/Blog/Blog';
import Bookmarked from './component/Bookmarked/Bookmarked';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    const addedBook = bookmark.find (item => item.id === blog.id);
    if(!addedBook){
      const newBookmark = [...bookmark, blog];
      setBookmark(newBookmark);
    }
    else{
      toast("You Have Already Bookmarked This Blog!");
    }

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
           <Bookmarked  bookmark={bookmark} key={bookmark.id}></Bookmarked>
        </div>
      </div>
      <ToastContainer></ToastContainer>
      </div>

    </div>
  )
}

export default App
