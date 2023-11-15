import { useStateValue } from "./StateProvider.jsx";
import { actionTypes } from "./Reducer.jsx";
import { Link } from "react-router-dom";
import { getTotalPrice } from "./Reducer.jsx";

export function TotalCard() {
  const [{ basket }, dispatch] = useStateValue();

  const removeAllItem = () => {
    dispatch({
      type: actionTypes.CLEAR_BASKET,
    });
  };
  return (
    <>
      <div className="d-flex flex-column align-items-end h-20 mx-5 vh-20 ">
        <h5>
          Total items:{" "}
          {(function () {
            let total = 0;
            basket.forEach((item) => {
              total += item.quantity;
            });
            return total;
          })()}
        </h5>
        <h5>
          Total price:{" "}
          {getTotalPrice(basket).toLocaleString("en-US", {
            style: "currency",
            currency: "COP",
          })}
        </h5>
      </div>
      <div className="d-flex justify-content-around ">
        <button
          type="button"
          className="btn  mt-4 fw-bold"
          style={{ backgroundColor: "#e62429", color: "white" }}
          onClick={removeAllItem}
        >
          CLEAN CART
        </button>
        <Link to="/checkoutForm">
          <button
            type="button"
            className="btn mt-4 fw-bold"
            style={{ background: "#e62429", color: "white" }}
          >
            CHECK OUT
          </button>
        </Link>
      </div>
    </>
  );
}
