import { Link } from "react-router-dom";
const Confirmation = ({ message }) => {
  return (
    <div className="container-fluid">
      <h2 className="text-center mt-4 mb-4 fw-bold">
        Thank you for your order.
      </h2>
      <div>
        {message === "Payment successful"
          ? "Your payment was successful. You will receive an email with your order details."
          : "Your payment was not successful. Please try again."}
      </div>

      <div className="d-flex justify-content-center">
        <Link className="text-decoration-none " to="/products">
          <button
            type="button"
            className="btn m-4 fw-bold"
            style={{
              backgroundColor: "#e62429",
              color: "white",
            }}
          >
            STORE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
