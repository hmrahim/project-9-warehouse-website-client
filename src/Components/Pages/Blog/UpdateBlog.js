import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from 'react-helmet-async';


const UpdateBlog = () => {
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    const navigate = useNavigate()
   
    const {id} = useParams()
    const url = `https://secure-tundra-45476.herokuapp.com/blog/${id}`
   useEffect(()=> {
    axios.get(url)
    .then(data=> {
       setTitle(data.data.title)
       setDesc(data.data.desc)
    })
   },[])
    const updateBlog =async (e)=> {
        e.preventDefault()
        if(!title || !desc){
            toast.error("You cannot provide empty any field !")
        }else{
            const title = e.target.title.value
            const desc = e.target.desc.value
            const obj = {title,desc}
            const data = await axios.put(url,obj)
            if(data){
                toast.success("Blog updated successfully!")
                navigate("/managestock/allblogs")
            }

        }
      
        
        

    }
    return (
        <div>
           <Helmet>
            <title className='text-capitalize'>Update blog - B.baria fruits house</title>
          </Helmet>
      <h2 className="text-center">Update Blog</h2> <hr />
      <form onSubmit={updateBlog}  action="" className="p-2">
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Blog Title
          </label>
          <input onChange={(e)=> setTitle(e.target.value)} value={title} name="title" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Blog Description
          </label>
          <textarea onChange={(e)=> setDesc(e.target.value)}  value={desc} className="form-control" name="desc" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="mb-3">
          <button className="btn btn-primary " type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
    );
};

export default UpdateBlog;