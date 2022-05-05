import React from "react";
import Banner from "../Banner/Banner";
import ProductCard from "../ProductCard/ProductCard";
import Products from "../Products/Products";
import getProducts from "../../Hooks/useProduct";

const Home = () => {
  const { useProducts } = getProducts();
  const [products, setProducts] = useProducts();

  return (
    <div className=" " style={{ minHeight: "100vh" }}>
      <Banner></Banner>

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
        {products.length == 0 ? (
          // <h2 className="text-center">Loading...</h2>
          <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        ) : (
          products
            .slice(0, 6)
            .map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))
        )}
      </div>
      </div>

    </div>
  );
};

export default Home;
