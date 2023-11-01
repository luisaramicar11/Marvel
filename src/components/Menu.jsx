import { Link } from "react-router-dom";
export function Menu() {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/">Home</Link>
      <Link to="/characters">Characters</Link>
      <Link to="/comics">Comics</Link>
      <Link to="/events">Events</Link>
      <Link to="/ContactForm">Contactanos</Link>
    </nav>
  );
}
