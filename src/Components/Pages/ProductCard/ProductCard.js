import React, { useState } from "react";
import {useAuthState} from "react-firebase-hooks/auth"
import auth from "../../../firebase.init";

const ProductCard = (props) => {
  const {product} = props
  const {title,unit,price,link,_id}= props.product
  const [user,loading,error] = useAuthState(auth)
  const [added,setAdded] = useState(false)

  

  const order = (product)=> {
    const email = user.email
   
    const obj = product
   // const  newObj = Object.assign(obj,{email:email})
    const newData = {
      id:obj._id,
      title:obj.title,
      unit:obj.unit,
      categorie:obj.categorie,
      price:obj.price,
      quantity:obj.quantity,
      link:obj.link,
      desc:obj.desc,
      email:email

    }
     
    fetch("http://localhost:5000/order",{
      method:"POST",
      headers:{
        "Content-Type" : "Application/json"
      },
      body:JSON.stringify(newData)
    })
    .then(res=> res.json())
    .then(data=> console.log(data))

  }
  return (
    <div className="col-md-4 my-3">
      <div className="card" >
        <img  src={link} className="card-img-top" alt="" />
        <div className="card-body">
          <p className="card-title m-0 text-center">{title}</p>
          <p className="text-center">{unit}/ <spain>{price} tk</spain></p>
          <p className="card-text">
         
          </p>
          <div className="d-flex justify-content-center">
          <button onClick={()=> order(product)} className="btn btn-primary px-3">{added ? "Cancel order" : "Order"}</button>

          </div>
        
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
