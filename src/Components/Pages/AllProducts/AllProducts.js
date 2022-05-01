import React from "react";
import { Link } from "react-router-dom";
import { useApi } from "../../Hooks/useApi";
import getProducts from "../../Hooks/useProduct";


const AllProducts = () => {
  const {useProducts} = getProducts()
  const [products, setProducts] = useProducts();
const {deleteProduct} = useApi()
  return (
    <div className="p-1">
     <div className="row">
       <div className="col-md-12">
       <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th width="10%">Name</th>
            <th width="10%">Image</th>
            <th width="10%">Available Quantity</th>
            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="">
              <td className="text-center">{product.title}</td>
              <td className="text-center">{product.link}</td>
              
              <td className="text-center">{product.quantity}</td>
              
              <td>
              <Link className="btn btn-primary btn-sm ms-2 mt-2" to={`/managestock/updateproduct/${product._id}`}>Edit</Link>
              <Link className="btn btn-info btn-sm ms-2 mt-2" to="">View</Link>
              <Link onClick={()=> deleteProduct(product._id)} className="btn btn-danger btn-sm ms-2 mt-2" to="">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       </div>
     </div>
    </div>
  );
};

export default AllProducts;
