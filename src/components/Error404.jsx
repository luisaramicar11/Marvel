import "./Error404.css";
import Groot from "../assets/images/groot.png";
import LanguageContext from "./context/LanguageContext";
import { useContext } from "react";
export function Error404() {
  const { texts } = useContext(LanguageContext);
  return (
    <div className="d-flex p-2 bg-color min-vh-100 ">
      <article className=" error col-12 col-md-6 col-l-3 bg-color min-vh-100">
        <h2 className="mb-3 fw-bold">{texts.noFound}</h2>
        <h3 className="mb-3 fw-bold">OH NO!!</h3>
        <p className="fs-5">{texts.msgError404}</p>
      </article>
      <article className="col-12 col-md-6 col-l-3 bg-color">
        <img
          className="img-fluid img-groot mt-5"
          src={Groot}
          alt="Groot"
          style={{ width: "30rem", height: "30rem" }}
        />
      </article>
    </div>
  );
}
