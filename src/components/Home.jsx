import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeroesMarvel from "../assets/images/marvelHeroes.jpg";
import Comic1 from "../assets/images/comic1.png";
import Comic2 from "../assets/images/comic2.jpg";
import Comic3 from "../assets/images/comic3.png";
import Comic4 from "../assets/images/comic4.png";
import { Link } from "react-router-dom";
import LanguageContext from "./context/LanguageContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import heroes from "../assets/tienda/5heroes.webp";
import audifonos from "../assets/tienda/audifonos.webp";
import funko from "../assets/tienda/funko.png";
import ironman from "../assets/tienda/ironman.webp";
import spiderman from "../assets/tienda/spiderman.webp";
import lampara from "../assets/tienda/lampara.webp";
import reloj from "../assets/tienda/reloj.webp";
import stickers from "../assets/tienda/stickers.webp";
import juegoMesa from "../assets/tienda/juegoMesa.webp";
import "./Home.css";
import { Product } from "./store/Product";
import Hulk from "../assets/images/hulk.jpg";
import ThemeContext from "./context/ThemeContext";

export function Home() {
  const { texts } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

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
    <div className={theme}>
      <img className="hero-image" src={HeroesMarvel} alt="HeroesMarvel" />
      <section className="row min-vh-100 align-items-lg-center">
        <p className="text-left fw-bold p-4 fs-3">{texts.homelatestComics}</p>
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
      <div
        className="card mb-3 mt-3"
        style={{ maxWidth: "960px", height: "auto", margin: "0 auto" }}
      >
        <div className="row g-0">
          <div className="col-md-6">
            <div className="rounded-start ratio ratio-16x9 active ">
              <iframe
                className="rounded-start "
                width="560"
                height="315"
                src="https://www.youtube.com/embed/bInH1DkpFNA?si=NLnC-pYw4l1crIyf"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="card-body">
              <h5 className="card-title fw-bold"> {texts.homeTitleLoki}</h5>
              <div className="card-text">{texts.homeTextLoki}</div>
              <div className="card-text">
                <small className="text-body-secondary">
                  {texts.homeSubtitleLoki}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-left fw-bold pt-4 fs-3 p-3">
        {texts.homelatestTrailer}
      </p>
      <div
        id="carouselExample"
        className="carousel slide  mb-5"
        style={{ height: "auto", width: "80vw", margin: "0 auto" }}
      >
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
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="carousel-item ratio ratio-16x9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/leZABQZcyh0?si=q7a8fEVJlHiPe1Ck"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="carousel-item ratio ratio-16x9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/DiJ71etOG8M?si=Ey5IHeta6i3Qfvn7"
              title="YouTube video player"
              frameBorder="0"
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

      <p className="text-left fw-bold p-5 fs-3">{texts.homeProducts} </p>
      <div style={{ margin: "1rem", marginBottom: "2rem" }}>
        <Carousel responsive={responsive}>
          <div>
            <Link to="/products" className="text-decoration-none">
              <Product
                name={texts.homeProductHeroes}
                price={180000}
                image={heroes}
                rating={5}
                id={1}
                quantity={1}
              />
            </Link>
          </div>
          <div>
            <Link to="/products" className="text-decoration-none">
              <Product
                name={texts.homeProductHeadphones}
                price={129900}
                image={audifonos}
                rating={3}
                id={2}
                quantity={1}
              />
            </Link>
          </div>
          <div>
            <Link to="/products" className="text-decoration-none">
              <Product
                name={texts.homeFunko}
                price={97000}
                image={funko}
                rating={5}
                id={8}
                quantity={1}
              />
            </Link>
          </div>
          <div>
            <Link to="/products" className="text-decoration-none">
              <Product
                name={"Figura de acción de Spiderman "}
                price={180000}
                image={spiderman}
                rating={5}
                id={18}
                quantity={1}
              />
            </Link>
          </div>
          <div>
            <Link to="/products" className="text-decoration-none">
              <Product
                name={"Figura de accion de Iron man"}
                price={150000}
                image={ironman}
                rating={5}
                id={10}
                quantity={1}
              />
            </Link>
          </div>
          <div>
            <Link to="/products" className="text-decoration-none">
              <Product
                name={"Lámpara 3D Marvel Spiderman"}
                price={94900}
                image={lampara}
                rating={5}
                id={12}
                quantity={1}
              />
            </Link>
          </div>
          <div>
            <Link to="/products" className="text-decoration-none">
              <Product
                name={"Reloj Inteligente Marvel Spiderman"}
                price={245000}
                image={reloj}
                rating={4}
                id={17}
                quantity={1}
              />
            </Link>
          </div>
          <div>
            <Link to="/products" className="text-decoration-none">
              <Product
                name={"Stickers Marvel Avengers "}
                price={20000}
                image={stickers}
                rating={5}
                id={8}
                quantity={1}
              />
            </Link>
          </div>
          <div>
            <Link to="/products" className="text-decoration-none">
              <Product
                name={"Juego De Mesa Marvel "}
                price={194000}
                image={juegoMesa}
                rating={4}
                id={11}
                quantity={1}
              />
            </Link>
          </div>
          <div>
            <Link to="/products" className="text-decoration-none">
              <Product
                name={"Figura de acción de Spiderman "}
                price={180000}
                image={spiderman}
                rating={5}
                id={18}
                quantity={1}
              />
            </Link>
          </div>
        </Carousel>
      </div>

      <div className="card text-bg-dark">
        <img
          src={Hulk}
          className="card-img"
          alt="Hulk"
          style={{ height: "30rem" }}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center m-4">
          <h2 className="card-title fw-bold ">JOIN MARVEL</h2>
          <div className="card-text h4">
            Register for FREE to access member-exclusive content and activities,
            read FREE comics from MARVEL STUDIOS, and get alerts and early
            access to exclusive products from MARVEL Shop!
          </div>
          <Link to="/signin">
            <button
              type="button"
              className="btn btn-outline-secondary fw-bold"
              style={{
                width: "10rem",
                color: "white",
                border: "solid 0.2rem white",
                borderRadius: "1rem",
              }}
            >
              SIGN UP NOW
            </button>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
