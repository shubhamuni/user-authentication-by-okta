import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { isAuthenticated, logout, user,loginWithRedirect } = useAuth0();
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/" >
          Acme Staff Portal
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {isAuthenticated ?<><li className="nav-item">
              <Link className="nav-link" to="/staff">
                Staff
              </Link>
            </li>
              <li className="nav-item">
              <Link className="nav-link" to="/card">
                  Hello {user.name}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/staff" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Logout
              </Link>
            </li> </> :
              <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => loginWithRedirect()}>
                Login
              </Link>
            </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;