import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomHooks from "./components/CustomHooks";
import ContactForm from "./components/ContactForm";
import Comics from "./components/Comics";
import { Menu } from "./components/Menu";
import { Home } from "./components/Home";
import { characters } from "./components/characters";
import { character } from "./components/character";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<Character />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/ContactForm" element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
