import { Review } from "./Review.jsx";
import { useStateValue } from "./StateProvider.jsx";
import { actionTypes } from "./Reducer.jsx";
import { getTotalPrice } from "./Reducer.jsx";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
/* import { helpHttp } from "../helpers/helpHttp.jsx"; */
import axios from "axios";
import { useState } from "react";
import Loader from "../Loader.jsx";

const stripePromise = loadStripe(
  "pk_test_51Mg5xgBrpCweGOwO5WyzFtab5GW10YJEKpbW9beEpXma9INwmEBTeEz3Nk8k4WbUV1J6zmyyiuUpje5UMi7MV2KH00fWNKsKM9"
);

const CARD_ELEMENT_OPTIONS = {
  iconStyle: "solid",
  hidePostalCode: true,
  style: {
    base: {
      iconColor: "#e62429",
      fontSize: "18px",
      color: "#333",
      letterSpacing: "0.025em",
      fontFamily: "Source Code Pro, monospace",
      "::placeholder": {
        color: "#ccc",
      },
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238",
      },
    },
  },
};

const CheckoutStripe = ({ nextStep, prevStep }) => {
  const [{ basket, paymentMessage }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setLoading(true);
    if (!error) {
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post(
          "http://127.0.0.1:3001/api/checkout",
          {
            id,
            amount: (getTotalPrice(basket) / 4000) * 100,
          }
        );
        dispatch({
          type: actionTypes.SET_PAYMENT_MESSAGE,
          paymentMessage: data.message,
        });

        if (data.message === "Payment successful") {
          dispatch({
            type: actionTypes.CLEAR_BASKET,
            basket: [],
          });
        }

        elements.getElement(CardElement).clear();
        nextStep();
      } catch (error) {
        console.log(error);
        nextStep();
      }
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <div className="d-flex justify-content-between mt-3">
        <button
          type="button"
          className="btn mt-4 fw-bold"
          style={{ backgroundColor: "#e62429", color: "white" }}
          onClick={prevStep}
        >
          BACK
        </button>

        <button
          type="submit"
          className="btn mt-4 fw-bold"
          style={{ backgroundColor: "#e62429", color: "white" }}
        >
          {loading ? (
            <Loader />
          ) : (
            `PAY ${getTotalPrice(basket).toLocaleString("en-US", {
              style: "currency",
              currency: "COP",
            })}`
          )}
        </button>
      </div>
    </form>
  );
};

export function PaymentForm({ nextStep, prevStep }) {
  return (
    <>
      <Review />
      <hr />
      <h2
        className="mb-5 fw-bold text-center"
        style={{ margin: "1.5rem 0", paddingBottom: "1rem" }}
      >
        Payment method
      </h2>
      <Elements stripe={stripePromise}>
        <CheckoutStripe nextStep={nextStep} prevStep={prevStep} />
      </Elements>
    </>
  );
}

{
  /* <form className="m-5">
      <h2 className="mb-5 text-center">Payment method</h2>
      <div className="row mb-4">
        <div className="col">
          <div className="form-outline">
            <input
              type="text"
              id="form6Example1"
              className="form-control"
              placeholder="Name on card*"
              required
            />
          </div>
        </div>
        <div className="col">
          <div className="form-outline">
            <input
              type="text"
              id="form6Example2"
              className="form-control"
              placeholder="Card number*"
              required
            />
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col">
          <div className="form-outline">
            <input
              type="text"
              id="form6Example1"
              className="form-control"
              placeholder="Expiry date*"
              required
            />
          </div>
        </div>
        <div className="col">
          <div className="form-outline">
            <input
              type="text"
              id="form6Example2"
              className="form-control"
              placeholder="CVV*"
              required
            />
          </div>
        </div>
      </div>

      <div className="form-check d-flex mb-4">
        <input
          className="form-check-input me-2"
          type="checkbox"
          value=""
          id="form6Example8"
        />
        <label className="form-check-label" htmlFor="form6Example8">
          {" "}
          Remember credit card details for next time{" "}
        </label>
      </div>
    </form> */
}
