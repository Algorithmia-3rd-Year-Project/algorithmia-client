import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useSessionContext } from "../../hooks/useSessionContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useSessionContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
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
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
