import { useGetCOQuery } from "../../services/DataQuery";
import Navbar from "../Navbar/Navbar";
import Error from "../Error/errorComponent";
import LineChartComponent from "../LineChart.jsx/LineChart";
import Loading from "../Loading/LoadingComponent";
import Footer from "../Footer/FooterComponent";

export default function CarbonDioxComponent() {
  let chartData;
  const { data, error, isLoading } = useGetCOQuery();

  //Creazione oggetto compatibile con il componente LineChart
  function createBetterArr() {
    return data.co2.map((obj) => {
      return {
        average: obj.cycle,
        trend: obj.trend,
        date: `${obj.year}.${obj.month}.${obj.day}`,
      };
    });
  }
  if (data) {
    chartData = createBetterArr();
  }

  return (
    <>
      <Navbar></Navbar>
      <h1>Concentrazione di anidride carbonica nell'atmosfera</h1>
      {error && <Error mex={error.message} />}
      {isLoading && <Loading />}
      <div className="info-container">
        {data && <LineChartComponent data={chartData} />}
        <p className="description">
          Per migliaia di anni, la concentrazione naturale di CO2 nell'atmosfera
          terrestre è stata di circa 280 ppm. Dall'inizio della rivoluzione
          industriale, le attività umane come la combustione di combustibili
          fossili, la deforestazione e l'allevamento hanno aumentato questa
          cifra di <span className="bold"> oltre il 30%</span>.
        </p>
      </div>
      <Footer />
    </>
  );
}
