import React from 'react';
import useBlog from '../../Hooks/useBlog';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const AllBlogs = () => {
    const {GetBlog} = useBlog()
    const [Blogs,setBlog] = GetBlog()


    const DeleteBlog = async(id)=> {
     const proced = window.confirm("are you sure to delete data")
    //const proced = alert()
    
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


  const alert = ()=> {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

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