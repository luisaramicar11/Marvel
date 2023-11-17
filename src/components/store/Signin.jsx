import Spiderman from "../../assets/tienda/spiderman.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "./Firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Signin.css";
import LanguageContext from "../context/LanguageContext";
import { useContext } from "react";

export function Signin() {
  const { texts } = useContext(LanguageContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div id="main-wrapper" className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="card border-0">
            <div className="card-body p-0">
              <div className="row no-gutters">
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="mb-5">
                      <h3 className="h2 fw-bold text-theme text-center">
                        {texts.navSignIn}
                      </h3>
                    </div>

                    <h6 className="h5 mb-0 fw-bold">{texts.welcomeBack}</h6>
                    <p className="p-signin">{texts.enterEmail}</p>
                    <form>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          {texts.emailAddress}
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label htmlFor="exampleInputPassword1">
                          {texts.password}
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-theme d-block w-100 mb-4 fw-bold"
                        onClick={signin}
                      >
                        {texts.navSignIn}
                      </button>
                      <div className="d-flex justify-content-between">
                        <a
                          href="#l"
                          className="forgot-link float-right text-primary text-decoration-none"
                        >
                          <small>{texts.forgotPassword}</small>
                        </a>

                        <p className="p-account text-center mb-0">
                          {texts.noAccount} {""}
                          <Link
                            to="/signup"
                            className="text-primary ml-1 text-decoration-none"
                          >
                            {texts.navSignOut}
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="col-lg-6 d-none d-lg-inline-block h-75">
                  <img
                    className="img-fluid img-spiderman"
                    src={Spiderman}
                    alt="Spiderman"
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
