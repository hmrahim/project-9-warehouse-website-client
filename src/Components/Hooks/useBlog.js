
import { async } from "@firebase/util";
import axios from "axios"
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useBlog = ()=> {


    const GetBlog = ()=> {
        const [blogs,setBlogs] = useState([])
        
    
        useEffect(()=>{
            fetch("http://localhost:5000/blog")
            .then(res=> res.json())
            .then(data=> setBlogs(data))
           
    
    
        },[blogs])
        return [blogs,setBlogs]
    
    }

    const insertBlog = async(e)=> {
        e.preventDefault()
        const title = e.target.title.value
        const desc = e.target.desc.value
        const obj = {title,desc}
        if(!title || !desc){
            toast.error("You cannot empty any field!")
        }else{
            const data =await axios.post("http://localhost:5000/blog",obj)
       if(data){
           toast.success("Blog posted succesfully!")
           e.target.reset()
       }


        }

        

    }
  

    return {insertBlog,GetBlog}

}

export default useBlog