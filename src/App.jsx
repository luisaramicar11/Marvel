import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomHooks from "./components/CustomHooks";
import ContactForm from "./components/ContactForm";
import Comics from "./components/Comics";
import { Menu } from "./components/Menu";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CustomHooks" element={<CustomHooks />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/ContactForm" element={<ContactForm />} />
        </Routes>
      </BrowserRouter>

      {/*     <CustomHooks />
      <Comics />
      <ContactForm />
       */}
    </>
  );
}

export default App;
