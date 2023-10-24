export function Home() {
  return (
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
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
