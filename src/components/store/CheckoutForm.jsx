import React, { useState } from "react";
import { Stepper } from "react-form-stepper";
import { AddressForm } from "./AddressForm.jsx";
import { PaymentForm } from "./PaymentForm.jsx";
import Confirmation from "./Confirmation.jsx";
import { useStateValue } from "./StateProvider.jsx";

export function CheckoutForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [{ paymentMessage }, dispatch] = useStateValue();

  const steps = [{ label: "Shipping address" }, { label: "Payment details" }];

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };
  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  function getSectionComponent() {
    switch (activeStep) {
      case 0:
        return <AddressForm nextStep={nextStep} />;
      case 1:
        return <PaymentForm nextStep={nextStep} prevStep={prevStep} />;
      default:
        return null;
    }
  }
  return (
    <>
      <div className="container-fluid d-flex justify-content-center mt-5 pb-5">
        <div className="row">
          <div className="card">
            <h1 className="text-center mt-4 mb-4 fw-bold">CHECKOUT</h1>
            <div>
              <Stepper steps={steps} activeStep={activeStep} />
              <div style={{ padding: "20px" }}>
                {getSectionComponent()}
                {activeStep !== 0 &&
                  activeStep !== steps.length - 1 &&
                  prevStep}
                {activeStep !== steps.length - 1 && nextStep}
              </div>
              {activeStep === steps.length ? (
                <Confirmation message={paymentMessage} />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => setActiveStep(activeStep - 1)}
                  >
                    Previous
                  </button> */
}

{
  /* <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => setActiveStep(activeStep + 1)}
                  >
                    Next
                  </button> */
}
