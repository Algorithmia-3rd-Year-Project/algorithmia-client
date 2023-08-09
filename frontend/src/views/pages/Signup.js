import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState("");
  const [isAcceptedTerms, setIsAcceptedTerms] = useState(false);
  const { signup, error, isLoading, advertiserSignup } = useSignup();
  const [verifyCode, setVerifyCode] = useState("");
  const [sentCode, setSentCode] = useState("");
  const [ userName,setUserName ] = useState("");

  //For advertisers
  const [brand, setBrand] = useState("");
  const [advertiserEmail, setAdvertiserEmail] = useState("");
  const [advertiserPassword, setAdvertiserPassword] = useState("");
  const [advertiserConfirmPassword, setAdvertiserConfirmPassword] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password, confirmPassword, dob, sentCode, verifyCode);
  };

  const handleAdvertiserSubmit = async (e) => {
    e.preventDefault();

    await advertiserSignup(
      brand,
      advertiserEmail,
      advertiserPassword,
      advertiserConfirmPassword,
      sentCode,
      verifyCode
    );
  };

  const sendEmail = async () => {
    const response = await fetch("api/user/verifyemail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        verifyCode,
      }),
    });

    const json = await response.json();
    if (response.ok) {
      setSentCode(json.pinCode);
    }
  };

  const sendAdvertiserEmail = async () => {
    const response = await fetch("api/user/verifyadvertiseremail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        advertiserEmail,
        verifyCode,
      }),
    });

    const json = await response.json();
    if (response.ok) {
      setSentCode(json.pinCode);
    }
  };

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
          <div class="modal-content" style={{ backgroundColor: "#ACDBDF" }}>
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
                    Username
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                  />
                </div>
                <label for="recipient-name" class="col-form-label">
                  Verification Code
                </label>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    onChange={(e) => setVerifyCode(e.target.value)}
                    value={verifyCode}
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      onClick={sendEmail}
                    >
                      Send
                    </button>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Date of Birth
                  </label>
                  <label className="star fw-bold" style={{ color: "red" }}>
            {" "}
            *
          </label>
                  <input
                    type="text"
                    class="form-control"
                    onChange={(e) => setDob(e.target.value)}
                    value={dob}
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Password
                  </label>
                  <label className="star fw-bold" style={{ color: "red" }}>
            {" "}
            *
          </label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Confirm Password
                  </label>
                  <label className="star fw-bold" style={{ color: "red" }}>
            {" "}
            *
          </label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                  />
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    onChange={(e) => setIsAcceptedTerms(e.target.value)}
                    value={isAcceptedTerms}
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    I accept Terms and Conditions
                  </label>
                </div>

                <br />
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button
                    class="btn btn-primary"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Register
                  </button>
                </div>
                <br/>
                {error && (
                  <div class="alert alert-warning" role="alert">
                    {error}
                  </div>
                )}
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

              {/*Advertiser Form */}

              <h3>For Advertisers</h3>
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Company Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="recipient-name"
                    onChange={(e) => setAdvertiserEmail(e.target.value)}
                    value={advertiserEmail}
                  />
                </div>
                <label for="recipient-name" class="col-form-label">
                  Verification Code
                </label>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    onChange={(e) => setVerifyCode(e.target.value)}
                    value={verifyCode}
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      onClick={sendAdvertiserEmail}
                    >
                      Send
                    </button>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Company Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    onChange={(e) => setBrand(e.target.value)}
                    value={brand}
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    onChange={(e) => setAdvertiserPassword(e.target.value)}
                    value={advertiserPassword}
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    onChange={(e) =>
                      setAdvertiserConfirmPassword(e.target.value)
                    }
                    value={advertiserConfirmPassword}
                  />
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    onChange={(e) => setIsAcceptedTerms(e.target.value)}
                    value={isAcceptedTerms}
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    I accept Terms and Conditions
                  </label>
                </div>

                <br />
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button
                    class="btn btn-primary"
                    type="button"
                    onClick={handleAdvertiserSubmit}
                  >
                    Register
                  </button>
                  {error && <div>{error}</div>}
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
