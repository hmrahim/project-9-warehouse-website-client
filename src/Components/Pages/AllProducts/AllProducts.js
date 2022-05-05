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
     
         {
           products.length == 0 ? (
            <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
           ) :
           (

       
       <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th width="10%" className="text-center">Name</th>
            <th className="text-center">Image</th>
            <th width="10%" className="text-center">Available Quantity</th>
            <th className="text-center">Supplier</th>
            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="">
              <td className="text-center">{product.title}</td>
              <td className="text-center"><img width={100} height={100} src={product.link} alt="" /></td>
              
              <td className="text-center">{product.quantity}</td>
              <td className="text-center">{product.suply}</td>
              
              <td>
              <Link className="btn btn-primary btn-sm ms-2 mt-2" to={`/managestock/updateproduct/${product._id}`}>Edit</Link>
             
              <Link onClick={()=> deleteProduct(product._id)} className="btn btn-danger btn-sm ms-2 mt-2" to="">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          )
        }
       </div>
   
  );
};

export default AllProducts;
