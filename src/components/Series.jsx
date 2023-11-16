import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Series.css";

export default function Series() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const itemsPerPage = 20;

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleGoBack = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleShowModal = (series) => {
    setSelectedSeries(series);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  let url = `https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=e9dd281815e9f2feee7b70996badd7e3&hash=1382283f191e2e2a95cbf0301e4a187d&offset=${
    (currentPage - 1) * itemsPerPage
  }`;
  let { data, isPending, error } = useFetch(url);

  return (
    <>
      <div className="app-series">
        <h1 className="title-series">
          <strong>Series</strong>
        </h1>

        <div className="row row-cols-1 row-cols-md-4 g-4 border-primary mb-4">
          {data &&
            data.data.results.map((series) => (
              <div className="columnas-series" key={series.id}>
                <div
                  className="cards-series"
                  style={{ width: "20rem", height: "25rem" }}
                  onClick={() => handleShowModal(series)}
                >
                  <img
                    src={`${series.thumbnail.path}.${series.thumbnail.extension}`}
                    className="card-img-top-series"
                    style={{ width: "60%", height: "60%" }}
                    alt={series.title}
                  />
                  <div className="card-body-series">
                    <p className="card-text-series">
                      <strong>{series.title}</strong>
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {data && data.data.total > currentPage * itemsPerPage && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              padding: "20px",
            }}
          >
            <button onClick={handleGoBack} className="btn-primary-series">
              Go Back
            </button>
            <button onClick={handleLoadMore} className="btn-primary-series">
              Load More Series
            </button>
          </div>
        )}
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedSeries && selectedSeries.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedSeries && (
            <>
              <img
                src={`${selectedSeries.thumbnail.path}.${selectedSeries.thumbnail.extension}`}
                className="modal-image-series"
                alt={selectedSeries.title}
              />
              <p className="modal-description-series">
                {selectedSeries.description}
              </p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
