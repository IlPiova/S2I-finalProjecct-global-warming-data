import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Nitro from "./components/NO2/Nitro";
import PolarIce from "./components/PolarIce/PolarIce";
import MethaneComponent from "./components/Methane/MethaneComponent";
import TemperatureComponent from "./components/Temperature/TemperatureComponent";
import CarbonDioxComponent from "./components/CO2/CarbonDiox";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/azoto" element={<Nitro />} />
          <Route path="/ghiaccio-antartico" element={<PolarIce />} />
          <Route path="/metano" element={<MethaneComponent />} />
          <Route path="/temperatura" element={<TemperatureComponent />} />
          <Route path="/anidride-carbonica" element={<CarbonDioxComponent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
