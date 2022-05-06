import React from "react";
import { Link } from "react-router-dom";
import useGetData from "../../Hooks/UseGetData";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Categories = () => {
  const {useCategorie} = useGetData()
  const [categories, setCategories] = useCategorie();
  
  const deleteData = async (id) => {
    const proced = window.confirm("Are you sure to delete data");
    if (proced) {
      const url = `https://secure-tundra-45476.herokuapp.com/categorie/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <div className="bg-white p-2">
       <Helmet>
            <title className='text-capitalize'>All categorie - B.baria fruits house</title>
          </Helmet>
      <div className="row">
        <div className="col-md-12 ">
          {
            categories.length == 0 ? (
              <div className="d-flex justify-content-center mt-3">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
            ) : (

       
          <table class="table table-striped table-hover ">
            <thead>
              <tr>
                <th>Name</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                categories.map((categorie) => (
                  <tr key={categorie._id}>
                    <td>{categorie.categorie}</td>
                    <td className="text-center">
                      <Link
                        to={`/managestock/updatecategorie/${categorie._id}`}
                        className="btn btn-primary btn-sm bg-primary "
                      >
                        Edit
                      </Link>
                      <Link
                        onClick={() => deleteData(categorie._id)}
                        to="#"
                        className="btn btn-danger btn-sm bg-danger mx-2 "
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
               )
              }
        </div>
      </div>
    </div>
  );
};

export default Categories;
