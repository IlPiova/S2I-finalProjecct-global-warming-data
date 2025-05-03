import { Link } from "react-router-dom";
import "./error.scss";

export default function ErrorComponent(mex) {
  //Componente da mostrare quando si verifica un errore, mostrerà il messaggio dell'errore verificatosi

  return (
    <>
      <div className="error-container">
        <p className="error-message">{mex}</p>
        <Link to="/" className="error-button">
          Clicca per tornare alla Home
        </Link>
      </div>
    </>
  );
}
