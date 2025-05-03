import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useState, useEffect } from "react";

import "./lineChart.scss";

export default function LineChartComponent({
  data,
  yLabel = "trend",
  y2Label = "average",
}) {
  // Funzione per convertire la stringa data in una vera data, servirà per i filtri temporali
  const [originalData, setOriginalData] = useState(
    data.map((obj) => ({
      ...obj,
      date: new Date(obj.date),
    }))
  );
  const [filteredData, setFilteredData] = useState(originalData);

  //Funzione usata per filtrare la visualizzazione del grafico: per avere una sola funzione
  // per 4 filtri, questa funziona tramite il numero di mesi da visualizzare
  function handleClickFilter(num) {
    setFilteredData(originalData);
    const finalData = new Date(originalData[originalData.length - 1].date);
    finalData.setMonth(finalData.getMonth() - num);
    const newData = originalData.filter((obj) => obj.date >= finalData);
    setFilteredData(newData);
  }

  function handleFilterClick() {
    setFilteredData(originalData);

    setFilteredData(
      originalData.filter(
        (obj) =>
          obj.date.getTime() ===
          originalData[originalData.length - 1].date.getTime()
      )
    );
  }
  //imposto la visualizzazione a 6 mesi al render della pagina
  useEffect(() => {
    handleClickFilter(12);
  }, []);
  return (
    <>
      {data && (
        <div className="general-container">
          <div className="filters-container">
            <div className="filter-box" onClick={() => handleClickFilter(6)}>
              Ultimi 6 mesi
            </div>
            <div className="filter-box" onClick={() => handleClickFilter(12)}>
              Ultimo anno
            </div>
            <div className="filter-box" onClick={() => handleClickFilter(120)}>
              Ultimi 10 anni
            </div>

            <div className="filter-box" onClick={handleFilterClick}>
              Oggi
            </div>
            <div
              className="filter-box"
              onClick={() => setFilteredData(originalData)}
            >
              Completo
            </div>
          </div>
          <div className="data-container">
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={filteredData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="5" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={(tick) =>
                      tick.toLocaleDateString("it-IT", {
                        year: "numeric",
                        month: "numeric",
                      })
                    }
                    minTickGap={20}
                  />
                  <YAxis
                    // dataKey={yLabel}
                    type="number"
                    domain={["dataMin - 2", "dataMax + 2"]}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey={y2Label}
                    stroke="#8884d8"
                    dot={{ r: 0 }}
                    activeDot={{ r: 4 }}
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    dataKey={yLabel}
                    stroke="#FF4242"
                    dot={{ r: 0 }}
                    activeDot={{ r: 4 }}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="secondary-info-container">
              <div className="secondary-info">
                <p className="bold">Inizio Registrazioni: </p>
                <p>{originalData[0].date.toLocaleDateString()}</p>
              </div>
              <div className="secondary-info">
                <p className="bold">Fine Registrazioni: </p>
                <p>
                  {originalData[
                    originalData.length - 1
                  ].date.toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || payload.length === 0) return null;

  const formattedDate = new Date(label).toLocaleDateString("it-IT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="tooltip-container">
      <p className="date-style">{formattedDate}</p>
      {payload.map((entry, index) => (
        <p key={index} style={{ color: entry.color }}>
          {entry.name}:{" "}
          {parseFloat(entry.value).toLocaleString("it-IT", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          })}
        </p>
      ))}
    </div>
  );
}
