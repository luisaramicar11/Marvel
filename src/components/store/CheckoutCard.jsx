import { useStateValue } from "./StateProvider.jsx";
import { actionTypes } from "./Reducer.jsx";

export function CheckoutCard({ name, price, image, rating, id, quantity }) {
  const [{ basket }, dispatch] = useStateValue();

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
              Price:{" "}
              {price.toLocaleString("en-US", {
                style: "currency",
                currency: "COP",
              })}
            </div>
            <div>Quantity: {quantity}</div>
            <div>
              Total:{" "}
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
