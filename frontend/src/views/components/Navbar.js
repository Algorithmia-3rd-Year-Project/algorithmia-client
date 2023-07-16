import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useSessionContext } from "../../hooks/useSessionContext";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import icon from "../../images/user.png";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useSessionContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="content">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="container">
            <a href="#" className="navbar-brand">
              Algorithmia
            </a>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Reviews
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Top-Ups
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  id="profileDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {!user && <span className="navbar-text">Log In</span>}
                  {user && <span>{user.email}</span>}
                  <img
                    src={icon}
                    alt=""
                    className="rounded-circle"
                    height="25"
                  />
                </a>
                <ul className="dropdown-menu" aria-labelledby="profileDropdown">
                  {user && (
                    <>
                      <li>
                        <a className="dropdown-item" href="#">
                          My Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Settings
                        </a>
                      </li>
                      <li>
                        <button onClick={handleClick} className="dropdown-item">
                          Log out
                        </button>
                      </li>
                    </>
                  )}
                  {!user && (
                    <>
                      <li>
                        <Link to="/login" className="dropdown-item">
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link to="/signup" className="dropdown-item">
                          Sign-Up
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        {user && (
          <div>
            <span>{user.email}</span>
            <button onClick={handleClick}>Log out</button>
          </div>
        )}
        <div>
          <Link to="/">
            <h1>Algorithmia</h1>
          </Link>
          {!user && (
            <div>
              <Link to="/login">
                <p>Login</p>
              </Link>
              <Link to="/signup">
                <p>Signup</p>
              </Link>

              <Link to="/">
                <p>Features</p>
              </Link>
              <Link to="/">
                <p>Reviews</p>
              </Link>
              <Link to="/">
                <p>Top-Ups</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
