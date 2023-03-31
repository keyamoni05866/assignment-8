import React from 'react';
import "./Bookmarked.css"
const Bookmarked = ( {bookmark}) => {
 console.log(bookmark)

    return (
        <div className="sidebar">
           <div className="time ms-3 ">
           <h1 className="fs-6">Spent time on read : </h1>

           </div>
           <div className="bookmarked">
            <h1 className='fs-5'>Bookmarked Blogs: {bookmark.length} </h1>
          
          {
                bookmark.map(singleB => <div className="title"> <p>{singleB.title}</p> </div>)
            }
           
      
           </div>
        </div>
    );
};

export default Bookmarked;