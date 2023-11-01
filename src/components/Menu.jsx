import { Link } from "react-router-dom";
import Logo from "../assets/images/MarvelLogo.svg";
import "./Menu.css";
export function Menu() {
  return (
    <header>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="index.html">
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
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Characters">
                  CHARACTERS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/comics">
                  COMICS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/stories">
                  STORIES
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
                  MORE
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="sitios.html#ultimos-proyectos"
                    >
                      SHOP
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="sitios.html#single-page">
                      Single Page
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="sitios.html#multi-page">
                      Multi Page
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
