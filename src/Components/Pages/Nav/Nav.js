import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useAUth from '../../Hooks/useAuth';

const Nav = () => {
  const [user, loading, error] = useAuthState(auth);
  const {logout} = useAUth()
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item m-0">
                <NavLink activeClassName="active-class" className="nav-link  m-0" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item m-0">
                <NavLink activeClassName="active-class" className="nav-link  m-0" aria-current="page" to="/managestock">Manage Stock</NavLink>
              </li>
              
                
              
           
            </ul>
            {
              user ?
            
            <a onClick={logout} className="nav-link text-white   mx-2 " aria-current="page" href='#'>Logout</a>
            :
            <Link className="nav-link text-white   mx-2 " aria-current="page" to="/login">Login</Link>
          }
          </div>
        </div>
      </nav>
    );
};

export default Nav;