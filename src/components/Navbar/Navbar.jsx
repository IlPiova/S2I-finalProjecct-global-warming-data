import { Link } from "react-router-dom";
import "./navbar.scss";
// import no2Icon from "../../assets/icons/no2-icon.png";

export default function Navbar() {
  return (
    <ul className="navbar">
      {/* <Link to="resources">Resorces</Link> */}
      <Link className="nav-item" to="/azoto">
        {/* <img src={no2Icon} alt="" />{" "} */}
        NO2
      </Link>
      <Link className="nav-item" to="/ghiaccio-antartico">
        Ghiaccio
      </Link>

      <Link className="nav-item" to="/">
        HOME
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
