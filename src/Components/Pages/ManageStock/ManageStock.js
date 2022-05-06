import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, Outlet, NavLink } from "react-router-dom";

const ManageStock = () => {
  return (
    <div className="container my-4" style={{minHeight:"100vh"}} >
       <Helmet>
            <title className='text-capitalize'>Manage inventory - B.baria fruits house</title>
          </Helmet>
      <div className="row gx-3">
        <div className="col-md-3 ">
          <div className="border p-1">
            <div className="list-group">
              <Link
                to="/managestock/products"
                className="list-group-item list-group-item-action "
                aria-current="true"
              >
                See All items
              </Link>
              <Link
                to="/managestock/addproducts"
                className="list-group-item list-group-item-action"
              >
                Add new item
              </Link>
              <Link
                to="/managestock/categories"
                className="list-group-item list-group-item-action"
              >
               See Categories
              </Link>
              <Link
                to="/managestock/addcategorie"
                className="list-group-item list-group-item-action"
              >
                Add new categorie
              </Link>
              <Link
                to="/managestock/allblogs"
                className="list-group-item list-group-item-action"
              >
                See all blogs
              </Link>
              <Link
                to="/managestock/addblog"
                className="list-group-item list-group-item-action"
              >
                Add new blog
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
