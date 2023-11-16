import "./Signup.css";
import CapitanAmerica from "../../assets/tienda/capitanAmerica.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "./Firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div id="main-wrapper" className="container h-75">
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="card border-0">
            <div className="card-body p-0">
              <div className="row no-gutters">
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="mb-5">
                      <h3 className="h2 fw-bold text-theme text-center">
                        SIGN UP
                      </h3>
                    </div>
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control mb-3"
                          placeholder="First Name"
                        />
                        <input
                          type="text"
                          className="form-control mb-3"
                          placeholder="Last Name"
                        />
                        <input
                          type="email"
                          className="form-control mb-3"
                          placeholder="Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                          type="password"
                          className="form-control mb-3"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label mb-4"
                          htmlFor="flexCheckDefault"
                        >
                          I want to receive news and special offers.
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-theme d-block w-100 mb-4 fw-bold"
                        onClick={signup}
                      >
                        SIGN UP
                      </button>
                      <div className="d-flex justify-content-end">
                        <small>
                          <div className="text-muted text-center mb-0">
                            Already have an account?{" "}
                            <Link
                              to="/signin"
                              className="text-primary ml-1 text-decoration-none"
                            >
                              Sign in
                            </Link>
                          </div>
                        </small>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="col-lg-6 d-none d-lg-inline-block h-75">
                  <img
                    className="img-fluid img-spiderman"
                    src={CapitanAmerica}
                    alt="Capitan America"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
