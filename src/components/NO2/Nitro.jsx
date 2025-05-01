import { useGetNOQuery } from "../../services/DataQuery";
import Navbar from "../Navbar/Navbar";
import Error from "../Error/errorComponent";
import LineChartComponent from "../LineChart.jsx/LineChart";

export default function Nitro() {
  const { data, error, isLoading } = useGetNOQuery();
  return (
    <>
      <Navbar></Navbar>
      <h1>Concentrazione di biossido di azoto nell'atmosfera</h1>
      {error && <Error />}
      {isLoading && <p>Loading...</p>}

      {/*Grafico dati comprendente il trend e la quantità del componente */}

      {data && <LineChartComponent data={data.nitrous} />}
      <p className="description">
        Il biossido di azoto è un gas prodotto dalla combustione di combustibili
        fossili e rifiuti solidi, fertilizzanti a base di azoto, impianti di
        trattamento delle acque reflue, processi naturali e altre attività
        agricole e industriali.
        <br />
        <br />È il terzo più grande gas che intrappola il calore nell'atmosfera
        e il più grande composto che distrugge l'ozono emesso dalle attività
        umane.
      </p>
      <div className="secondary-info"></div>
      <div className="secondary-info"></div>
    </>
  );
}
