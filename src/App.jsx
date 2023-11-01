import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import Comics from "./components/Comics";
import { Menu } from "./components/Menu";
import { Home } from "./components/Home";
import { Characters } from "./components/Characters";
import { Character } from "./components/Character";
import Footer from "./components/Footer";
import { Stories } from "./components/Stories";
import { Error404 } from "./components/Error404";

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
          <Route path="/comic1" element={<Navigate to="/comics" />} />
          <Route path="/comic2" element={<Navigate to="/comics" />} />
          <Route path="/comic3" element={<Navigate to="/comics" />} />
          <Route path="/comic4" element={<Navigate to="/comics" />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
