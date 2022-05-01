import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

const ManageStock = () => {
  return (
    <div className="container my-4" >
      <div className="row gx-3">
        <div className="col-md-3 ">
          <div className="border p-1">
            <div className="list-group">
              <Link
                to="/managestock/products"
                className="list-group-item list-group-item-action "
                aria-current="true"
              >
                Products
              </Link>
              <Link
                to="/managestock/addproducts"
                className="list-group-item list-group-item-action"
              >
                Add new product
              </Link>
              <Link
                to="/managestock/categories"
                className="list-group-item list-group-item-action"
              >
                Categories
              </Link>
              <Link
                to="/managestock/addcategorie"
                className="list-group-item list-group-item-action"
              >
                Add new categorie
              </Link>
             
            </div>
          </div>
        </div>
        <div className="col-md-9 ">
          <div className="border p-1">
            
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageStock;
