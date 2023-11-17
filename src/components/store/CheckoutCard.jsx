import { useStateValue } from "./StateProvider.jsx";
import { actionTypes } from "./Reducer.jsx";
import LanguageContext from "../context/LanguageContext";
import { useContext } from "react";

export function CheckoutCard({ name, price, image, rating, id, quantity }) {
  const [{ basket }, dispatch] = useStateValue();
  const { texts } = useContext(LanguageContext);

  /*  const removeItem = () => {
    dispatch({
      type: actionTypes.REMOVE_FROM_BASKET,
      id: id,
    });
  }; */
  return (
    <div
      className="card mb-3 d-flex justify-content-center align-items-center "
      style={{ width: "70vw", justifyContent: "center", margin: "0 auto" }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={image}
            className="img-fluid rounded-start p-4 "
            alt={name}
            style={{ width: "15rem", height: "15rem" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="card-text">
              <h5 className="card-title p-2">{name}</h5>
            </div>
            <div>
              {texts.price}{" "}
              {price.toLocaleString("en-US", {
                style: "currency",
                currency: "COP",
              })}
            </div>
            <div>
              {texts.quantity} {quantity}
            </div>
            <div>
              {texts.total}{" "}
              {(price * quantity).toLocaleString("en-US", {
                style: "currency",
                currency: "COP",
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
