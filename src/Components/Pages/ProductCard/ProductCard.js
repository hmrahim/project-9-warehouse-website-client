import React from "react";

const ProductCard = (props) => {
  const {title,unit,price,link,_id}= props.product
  return (
    <div className="col-md-3 my-3">
      <div className="card" >
        <img  src={link} className="card-img-top" alt="" />
        <div className="card-body">
          <p className="card-title m-0 text-center">{title}</p>
          <p className="text-center">{unit}/ <spain>{price} tk</spain></p>
          <p className="card-text">
         
          </p>
          <div className="d-flex justify-content-center">
          <button className="btn btn-primary px-3">Order</button>

          </div>
        
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
