import { useFetch } from "../hooks/useFetch";

export default function Comics() {
  let url =
    "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=e717a1131b49e9fb649910cbac9d56b4&hash=5f3153f3860a4f6a8ae93103339008df";
  let { data, isPending, error } = useFetch(url);

  return (
    <>
      <div className="App">
        <h1>Comics</h1>

        <div className="row row-cols-1 row-cols-md-3 g-4 border-primary mb-4">
          {data === null
            ? (data = null)
            : data.data.results.map((comic) => (
                <div className="col" key={comic.id}>
                  <div
                    className="card"
                    style={{ width: "25rem", height: "30rem" }}
                  >
                    <img
                      src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                      className="card-img-top rounded mx-auto d-block"
                      alt="Card Comics"
                      style={{ width: "60%", height: "60%" }}
                    />
                    <div className="card-body">
                      <h6 className="card-title text-wrap">{comic.title}</h6>
                      <p className="card-text text-start">
                        <small className="text-body-secondary">
                          Page Count: {comic.pageCount}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}
