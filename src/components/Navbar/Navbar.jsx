import { Link } from "react-router-dom";
import "./navbar.scss";
import home from "../../assets/icon/global-warming-data-icon.png";

export default function Navbar() {
  return (
    <ul className="navbar">
      <Link className="nav-item" to="/">
        <img src={home} alt="" />
      </Link>
      <Link className="nav-item" to="/azoto">
        NO2
      </Link>
      <Link className="nav-item" to="/ghiaccio-antartico">
        Ghiaccio
      </Link>

      <Link className="nav-item" to="/metano">
        Metano
      </Link>
      <Link className="nav-item" to="/temperatura">
        Temp
      </Link>
      <Link className="nav-item" to="/anidride-carbonica">
        CO2
      </Link>
    </ul>
  );
}
