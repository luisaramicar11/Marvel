import { useContext } from "react";
import { useAccordionButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/images/MarvelLogo.svg";
import es from "../assets/images/es.svg";
import LanguageContext from "./context/LanguageContext";
import "./Menu.css";
export function Menu() {
  const { texts, handleLanguage } = useContext(LanguageContext);

  return (
    <header>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="">
            <img src={Logo} alt="Logo Marvel" />
          </a>
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
                <Link className="nav-link" to="/seriescards">
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
                    <a className="dropdown-item">{texts.navShop}</a>
                  </li>
                  <li>
                    <a className="dropdown-item">{texts.navSinglePage}</a>
                  </li>
                  <li>
                    <a className="dropdown-item">{texts.navMultiPage}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <select
            className="nav-item"
            name="language"
            onChange={handleLanguage}
          >
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </div>
      </nav>
    </header>
  );
}
