import React from 'react';
import useBlog from '../../Hooks/useBlog';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AllBlogs = () => {
    const {GetBlog} = useBlog()
    const [Blogs,setBlog] = GetBlog()


    const DeleteBlog = async(id)=> {
      const proced = window.confirm("are you sure to delete data")
    
      const remening = Blogs.filter(blog=> blog._id != id)
      if(proced){
          const url = `http://localhost:5000/blog/${id}`
          const data = await axios.delete(url)
          setBlog(remening)
          if(data){
            toast.success("Blog deleted successfully")
          }

      }
     

  }
  


   
    
    return (
        <div>
            <h1 className="text-center text-capitalize">all blogs</h1>
            <table class="table table-striped table-hover ">
            <thead>
              <tr>
                <th width="20%">Title</th>
                <th width="30%">Desc</th>
                <th width="50%" className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                Blogs.map((Blog) => (
                  <tr key={Blog._id}>
                    <td>{Blog.title}</td>
                    <td>{Blog.desc.slice(0,50)+"....."}</td>
                    <td className="text-center">
                      <Link
                        to={`/managestock/updateblog/${Blog._id}`}
                        className="btn btn-primary btn-sm bg-primary "
                      >
                        Edit
                      </Link>
                      <Link
                        onClick={() => DeleteBlog(Blog._id)}
                        to="#"
                        className="btn btn-danger btn-sm bg-danger mx-2 "
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
            
        </div>
    );
};

export default AllBlogs;