import React from 'react'
import { Link } from 'react-router-dom';
const BlogCard=()=>{
  return ( 
  <div className='col-3'>
    <div className='blog-card'>
         <div className='card-image'>
            <img src='images/blog-1.jpg'  className='img-fluid'   alt='blog' />
         </div>
         <div className='blog-content'>
            <p className='date'>1 Dec,2022</p>
            <h5 className='title'>
                A beautiful sunday morning</h5>
            <p className='desc'>

            In Gakhars/Khokhars formed a large part of the Hindu Shahi army according to 
            the Persian historian Firishta.[120] Three of the most notable rulers were Lalliya,
             Bhimadeva and Jayapala.


            </p>
            <Link to="/"  className="button" >Read More</Link>
         </div>
    </div>
  </div>
  );
}
export default BlogCard