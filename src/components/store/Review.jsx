import { useStateValue } from "./StateProvider";
import { getTotalPrice } from "./Reducer";
import LanguageContext from "../context/LanguageContext";
import { useContext } from "react";

export function Review({ nextStep, prevStep }) {
  const [{ basket }, dispatch] = useStateValue();
  const { texts } = useContext(LanguageContext);
  return (
    <>
      <form className="m-1">
        <h2 className="mb-5 fw-bold text-center">{texts.orderSummary}</h2>
        <div className="container">
          {basket?.map((item) => (
            <div key={item.id} className="row d-flex">
              <div className="col align-self-center p-0">
                <img
                  className="img-fluid "
                  style={{
                    width: "12rem",
                    height: "auto",
                    paddingRight: "0.5rem",
                    paddingBottom: "0.5rem",
                  }}
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="col align-self-center p-0">
                <div
                  className="fw-semibold lh-1 mb-4"
                  style={{ fontSize: "1rem" }}
                >
                  {item.name}
                </div>
                <div className="fw-light">
                  {texts.quantity} {item.quantity}
                </div>
              </div>
              <div className="col text-end align-self-center  p-0">
                {(item.price * item.quantity).toLocaleString("en-US", {
                  style: "currency",
                  currency: "COP",
                })}
              </div>
            </div>
          ))}
          <div className="row d-flex justify-content-around pt-3">
            <div className="col text-end fs-5" style={{ fontSize: "1rem" }}>
              {texts.total}
            </div>
            <div className="col text-end fw-normal">
              {getTotalPrice(basket).toLocaleString("en-US", {
                style: "currency",
                currency: "COP",
              })}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
