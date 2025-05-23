import { useGetIceQuery } from "../../services/DataQuery";
import Navbar from "../Navbar/Navbar";
import Error from "../Error/errorComponent";
import LineChartComponent from "../LineChart.jsx/LineChart";
import Loading from "../Loading/LoadingComponent";
import Footer from "../Footer/FooterComponent";

export default function PolarIce() {
  let chartData, newArr;
  const { data, error, isLoading } = useGetIceQuery();

  //Conversione oggetto di oggeetti (ice) in array:
  function createArray() {
    if (data?.arcticData?.data) {
      return (
        Object.entries(data.arcticData.data)
          //Creazione di un array di oggetti compatibile con il componente LineChart
          .map(([date, values]) => {
            const year = parseInt(date.slice(0, 4), 10);
            const month = parseInt(date.slice(4, 6), 10) - 1;
            return {
              date: new Date(year, month),
              area: values.value,
              areaMedia: values.monthlyMean,
            };
          })
          //Eliminazione dati non validi dal nuovo array
          .filter((data) => data.area !== -9999)
      );
    }
  }
  if (data) {
    chartData = createArray();
  }

  return (
    <>
      <Navbar></Navbar>
      <h1>Estensione del ghiaccio antartico</h1>
      {error && <Error mex={error.message} />}
      {isLoading && <Loading />}
      {data && (
        <div className="info-container">
          {/* Inserimento grafico */}

          <LineChartComponent
            data={chartData}
            yLabel={"area"}
            y2Label={"areaMedia"}
          />

          <p className="description">
            L'Artico si sta riscaldando circa
            <span className="bold">
              due volte più velocemente della media globale
            </span>{" "}
            Alcune delle cause di questa situazione sono: l'amplificazione
            artica, l'effetto albedo e il carbonio nero. Dal 1979 al 1996,
            abbiamo perso il 2,2-3% della copertura di ghiaccio artico. Dal 2010
            ad oggi stiamo perdendo il 12,85% per decennio!
            <br />
            <br />
            Ma lo scioglimento dell'Antartico porta a un'altra conseguenza:
            <span className="bold"> lo scioglimento del permafrost</span> , che
            porta al rilascio di grandi quantità di metano nell'atmosfera,
            alimentando maggiormente il processo di riscaldamento globale.
          </p>
        </div>
      )}
      <Footer />
    </>
  );
}
