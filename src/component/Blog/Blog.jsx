import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const Blog = (props) => {
    console.log(props)
    const {title, authorName,coverImage,authorImage, publishDate,readTime} = props.blog
   const handleForBookmarked = props.handleForBookmarked
    return (
        <div>
            <div className="blog-container">
                <div className="cover-image">
                    <img src={coverImage} alt="" />
                </div>
                <div className="profile-container ">
                    <div className="author m-2">
                    <div>
                    <img src={authorImage} alt="" />
                    </div>
                    <div className="ms-4" >
                    <h2 className="fs-4 mb-0">{authorName}</h2>
                    <p className="fs-6 ">{publishDate}</p>
                    </div>
                    </div>
                    <div className="read-time m-3">
                      <p className=""> {readTime} min read 
                  <FontAwesomeIcon onClick={() => handleForBookmarked(props.blog)} icon={faBookmark } />
                        
                      </p>
                    </div>
                  
                </div>
                <div className="w-75 ms-2  ">
                <h1 className="fs-3">{title}</h1> 
                </div>
               <div className="m-2">
               <a href="#" >Mark as read</a>
               </div>
            </div>
         
        </div>
    );
};

export default Blog;