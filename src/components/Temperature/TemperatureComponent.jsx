import { useGetTempQuery } from "../../services/DataQuery";
import Navbar from "../Navbar/Navbar";
import Error from "../Error/errorComponent";
import LineChartComponent from "../LineChart.jsx/LineChart";
import Loading from "../Loading/LoadingComponent";
import Footer from "../Footer/FooterComponent";

export default function TemperatureComponent() {
  const { data, error, isLoading } = useGetTempQuery();
  let chartData;

  //Creazione oggetto compatibile con il componente LineChart
  function realDateCalculator(date) {
    const [yearStr, percStr] = date.split(".");
    const year = parseInt(yearStr);
    const percentage = parseFloat("0." + percStr);
    const month = Math.floor(percentage * 12);
    return new Date(year, month);
  }

  function createBetterArr() {
    return data.result.map((obj) => {
      return {
        average: obj.station,
        trend: obj.land,
        date: realDateCalculator(obj.time),
      };
    });
  }
  if (data) {
    chartData = createBetterArr();
  }
  return (
    <>
      <Navbar></Navbar>
      <h1>Variazione temperature globali</h1>
      {error && <Error mex={error.message} />}
      {isLoading && <Loading />}
      <div className="info-container">
        {/*Grafico dati comprendente il trend e la quantità del componente */}

        {data && <LineChartComponent data={chartData} />}
        <p className="description">
          L'aumento totale della temperatura media globale dalla rivoluzione
          industriale è di circa 1,0°C. L'emisfero settentrionale della Terra si
          sta riscaldando più velocemente.
          <span className="bold"> L'Artico si è riscaldato tra 2°C e 4°C.</span>
          <br />
          <br />
          La temperatura terrestre e la proporzione di gas come Co2, metano e
          protossido di azoto nell'atmosfera sono strettamente correlate.
        </p>
        <Footer />
      </div>
    </>
  );
}
