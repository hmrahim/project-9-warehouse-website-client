import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAUth from "../../Hooks/useAuth";

const Login = () => {
  const {handleSignin} = useAUth()
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6  col-offset-4 mx-auto p-3 bg-white rounded shadow">
            <h2 className="text-center">Login</h2> <hr />
          <form onSubmit={handleSignin} action="">
            <div className="mb-3">
              <label for="formGroupExampleInput" className="form-label">
                Email
              </label>
              <input
              name="email"
                type="text"
                className="form-control"
               
              />
            </div>
            <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">
                Password
              </label>
              <input
              name="password"
                type="text"
                className="form-control"
            
              />
            </div>
            <div className="mb-3">
            <button className="btn btn-primary w-100" type="submit">Login</button>
            </div>
          </form>
          <p>Are you new here ? <Link to='/signup'>Please Signup</Link></p>
          <p>Forgot your password ? <Link to='/resetpass'>Reset password</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
