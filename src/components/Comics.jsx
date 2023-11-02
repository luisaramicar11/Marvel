import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Modal from "./ComicsModal";
import "./Comics.css";

export default function Comics() {
  const [model, setModel] = useState(false);
  const [tempData, setTempData] = useState([]);

  let url =
    "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=e717a1131b49e9fb649910cbac9d56b4&hash=5f3153f3860a4f6a8ae93103339008df";
  let { data, isPending, error } = useFetch(url);

  console.log(url);

  const getDataItem = (id, title, description, img) => {
    let tempData = [id, title, description, img];
    console.log(description);
    setTempData((item) => [1, ...tempData]);
    return setModel(true);
  };

  return (
    <>
      <div>
        <div className="contentComics">
          {data === null
            ? (data = null)
            : data.data.results.map((comic) => (
                <div key={comic.id}>
                  <div className="cardComics">
                    <div>
                      <h5 className="titleComics">{comic.title}</h5>
                      <br></br>
                      <button
                        className="btn btn-light"
                        onClick={() =>
                          getDataItem(
                            comic.id,
                            comic.title,
                            comic.description,
                            `${comic.thumbnail.path}.${comic.thumbnail.extension}`
                          )
                        }
                      >
                        Ver Mas
                      </button>
                    </div>
                    <img
                      className="imgComics"
                      src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                      alt="cardComics Comics"
                    />
                  </div>
                </div>
              ))}
        </div>
      </div>
      {model === true ? (
        <Modal
          title={tempData[2]}
          description={tempData[3]}
          img={tempData[4]}
          hide={() => setModel(false)}
        />
      ) : (
        ""
      )}
    </>
  );
}
