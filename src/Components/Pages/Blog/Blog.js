import React from 'react';
import { Helmet } from 'react-helmet-async';
import useBlog from '../../Hooks/useBlog';

const Blog = () => {
    const {GetBlog} = useBlog()
    const [blogs,setBlogs] = GetBlog()
    
    return (
        <div className='container' style={{minHeight:"100vh"}}>
             <Helmet>
            <title className='text-capitalize'>Blogs - B.baria fruits house</title>
          </Helmet>
            <div className="border rounded p-2 m-2">
                {blogs.length==0 ? (
                     <div className="d-flex justify-content-center">
                     <div className="spinner-border" role="status">
                       <span className="visually-hidden">Loading...</span>
                     </div>
                   </div>
                ) :(
                    blogs.map(blog=>  <article className=' p-2 rounded shadow-sm my-3'>
                    <h2>{blog.title}</h2>
                    <hr />
                        <p>{blog.desc}</p>
                        <div className='d-flex'>
                            <p className=' border px-4 mx-2 my-2 bg-secondary text-white rounded' style={{cursor:"pointer"}}>Like</p> 
                          
                            <p className=' border px-4 mx-2 my-2 bg-secondary text-white rounded ' style={{cursor:"pointer"}}>Comment</p>
                            </div>
                    </article>))
                }
         
            
            </div>
        </div>
    );
};

export default Blog;