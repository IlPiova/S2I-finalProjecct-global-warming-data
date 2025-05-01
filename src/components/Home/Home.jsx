import Navbar from "../Navbar/Navbar";
import eventsArr from "../../assets/events.json";
import { useNavigate } from "react-router";

import "./home.scss";

export default function Home() {
  let navigate = useNavigate();
  //Funzione per creare la timeline degli eventi principali riguardanti il riscaldamento climatico
  function makeTimeLine() {
    return eventsArr.map((event) => (
      <div key={event.id} className="event-container">
        <h2 className="year">{event.year}</h2>
        <div className="event-info">
          <p className="event-title">{event.event}</p>
          <p className="description">{event.description}</p>
          <div className="event-sources">
            {event.source.map((source, i) => (
              <a key={i} href={source.domain} className="source-bubble">
                {source.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    ));
  }

  return (
    <>
      <Navbar></Navbar>
      <h1>Scopri i dati</h1>
      <div className="general-container">
        <div
          className="elem-box"
          id="temperatura"
          onClick={() => navigate("/temperatura")}
        >
          Storico temperatura
        </div>
        <div
          className="elem-box"
          id="co2"
          onClick={() => navigate("/anidride-carbonica")}
        >
          Concentrazione Anidride Carbonica
        </div>
        <div className="elem-box" id="Met" onClick={() => navigate("/metano")}>
          Concentrazione Metano
        </div>
        <div className="elem-box" id="no2" onClick={() => navigate("/azoto")}>
          Concentrazione NO2
        </div>
        <div
          className="elem-box"
          id="ghiaccio"
          onClick={() => navigate("/ghiaccio-antartico")}
        >
          Dimensione Ghiaccio Antartico
        </div>
      </div>

      <h1>Eventi da ricordare</h1>
      <div className="events-container">{makeTimeLine()}</div>
    </>
  );
}
