import React from 'react';
import useBlog from '../../Hooks/useBlog';

const Blog = () => {
    const {GetBlog} = useBlog()
    const [blogs,setBlogs] = GetBlog()
    
    return (
        <div className='container' style={{minHeight:"100vh"}}>
            <div className="border rounded p-4 m-4">
                {
                    blogs.map(blog=>  <article className=' p-3 rounded shadow-sm my-3'>
                    <h2>{blog.title}</h2>
                    <hr />
                        <p>{blog.desc}</p>
                        <div className='d-flex'>
                            <p className=' border px-4 mx-2 my-2 bg-secondary text-white rounded' style={{cursor:"pointer"}}>Like</p> 
                            <p className=' border px-4 mx-2 my-2 bg-secondary text-white rounded' style={{cursor:"pointer"}}>Unlike</p> 
                            <p className=' border px-4 mx-2 my-2 bg-secondary text-white rounded ' style={{cursor:"pointer"}}>Comment</p>
                            </div>
                    </article>)
                }
         
            
            </div>
        </div>
    );
};

export default Blog;