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
        <nav className="navbar navbar-expand fixed" style={{backgroundColor: "#0C475D", fontSize: "18px"}}>
          {/* fontFamily: "Bricolage Grotesque" */}
          <div className="container">
            <Link to="/" className="navbar-brand" style={{color: "white", fontSize:"22px"}}>
              <b>Algorithmia</b>
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link" style={{color: "white"}}>
                  Home
                </Link>
              </li>
              <div className="vr mx-3 mt-2" style={{color: "white", height: "30px", width: "2px"}}></div>
              <li className="nav-item">
                <Link to="/devlogs" className="nav-link" style={{color: "white"}}>
                  Devlogs
                </Link>
              </li>
              <div className="vr mx-3 mt-2" style={{color: "white", height: "30px", width: "2px"}}></div>
              <li className="nav-item">
                <Link to="/reviews" className="nav-link" style={{color: "white"}}>
                  Reviews
                </Link>
              </li>
              <div className="vr mx-3 mt-2" style={{color: "white", height: "30px", width: "2px"}}></div>
              {user ? (
                <li className="nav-item dropdown">
                  {user.userRole === "advertiser" &&
                    <a className="nav-link" style={{color: "white"}} data-bs-toggle="dropdown" aria-expanded="false" href="#">
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
                  <Link to="/topups" className="nav-link" style={{color: "white"}}>
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
                  {!user && <span className="navbar-text" style={{color: "white"}}>Log In</span>}
                  {user && <span style={{color: "white"}}>{user.email}</span>}
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
                        {user.userRole === "advertiser" &&
                          <a className="dropdown-item" href="/adprofile">
                            My Profile
                          </a>}
                        {user.userRole !== "advertiser" &&
                          <a className="dropdown-item" href="/profile">
                            My Profile
                          </a>}
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
