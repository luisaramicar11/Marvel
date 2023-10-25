import { useFetch } from "../hooks/useFetch";
import "../components/SeriesCards.css"


export default function Series() {
  let url =
    "https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=e9dd281815e9f2feee7b70996badd7e3&hash=1382283f191e2e2a95cbf0301e4a187d";
  let { data, isPending, error } = useFetch(url);

  return (
    <>
      <div className="App">
        <h1 className="title">Series</h1>

        <div className="row row-cols-1 row-cols-md-3 g-4 border-primary mb-4">
          {data === null
            ? (data = null)
            : data.data.results.map((series) => (
                <div className="col" key={series.id}>
                  <div
                    className="cards"
                    style={{ width: "25rem", height: "30rem" }}
                  >
                    <img
                      src={`${series.thumbnail.path}.${series.thumbnail.extension}`}
                      className="card-img-top"
                      style={{ width: "65%", height: "65%" }}
                    />
                    <div className="card-body">
                      <p className="card-text"><strong>{series.title}</strong></p>
                      <p className="card-text">
                        Stories Available: {series.stories.available}
                      </p>
                      <p className="card-text">{series.startYear}</p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}