import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Home() {
  window.onload = function () {
    toast(
      "Hola! Es un placer mostrarles nuestro proyecto final. Gracias a la iniciativa BE-ME por esta maravillosa experiencia",
      {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );
  };

  return (
    <>
      <div id="carousel" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./src/assets/carrusel.jpg"
              className="mx-auto d-block w-90"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./src/assets/carruselTwo.jpg"
              className="mx-auto d-block w-90"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./src/assets/carruselThree.jpg"
              className="mx-auto d-block w-90"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
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
          data-bs-target="#carousel"
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
    </>
  );
}
