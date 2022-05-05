import React from 'react';
import {useAuthState} from "react-firebase-hooks/auth"
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({children}) => {
    const location = useLocation()
    const [user,loading,error] = useAuthState(auth)
    if(loading){
        return  <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    }
    if(!user){
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
    return children
};

export default RequireAuth;