import { actionTypes } from "./Reducer.jsx";
import { useStateValue } from "./StateProvider.jsx";

export function Product({ name, price, image, rating, id, quantity }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id,
        name,
        price,
        image,
        rating,
        quantity,
      },
    });
  };

  return (
    <div className="card" style={{ width: "13rem" }}>
      <img src={image} className="card-img-top" alt="5 heroes" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="fw-bold">
          {" "}
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: "COP",
          })}
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <a
          href="#"
          className="card-link text-danger d-block w-50 h-10"
          onClick={addToBasket}
        >
          <i className="bi bi-cart-fill fs-5 d-block "></i>
        </a>
        <a href="#" className="card-link d-flex text-decoration-none">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <div>&#11088;</div>
            ))}
        </a>
      </div>
    </div>
  );
}
