import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Carrousel2 from "../assets/images/carruselTwo.jpg";
import Loki from "../assets/images/Loki.jpg";
import HeroesMarvel from "../assets/images/marvelHeroes.jpg";
import Comic1 from "../assets/images/comic1.png";
import Comic2 from "../assets/images/comic2.jpg";
import Comic3 from "../assets/images/comic3.png";
import Comic4 from "../assets/images/comic4.png";
import { Link } from "react-router-dom";
import LanguageContext from "./context/LanguageContext";

import "./Home.css";

export function Home() {
  const { texts } = useContext(LanguageContext);

  window.onload = function () {
    toast(texts.welcome, {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="bg-color">
      <img className="hero-image" src={HeroesMarvel} alt="HeroesMarvel" />
      <section className="row min-vh-100 align-items-lg-center">
        <p className="text-center fw-bold p-5">{texts.homelatestComics}</p>
        <article className="col-12 col-md-6 col-lg-3 d-flex">
          <div className="card mx-auto mb-3" style={{ width: "18rem" }}>
            <img
              src={Comic1}
              className="card-img-top bg-third-color card-comic-home"
              alt="Comic 1"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">FATE OF TWO WORLDS</h5>
              <p className="card-text">2023</p>
              <Link className="text-third" to="/comic1">
                {texts.homeMoreDetails}
                <i className="bi bi-chevron-right"></i>
              </Link>
            </div>
          </div>
        </article>
        <article className="col-12 col-md-6 col-lg-3 d-flex">
          <div className="card mx-auto mb-3" style={{ width: "18rem" }}>
            <img
              src={Comic2}
              className="card-img-top bg-third-color"
              alt="Comic 2"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">CAPITANA MARVEL</h5>
              <p className="card-text">2023</p>
              <Link className="text-third" to="/comic2">
                {texts.homeMoreDetails}
                <i className="bi bi-chevron-right"></i>
              </Link>
            </div>
          </div>
        </article>
        <article className="col-12 col-md-6 col-lg-3 d-flex">
          <div className="card mx-auto mb-3" style={{ width: "18rem" }}>
            <img
              src={Comic3}
              className="card-img-top bg-third-color"
              alt="Comic 3"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">SIMBIONTE SPIDERMAN</h5>
              <p className="card-text">2023</p>
              <Link className="text-third" to="/comic3">
                {texts.homeMoreDetails}
                <i className="bi bi-chevron-right"></i>
              </Link>
            </div>
          </div>
        </article>
        <article className="col-12 col-md-6 col-lg-3 d-flex">
          <div className="card mx-auto mb-3" style={{ width: "18rem" }}>
            <img
              src={Comic4}
              className="card-img-top bg-third-color"
              alt="¿Interesado?"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">
                THE DEATH OF CAPTAIN MARVEL
              </h5>
              <p className="card-text">2023</p>
              <Link className="text-third" to="/comic4">
                {texts.homeMoreDetails}
                <i className="bi bi-chevron-right"></i>
              </Link>
            </div>
          </div>
        </article>
      </section>
      <p className="text-center fw-bold p-5">{texts.homelatestTrailer}</p>
      <div id="carouselExample" className="carousel slide mt-5">
        <div className="carousel-inner">
          <div className="carousel-item ratio ratio-16x9 active">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/itXzYPOSEms?si=Cf1GrFEDVWmxVQyD"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="carousel-item ratio ratio-16x9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/fM7v_IFaH1g?si=zS8Wpdp_cMU2f_T9"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="carousel-item ratio ratio-16x9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/h_h6oMhD6MA?si=olMvSlqjHvA9qc2T"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="carousel-item ratio ratio-16x9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/DiJ71etOG8M?si=Ey5IHeta6i3Qfvn7"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
