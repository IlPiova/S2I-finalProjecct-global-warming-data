import Navbar from "../Navbar/Navbar";
import eventsArr from "../../assets/events.json";

import "./home.scss";

export default function Home() {
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
      <h1>Non è troppo tardi!</h1>
      <div className="general-container">
        <div id="temperatura">Temp</div>
        <div id="co2">CO2</div>
        <div id="Met">Metano</div>
        <div id="no2">NO2</div>
        <div id="ghiaccio-polare">Ghiaccio</div>
      </div>

      <h2>Eventi da ricordare</h2>
      <div className="events-container">{makeTimeLine()}</div>
    </>
  );
}
