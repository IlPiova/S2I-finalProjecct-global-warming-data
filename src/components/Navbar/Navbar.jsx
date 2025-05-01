import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="navbar">
      {/* <Link to="resources">Resorces</Link> */}
      <Link to="/azoto">Azoto</Link>
      <Link to="/ghiaccio-antartico">Ghiaccio Antartico</Link>
      <Link to="/metano">Metano</Link>
      <Link to="/temperatura">Temperature Globali</Link>
      <Link to="/anidride-carbonica">Anidride Carbonica</Link>

      <a href="" target="_blank">
        My Portfolio
      </a>
    </ul>
  );
}
