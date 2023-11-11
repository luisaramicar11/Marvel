import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "../components/Series.css";

export default function Series() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  let url = `https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=e9dd281815e9f2feee7b70996badd7e3&hash=1382283f191e2e2a95cbf0301e4a187d&offset=${
    (currentPage - 1) * itemsPerPage
  }`;
  let { data, isPending, error } = useFetch(url);

  return (
    <>
      <div className="App">
        <h1 className="fw-bold">Series</h1>

        <div className="row row-cols-1 row-cols-md-4 g-4 border-primary mb-4">
          {data &&
            data.data.results.map((series) => (
              <div className="col" key={series.id}>
                <div
                  className="cards"
                  style={{ width: "20rem", height: "25rem" }}
                >
                  <img
                    src={`${series.thumbnail.path}.${series.thumbnail.extension}`}
                    className="card-img-top"
                    style={{ width: "60%", height: "60%" }}
                    alt={series.title}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <strong>{series.title}</strong>
                    </p>
                    <p className="card-text">
                      Stories Available: {series.stories.available}
                    </p>
                    <p className="card-text">
                      Comics Available: {series.comics.available}
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
            <button onClick={handleLoadMore} className="btn-primary">
              Load More Series
            </button>
          </div>
        )}
      </div>
    </>
  );
}
