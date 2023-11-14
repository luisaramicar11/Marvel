import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import LanguageContext from "./context/LanguageContext";
import { useContext } from "react";
import "./Character.css";

export function Character() {
  const { texts } = useContext(LanguageContext);

  const { id } = useParams();
  const navigate = useNavigate();
  let url = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=e717a1131b49e9fb649910cbac9d56b4&hash=5f3153f3860a4f6a8ae93103339008df`;
  let { data, isPending, error } = useFetch(url);
  console.log(data);

  function handGoBack() {
    navigate(-1);
  }

  return (
    <>
      {data === null ? (
        (data = null)
      ) : (
        <div>
          <div className="box-content">
            <div className="right-box">
              <img
                src={`${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}`}
                alt=""
              />
            </div>
            <div className="left-box d-flex flex-column">
              <h1 className="text-center fw-bold mb-4">
                {data.data.results[0].name}
              </h1>
              <h4>{data.data.results[0].description}</h4>
              <button
                className="align-self-center bg-btn fs-5 mt-3"
                onClick={handGoBack}
              >
                {texts.btnGoBack}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
