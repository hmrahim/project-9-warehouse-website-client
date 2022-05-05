import React from 'react';
import { Link } from 'react-router-dom';
import useAUth from '../../Hooks/useAuth';

const ResetPass = () => {
  const {resetpass} = useAUth()
    return (
        <div className="container my-4" style={{minHeight:"100vh"}}>
      <div className="row">
        <div className="col-md-6  col-offset-4 mx-auto p-3 bg-white rounded shadow">
            <h2 className="text-center">Reset Password</h2> <hr />
          <form onSubmit={resetpass} action="">
            <div className="mb-3">
              <label for="formGroupExampleInput" className="form-label">
                Email
              </label>
              <input
              name='email'
                type="text"
                className="form-control"
               
              />
            </div>
          
            <div className="mb-3">
            <button className="btn btn-primary w-100" type="submit">Send</button>
            </div>
          </form>
        
        </div>
      </div>
    </div>
    );
};

export default ResetPass;