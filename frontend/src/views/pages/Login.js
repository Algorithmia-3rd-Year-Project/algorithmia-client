import { useLogin } from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const modalRef = useRef(null);
  const [loginAttempted, setLoginAttempted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginAttempted(false);
    await login(email, password);
    setLoginAttempted(true);
  };

  function checkError() {
    if (loginAttempted && (error === null || error === "")) {
      if (modalRef.current) {
        modalRef.current.classList.remove("show");
        modalRef.current.style.display = "none";
        // Also remove the modal backdrop
        const backdrop = document.querySelector(".modal-backdrop");
        if (backdrop) {
          backdrop.parentNode.removeChild(backdrop);
        }
        // Restore the ability to scroll on the body
        document.body.classList.remove("modal-open");
      }
    }
  }

  useEffect(() => {
    checkError();
  }, [error, loginAttempted]);

  return (
    <>
      <div
        class="modal"
        ref={modalRef}
        id="login"
        tabIndex="-1"
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
                    Email
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
                    // {...({loginAttempted} && (error === null || error === "")
                    //   ? { "data-bs-dismiss": "modal" }
                    //   : {})}
                  >
                    Log In
                  </button>
                </div>
                <br />
                {error && (
                  <div class="alert alert-warning" role="alert">
                    {error}
                  </div>
                )}
                <br />
                <div class="row mb-4">
                  <div class="col-md-6 d-flex justify-content-center">
                    <a href="#!">Forgot password?</a>
                  </div>
                  <div class="col-md-6 d-flex justify-content-center">
                    <a href="#!">Register</a>
                  </div>
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
