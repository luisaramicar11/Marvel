import { Link } from "react-router-dom";
export function Menu() {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/">Home</Link>
      <Link to="/CustomHooks">Characters</Link>
      <Link to="/comics">Comics</Link>
      <Link to="/ContactForm">Contactanos</Link>
    </nav>
  );
}
