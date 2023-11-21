import { useContext } from "react";
import { useStateValue } from "../components/store/StateProvider.jsx";
import { useAccordionButton } from "react-bootstrap";
import { auth } from "../components/store/Firebase.js";
import { signOut } from "firebase/auth";
import { actionTypes } from "../components/store/Reducer.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../assets/images/MarvelLogo.svg";
import es from "../assets/images/es.svg";
import LanguageContext from "./context/LanguageContext";
import ThemeContext from "./context/ThemeContext";
import "./Menu.css";

export function Menu() {
  const { texts, handleLanguage } = useContext(LanguageContext);
  const { theme, handleTheme } = useContext(ThemeContext);
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const handleAuth = () => {
    if (user) {
      signOut(auth);
      dispatch({
        type: actionTypes.CLEAR_BASKET,
        basket: [],
      });
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      });
      navigate("/");
    }
  };
  return (
    <header>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light navbar-dark bg-dark">
        <div className="container">
          <Link to="/products">
            <a className="navbar-brand" href="">
              <img src={Logo} alt="Logo Marvel" />
            </a>
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-lg-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  {texts.navHome}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/characters">
                  {texts.navCharacters}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events">
                  {texts.navEvents}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/comics">
                  {texts.navComics}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/stories">
                  {texts.navStories}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/series">
                  SERIES
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {texts.navMore}
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="text-decoration-none" to="/products">
                      <a className="dropdown-item">{texts.navShop}</a>
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item d-flex">
                      <Link
                        className="text-decoration-none align-items-center"
                        to="/signin"
                      >
                        <button
                          className="dropdown-item  p-0"
                          onClick={handleAuth}
                        >
                          {user ? texts.navSignOut : texts.navSignIn}
                        </button>
                      </Link>
                      <small>{user ? user.email : ""}</small>
                    </a>
                  </li>
                  <li>
                    <Link className="text-decoration-none" to="/ContactForm">
                      <a className="dropdown-item">{texts.formTitle}</a>
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item ">
                      <select
                        className=" dropdown-item p-select"
                        name="language"
                        onChange={handleLanguage}
                      >
                        <option value="en">EN</option>
                        <option value="es">ES</option>
                      </select>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <Link to="/checkout">
              <button type="button" className="btn border-0 position-relative">
                <i className="bi bi-cart fs-5 bg-basket"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-amount-basket mt-2">
                  {(function () {
                    let total = 0;
                    basket.forEach((item) => {
                      total += item.quantity;
                    });
                    return total;
                  })()}
                  <span className="visually-hidden"></span>
                </span>
              </button>
            </Link>
          </div>
          <input
            id="toggle-button"
            type="checkbox"
            onChange={handleTheme}
          ></input>
          <label htmlFor="toggle-button">
            <div className="sun-moon"></div>
          </label>
        </div>
      </nav>
    </header>
  );
}
