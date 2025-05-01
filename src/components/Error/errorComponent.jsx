import { Link } from "react-router-dom";

export default function Error(mex) {
  //Componente da mostrare quando si verifica un errore, mostrerà il messaggio dell'errore verificatosi

  return (
    <>
      <div className="error-container">
        <p className="error-message">{mex}</p>
        <Link to="/">Clicca per tornare alla Home</Link>
      </div>
    </>
  );
}
