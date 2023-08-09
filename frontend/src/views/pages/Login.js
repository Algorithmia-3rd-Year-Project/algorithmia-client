import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <>
      <div
        class="modal"
        id="login"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content" style={{ backgroundColor: "#ACDBDF" }}>
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Algorithmia Account Login
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Username/Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="recipient-name"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <br />
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button
                    class="btn btn-primary"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Log In
                  </button>
                  {error && <div>{error}</div>}
                </div>
                <br />
                <div class="row mb-4">
                  <div class="col-md-6 d-flex justify-content-center">
                    <a href="#!">Forgot password?</a>
                  </div>
                  <div class="col-md-6 d-flex justify-content-center">
                    <a href="#!">Register</a>
                  </div>
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button class="btn btn-primary" type="button">
                    Login as an Advertiser
                  </button>
                </div>
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
