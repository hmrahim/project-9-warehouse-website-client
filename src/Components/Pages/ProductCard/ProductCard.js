import React from "react";

const ProductCard = () => {
  return (
    <div className="col-md-3 my-3">
      <div className="card" >
        <img  src="https://i.ibb.co/dLYDsDs/Screenshot-2022-04-29-014332.png" className="card-img-top" alt="" />
        <div className="card-body">
          <p className="card-title m-0 text-center">Product title</p>
          <p className="text-center">1pcs/ <spain>120 tk</spain></p>
          <p className="card-text">
         
          </p>
          <div className="d-flex justify-content-center">
          <button className="btn btn-primary btn-sm">Order</button>

          </div>
        
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
