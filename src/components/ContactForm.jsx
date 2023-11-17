import { useForm } from "../hooks/useForm";
import Loader from "./Loader";
import Message from "./Message";
import "./ContactForm.css";
import LanguageContext from "./context/LanguageContext";
import { useContext } from "react";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!form.subject.trim()) {
    errors.subject = "El campo 'Subject' es requerido";

    if (!form.comments.trim()) {
      errors.comments = "El campo 'Comments' es requerido";
    } else if (!regexComments.test(form.comments.trim())) {
      errors.comments =
        "El campo 'Comments' no puede exceder los 255 caracteres";
    }
  }
  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};

const ContactForm = () => {
  const { texts, handleLanguage } = useContext(LanguageContext);
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationForm);

  return (
    <div className="p-4">
      <h2 className="fw-bold text-center p-4">{texts.formTitle}</h2>
      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.name && <div style={styles}>{errors.name}</div>}
        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.email && <div style={styles}>{errors.email}</div>}
        <input
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          value={form.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.subject && <div style={styles}>{errors.subject}</div>}
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tus comentarios"
          value={form.comments}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        ></textarea>
        {errors.comments && <div style={styles}>{errors.comments}</div>}
        <input className="align-self-center" type="submit" value="Enviar" />
      </form>
      {loading && <Loader />}
      {response && (
        <Message msg="Los datos han sido enviados" bgColor="#198754" />
      )}
    </div>
  );
};

export default ContactForm;
