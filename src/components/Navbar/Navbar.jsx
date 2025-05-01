import { Link } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
  return (
    <ul className="navbar">
      <Link className="nav-item" to="/">
        HOME
      </Link>

      {/* <a className="nav-item" href="" target="_blank">
        My Portfolio
      </a> */}
    </ul>
  );
}
