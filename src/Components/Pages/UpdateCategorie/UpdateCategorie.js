import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateCategorie = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [categorie,setCategorie] = useState("")
    const url = `https://secure-tundra-45476.herokuapp.com/categorie/${id}`
    useEffect(()=> {
        fetch(url)
        .then(res=>res.json())
        .then(data=> setCategorie(data.categorie))
    },[])


    const updatecategorie = (e)=> {
        e.preventDefault()
        const categorie = e.target.categorie.value
        const url = `https://secure-tundra-45476.herokuapp.com/categorie/${id}`
    if(!categorie){
        toast.error("You cannot provide empty this field")
    }else{
        fetch(url,{
            method:"PUT",
            headers:{
                "Content-Type" : "Application/json"
            },
            body:JSON.stringify({categorie})
        })
        .then(res=> res.json())
        .then(data=>{
            toast.success("Categorie updated successfully")
            navigate("/managestock/categories")
        })

    }
        
     
        // navigate("managestock/categories")

  
      }


    return (
       <div>
            <h2 className="text-center">Add New Categorie</h2> <hr />
      <form  onSubmit={updatecategorie}  action="">
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Categorie
          </label>
          <input onChange={(e)=>setCategorie(e.target.value)} value={categorie}  name="categorie" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary " type="submit">
            Sibmit
          </button>
        </div>
      </form>
        </div>
    );
};

export default UpdateCategorie;