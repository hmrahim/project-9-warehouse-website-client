import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
    const [quantity,setQuantity] = useState(1)
    
    const [details, setDetails] = useState([]);
    
  
    
    const [] = useState("")
  const { id } = useParams();
  const url = `http://localhost:5000/product/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [details]);

  const increase = ()=> {
      setQuantity(quantity + 1)

  }
  const decrease = ()=> {
    
    if(quantity <= 1){
        return false
    }else{
        setQuantity(quantity - 1)

    }

  }
  

  const updateQuantity = ()=> {
    const url = `http://localhost:5000/updateqty/${id}`;
    const oldQty = parseInt(details.quantity) 
    const currentQty = parseInt(quantity)
    const newQty = oldQty - currentQty
    const finalQty = newQty.toString()
    
    console.log(finalQty);

    if(details.quantity < quantity){
        toast.error(`You cannot delivered more then available quantity ${details.quantity}`)
    }else{
        fetch(url,{
            method:"POST",
            headers:{
                "Content-Type" : "Application/json"
            },
            body:JSON.stringify({finalQty})
        })
        .then(res=> res.json())
        .then(data=>{
            
        })
        toast.success("Items delivered successfully!")

    }
      
    
  }
  return (
    <div className="container bg-white my-4" >
      <div className="row border">
        <div className="col-md-6">
          <div>
            <img width="100%" src={details.link} alt="" />
          </div>
        </div>
        <div className="col-md-6 px-3">
          <h3 className="my-3">{details.title}</h3>
          <h5>Unit: {details.unit}</h5>
          <h5 className="text-capitalize">
            Price: {details.price} tk per unit
          </h5>
          <h5 className="text-capitalize">
            Available Quantity: {details.quantity} 
          </h5>


          <div class="input-group my-3  w-50 d-flex"> <h5 className="me-2">Quantity: </h5>
            <button
            onClick={decrease}
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon1"
            >
              -
            </button>
            <input
            onChange={(e)=> setQuantity(e.target.value)}
              type="number"
              class="form-control text-center"
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              value={quantity}
            />
             <button
             onClick={increase}
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon1"
            >
              +
            </button>

            
          </div>
          <button onClick={updateQuantity} className={`${details.quantity == 0 ? "disabled" : '' } btn btn-primary text-capitalize px-3 my-4`}> {details.quantity == 0 ? "Item not Available" : 'delivered' } </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
