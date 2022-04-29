import React from "react";
import Banner from "../Banner/Banner";
import ProductCard from "../ProductCard/ProductCard";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div className="container my-4">
      <h3 className="text-center text-uppercase">all products</h3>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon3">
          Categorys
        </span>
      <select name="" className="form-control" id="">
          <option selected>Choose s Category</option>
          <option value="">Fresh Fruits</option>
          <option value="">Fresh Fruits</option>
          <option value="">Fresh Fruits</option>
          <option value="">Fresh Fruits</option>
          <option value="">Fresh Fruits</option>
          <option value="">Fresh Fruits</option>
      </select>
      </div>
      <div className="row">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </div>
  );
};

export default Home;
