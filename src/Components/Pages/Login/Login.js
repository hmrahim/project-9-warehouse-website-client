import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAUth from "../../Hooks/useAuth";
import logo from "./google-logo-9824.png"
import {useAuthState} from "react-firebase-hooks/auth"
import auth from "../../../firebase.init";
import axios from "axios";


const Login = () => {
  const {handleSignin,googleSignin} = useAUth()
  const [user,loading,error] = useAuthState(auth)
  if(user){
    const email = user?.email
    
     axios.post("https://secure-tundra-45476.herokuapp.com/privetapi",{email})
     .then(data=> {
      localStorage.setItem("token",data.data)
      console.log(data.data);

     })
   
  }
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
          <p onClick={googleSignin} className="text-center bg-white text-black border" style={{cursor:"pointer"}}> <img width={40} height={40} className="img-fluid" src={logo} alt="" /> Continue with google</p>
          <p className="text-center">Are you new here ? <Link to='/signup'>Please Signup</Link></p>
          <p className="text-center">Forgot your password ? <Link to='/resetpass'>Reset password</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
