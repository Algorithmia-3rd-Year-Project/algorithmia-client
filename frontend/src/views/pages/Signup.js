import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //console.log(email, password);
    await signup(email, password);
  };

  // return
  // (
  // <form className="" onSubmit={handleSubmit}>
  //   <h3>Signup</h3>

  //   <label htmlFor="">Email: </label>
  //   <input
  //     type="email"
  //     onChange={(e) => setEmail(e.target.value)}
  //     value={email}
  //   />

  //   <label htmlFor="">Password: </label>
  //   <input
  //     type="password"
  //     onChange={(e) => setPassword(e.target.value)}
  //     value={password}
  //   />

  //   <button disabled={isLoading}>Signup</button>
  //   {error && <div>{error}</div>}
  // </form>
  return (
    <>
      <div
        class="modal fade"
        id="signUp"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content" style={{backgroundColor:"#1A5F7A"}}>
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Algorithmia Account Sign Up
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
                <label for="recipient-name" class="col-form-label">
                  Verification Code
                </label>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" />
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">
                      Send
                    </button>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Date of Birth
                  </label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Password
                  </label>
                  <input type="password" className="form-control mt-1" />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Confirm Password
                  </label>
                  <input type="password" className="form-control mt-1" />
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    I accept Terms and Conditions
                  </label>
                </div>

                <br />
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button class="btn btn-primary" type="button">
                    Register
                  </button>
                </div>
                <br />
                <div class="row mb-4 ">
                  <div class="col-md-6 d-flex justify-content-center">
                    <a href="#!">Already have an Account?</a>
                  </div>
                  <div class="col-md-6 d-flex justify-content-center">
                    <a href="#!">Login</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
