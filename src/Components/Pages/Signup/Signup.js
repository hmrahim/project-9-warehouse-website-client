import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useAUth from "../../Hooks/useAuth";
const Signup = () => {
  const {signupHandeler} = useAUth()
  return (
    <div className="container my-4">
       <Helmet>
            <title className='text-capitalize'>Signup - B.baria fruits house</title>
          </Helmet>
      <div className="row">
        <div className="col-md-6  col-offset-4 mx-auto p-3 bg-white rounded shadow">
          <h2 className="text-center">Signup</h2> <hr />
          <form onSubmit={signupHandeler} action="">
          <div className="mb-3">
              <label for="formGroupExampleInput" className="form-label">
                Name
              </label>
              <input name="name" type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label for="formGroupExampleInput" className="form-label">
                Email
              </label>
              <input name="email" type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label for="formGroupExampleInput" className="form-label">
                Phone number
              </label>
              <input name="phone" type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">
                Password
              </label>
              <input name="password" type="text" className="form-control" />
            </div>
            <div className="mb-3">
            <button className="btn btn-primary w-100" type="submit">Signup</button>
            </div>
          </form>
          <p>
            You are already regiterd ? <Link to="/login">Please login</Link>
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Signup;
