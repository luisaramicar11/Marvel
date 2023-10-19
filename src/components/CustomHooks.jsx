import { useFetch } from "../hooks/useFetch";

export default function CustomHooks() {
  let url =
    "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e717a1131b49e9fb649910cbac9d56b4&hash=5f3153f3860a4f6a8ae93103339008df";
  let { data, isPending, error } = useFetch(url);
  console.log(data);

  console.log(isPending, error);
  return (
    <>
      <div className="App">
        <h1>Marvel</h1>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data === null
            ? (data = null)
            : data.data.results.map((character) => (
                <div className="col " key={character.id}>
                  <div
                    className="card"
                    style={{ width: "18rem", height: "18rem" }}
                  >
                    <img
                      src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                      className="card-img-top"
                      alt="Card"
                      style={{ width: "80%", height: "80%" }}
                    />
                    <div className="card-body">
                      <p className="card-text">{character.name}</p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}
