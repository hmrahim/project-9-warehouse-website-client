import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import useGetData from '../../Hooks/UseGetData';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdataProduct = () => {
  const {id} = useParams()
  const [title,setTitle] = useState("")
  const [unit,setUnit] = useState("")
  const [categorie,setCategorie] = useState("")
  const [price,setPrice] = useState("")
  const [qty,setQty] = useState("")
  const [link,setLink] = useState("")
  const [desc,setDesc] = useState("")
  
    const {useCategorie} = useGetData()
    const [categories,setCategories] = useCategorie()
    const url = `http://localhost:5000/product/${id}`

   useEffect(()=> {
     fetch(url)
     .then(res=> res.json())
     .then(data=>{
       setTitle(data.title)
       setUnit(data.unit)
       setCategorie(data.categorie)
       setPrice(data.price)
       setQty(data.quantity)
       setLink(data.link)
       setDesc(data.desc)
     })
     
   },[])

const updateProduct =async(e)=> {
  e.preventDefault()
  const title = e.target.title.value
  const unit = e.target.unit.value
  const price = e.target.price.value
  const link = e.target.link.value
  const categorie = e.target.categorie.value
  const quantity = e.target.quantity.value
  const desc = e.target.desc.value

  const data = {title,unit,price,link,categorie,quantity,desc}
        const url = `http://localhost:5000/product/${id}`
  if(!title || !unit || !price || !link || !categorie || !quantity || !desc){
  toast.error("You cannot provide empty any field")

  }else{
    fetch(url,{
      method:"PUT",
      headers:{
        "Content-Type" : "Application/json"
      },
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=> {
      toast.success("Product updated successfully!")
    })
  }
}

    return (
        <div className='px-2'>
        <h2 className="text-center">Update Product</h2> <hr />
        <form onSubmit={updateProduct}  action="">
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Title
            </label>
            <input onChange={(e)=> setTitle(e.target.value)} value={title} name="title" type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Unit
            </label>
            <select onChange={(e)=> setUnit(e.target.value)} value={unit} name="unit"  className='form-control' id="">
                <option selected>Choose Unit</option>
                <option value="1kg">1kg</option>
                <option value="4pcs">4pcs</option>
                <option value="1pcs">1pcs</option>
            </select>
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Categorie
            </label>
            <select onChange={(e)=> setCategorie(e.target.value)} value={categorie} name="categorie"  className='form-control' id="">
                <option selected>Choose Categorie</option>
                {
                  categories.map(categorie=> <option value={categorie.categorie}>{categorie.categorie}</option>)
                }
                
                
            </select>
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Price
            </label>
            <input onChange={(e)=> setPrice(e.target.value)} value={price} name="price" type="number" className="form-control" />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Quantity
            </label>
            <input onChange={(e)=> setQty(e.target.value)} value={qty} name="quantity" type="number" className="form-control" />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Image link
            </label>
            <input onChange={(e)=> setLink(e.target.value)} value={link} name="link" type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Description
            </label> <br />
            <textarea onChange={(e)=> setDesc(e.target.value)} value={desc} name="desc" id="" cols="50" rows="5">
  
            </textarea>
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

export default UpdataProduct;