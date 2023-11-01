import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import Comics from "./components/Comics";
import { Menu } from "./components/Menu";
import { Home } from "./components/Home";
import { Characters } from "./components/Characters";
import { Character } from "./components/Character";
import Events from "./components/Events";
import { EventsDetail } from "./components/EventsDetail";

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
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventsDetail />} />
          <Route path="/ContactForm" element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
