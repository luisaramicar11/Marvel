import LanguageContext from "./context/LanguageContext";
import { useContext } from "react";
import "./Footer.css";

export default function Footer() {
  const { texts } = useContext(LanguageContext);
  return (
    <footer className="bg-dark text-white p-3">
      <div className="container text-center">
        <nav className="d-flex justify-content-evenly">
          <a
            href="https://www.facebook.com/Marvel/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-facebook fs-3"></i>
          </a>
          <a href="https://twitter.com/Marvel" target="_blank" rel="noreferrer">
            <i className="bi bi-twitter fs-3"></i>
          </a>
          <a
            href="https://github.com/luisaramicar11/Marvel"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github fs-3"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UC8LEXZO4hjzVk6wO3G9pJyQ"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-youtube fs-3"></i>
          </a>
          <a
            href="https://www.instagram.com/marvel/?hl=es"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </nav>
        <small>{texts.footerCopy}</small>
      </div>
    </footer>
  );
}
