import React from "react";
import { Helmet } from "react-helmet-async";
import useBlog from "../../Hooks/useBlog";

const AddBlog = () => {
    const {insertBlog} = useBlog()
  return (
    <div>
  <Helmet>
  <title className='text-capitalize'>Add new blog - B.baria fruits house</title>
</Helmet>
      <h2 className="text-center">Add New Blog</h2> <hr />
      <form onSubmit={insertBlog}  action="" className="p-2">
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Blog Title
          </label>
          <input name="title" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Blog Description
          </label>
          <textarea className="form-control" name="desc" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="mb-3">
          <button className="btn btn-primary " type="submit">
            Sibmit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
