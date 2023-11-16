import { useState } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./Reducer";

export function AddressForm({ nextStep }) {
  const [form, setForm] = useState({});
  const [{ shippingData }, dispatch] = useStateValue();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SHIPPING_DATA,
      shippingData: form,
    });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="m-5">
      <h2 className="mb-5 text-center fw-bold">Shipping address</h2>
      <div className="row mb-4">
        <div className="col">
          <div className="form-outline">
            <input
              type="text"
              id="form6Example1"
              name="nombre"
              className="form-control"
              placeholder="First name*"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col">
          <div className="form-outline">
            <input
              type="text"
              id="form6Example2"
              name="apellido"
              value={form.apellido}
              className="form-control"
              placeholder="Last name*"
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      <div className="form-outline mb-4">
        <input
          type="text"
          id="form6Example3"
          name="direccion"
          value={form.direccion}
          className="form-control"
          placeholder="Adress*"
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-outline mb-4">
        <input
          type="email"
          id="form6Example4"
          name="direccion2"
          value={form.direccion2}
          className="form-control"
          placeholder="Email*"
          onChange={handleChange}
        />
      </div>

      <div className="row mb-4">
        <div className="col">
          <div className="form-outline">
            <input
              type="text"
              id="form6Example1"
              name="ciudad"
              value={form.ciudad}
              className="form-control"
              placeholder="City*"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col">
          <div className="form-outline">
            <input
              type="text"
              name="estado"
              value={form.estado}
              id="form6Example1"
              className="form-control"
              placeholder="State/Province/Region*"
              onChange={handleChange}
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
              name="codigoPostal"
              value={form.codigoPostal}
              className="form-control"
              placeholder="Zip/ Postal code*"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col">
          <div className="form-outline">
            <input
              type="text"
              id="form6Example1"
              name="pais"
              value={form.pais}
              className="form-control"
              placeholder="Country*"
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      <div className="form-check d-flex mb-4">
        <input
          className="form-check-input me-2"
          type="checkbox"
          name="ofertas"
          value=""
          onChange={handleChecked}
          id="terminos"
        />
        <label className="form-check-label" htmlFor="form6Example8">
          {" "}
          Use this adress for payment details{" "}
        </label>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <Link to="/checkout">
          <button
            type="button"
            className="btn mt-4 fw-bold"
            style={{ background: "#e62429", color: "white" }}
          >
            BACK
          </button>
        </Link>

        <input
          type="submit"
          value="NEXT"
          className="btn btn-danger mt-4 fw-bold"
          style={{ border: "none", background: "#e62429", color: "white" }}
        />
      </div>
    </form>
  );
}
