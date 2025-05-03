import { useGetMetQuery } from "../../services/DataQuery";
import Navbar from "../Navbar/Navbar";
import Error from "../Error/errorComponent";
import LineChartComponent from "../LineChart.jsx/LineChart";
import Loading from "../Loading/LoadingComponent";
import Footer from "../Footer/FooterComponent";

export default function MethaneComponent() {
  const { data, error, isLoading } = useGetMetQuery();

  return (
    <>
      <Navbar></Navbar>
      <h1>Concentrazione di metano nell'atmosfera</h1>
      {error && <Error mex={error.message} />}
      {isLoading && <Loading />}

      {/*Grafico dati comprendente il trend e la quantità del componente */}
      <div className="info-container">
        {data && <LineChartComponent data={data.methane} />}
        <p className="description">
          Il metano è un gas con un potenziale di riscaldamento globale molte
          volte superiore a quello della CO2. Per più di 650.000 anni, la
          concentrazione di metano nell'atmosfera è stata compresa tra 350 e 800
          ppb. Dall'inizio della rivoluzione industriale, le attività umane
          hanno aumentto la sua concentrazione di circa il 150%.
          <br />
          <br />
          Il <span className="bold">50-65%</span> delle emissioni globali totali
          di metano proviene comunque dalle attività umane. Questi includono il
          bestiame, l'agricoltura, i sistemi petroliferi e del gas, i rifiuti di
          case e aziende, le discariche
        </p>
      </div>
      <Footer />
    </>
  );
}
