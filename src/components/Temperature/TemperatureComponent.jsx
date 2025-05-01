import { useGetTempQuery } from "../../services/DataQuery";
import Navbar from "../Navbar/Navbar";
import Error from "../Error/errorComponent";
import LineChartComponent from "../LineChart.jsx/LineChart";

export default function TemperatureComponent() {
  const { data, error, isLoading } = useGetTempQuery();
  let chartData;

  //Creazione oggetto compatibile con il componente LineChart
  function createBetterArr() {
    return data.result.map((obj) => {
      return {
        average: obj.station,
        trend: obj.land,
      };
    });
  }
  if (data) {
    chartData = createBetterArr();
  }
  return (
    <>
      <Navbar></Navbar>
      <h1>Concentrazione di metano nell'atmosfera</h1>
      {error && <Error />}
      {isLoading && <p>Loading...</p>}

      {/*Grafico dati comprendente il trend e la quantità del componente */}

      {data && <LineChartComponent data={chartData} />}
      <p className="description">
        Il metano è un gas con un potenziale di riscaldamento globale molte
        volte superiore a quello della CO2. Per più di 650.000 anni, la
        concentrazione di metano nell'atmosfera è stata compresa tra 350 e 800
        ppb. Dall'inizio della rivoluzione industriale, le attività umane hanno
        aumentto la sua concentrazione di circa il 150%.
        <br />
        <br />
        Il <span className="bold">50-65%</span> delle emissioni globali totali
        di metano proviene comunque dalle attività umane. Questi includono il
        bestiame, l'agricoltura, i sistemi petroliferi e del gas, i rifiuti di
        case e aziende, le discariche
      </p>
      <div className="secondary-info"></div>
      <div className="secondary-info"></div>
    </>
  );
}
