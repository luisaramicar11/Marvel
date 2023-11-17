import { Link } from "react-router-dom";
import LanguageContext from "../context/LanguageContext";
import { useContext } from "react";

const Confirmation = ({ message }) => {
  const { texts } = useContext(LanguageContext);
  return (
    <div className="container-fluid">
      <h2 className="text-center mt-4 mb-4 fw-bold">{texts.thankyou}</h2>
      <div>
        {message === "Payment successful"
          ? texts.messageSuccesfull
          : texts.messageUnsuccesfull}
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
            {texts.btnStore}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
