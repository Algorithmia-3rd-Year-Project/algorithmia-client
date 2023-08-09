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
            <Link to="/" className="navbar-brand">
              Algorithmia
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/devlogs" className="nav-link">
                  Devlogs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/reviews" className="nav-link">
                  Reviews
                </Link>
              </li>
              {user ? (
                <li className="nav-item dropdown">
                  {user.userRole === "advertiser" &&
                    <a className="nav-link" data-bs-toggle="dropdown" aria-expanded="false" href="#">
                      Advertising
                    </a>}
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        My Advertisements
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/pplform/add">
                        New Advertisement
                      </a>
                    </li>
                  </ul>
                </li>
              ) : null}

              <li className="nav-item">
                {(!user || user.userRole !== "advertiser") && (
                  <Link to="/topups" className="nav-link">
                    Top-ups
                  </Link>
                )}
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
                        <Link
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#login"
                        >
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#signUp"
                        >
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
      </div>
    </header>
  );
};

export default Navbar;
