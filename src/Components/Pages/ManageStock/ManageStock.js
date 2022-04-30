import React from "react";
import { Link, Outlet } from "react-router-dom";

const ManageStock = () => {
  return (
    <div className="container my-4">
      <div className="row gx-3">
        <div className="col-md-3 ">
          <div className="border p-1">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header m-0" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Products
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <ul class="list-group">
                    <li class="list-group-item"><Link className="text-decoration-none text-black" to="/managestock/products">All Products</Link></li>
                    <li class="list-group-item"><Link className="text-decoration-none text-black" to="/managestock/addproducts">Add New Product</Link></li>
                   
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header m-0" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Categories
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <ul class="list-group">
                    <li class="list-group-item"><Link className="text-decoration-none text-black" to="/managestock/categories">All Categories</Link></li>
                    <li class="list-group-item"><Link className="text-decoration-none text-black" to="/managestock/addcategorie">Add New Categorie</Link></li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9 ">
          <div className="border p-3">
            <Outlet></Outlet>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageStock;
