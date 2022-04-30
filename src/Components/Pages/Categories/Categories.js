import React from "react";
import { Link } from "react-router-dom";
import { useCategorie, deleteData } from "../../Hooks/UseGetData";
import axios from "axios";



  return (
    <div className="bg-white p-2">
      <div className="row">
        <div className="col-md-8 col-md-offset-4">
          <table class="table table-striped table-hover ">
            <thead>
              <tr>
                <th>Name</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.length == 0 ? (
                <h3 className="text-center">No data available</h3>
              ) : (
                categories.map((categorie) => (
                  <tr>
                    <td>{categorie.categorie}</td>
                    <td className="text-center">
                      <Link
                        to=""
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
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Categories;
