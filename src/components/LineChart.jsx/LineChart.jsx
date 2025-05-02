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

import { useState } from "react";

import "./lineChart.scss";

export default function LineChartComponent({ data }) {
  // Funzione per convertire la stringa data in una vera data, servirà per i filtri temporali
  const [originalData, setOriginalData] = useState(
    data.map((obj) => ({
      ...obj,
      date: new Date(obj.date),
    }))
  );
  const [filteredData, setFilteredData] = useState(originalData);

  //Ogni volta che uso un filtro il valore di newData cambia, quindi ne salvo una copia in modo da poter annullare le modifiche fatte precedentemente per un nuovo filtro

  // function handleTenYearFilter() {
  //   setFilteredData(newData);
  //   const tenYearsDate = new Date(newData[newData.length - 1].date);
  //   tenYearsDate.setFullYear(tenYearsDate.getFullYear() - 10);
  //   filteredDate = newData.filter((obj) => obj.date >= tenYearsDate);
  //   setNewData(filteredDate);
  //   console.log("ten years", newData);
  // }

  // function handleOneYearFilter() {
  //   setNewData(newDataCopy);
  //   const oneYearDate = new Date(newData[newData.length - 1].date);
  //   oneYearDate.setFullYear(oneYearDate.getFullYear() - 1);
  //   filteredDate = newData.filter((obj) => obj.date >= oneYearDate);
  //   setNewData(filteredDate);
  //   console.log("ten years", newData);
  // }

  function handleClickFilter(num) {
    setFilteredData(originalData);
    const finalData = new Date(originalData[originalData.length - 1].date);
    finalData.setMonth(finalData.getMonth() - num);
    const newData = originalData.filter((obj) => obj.date >= finalData);
    setFilteredData(newData);
    console.log(`${num} mesi`, filteredData);
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

    // console.log("today:", newData);
  }

  return (
    <>
      {data && (
        <div className="general-container">
          <div className="filters-container">
            <div
              className="filter-box"
              onClick={() => handleClickFilter(12)}
              id="one-year"
            >
              Ultimo anno
            </div>
            <div
              className="filter-box"
              onClick={() => handleClickFilter(120)}
              id="ten-year"
            >
              Ultimi 10 anni
            </div>
            <div
              className="filter-box"
              onClick={() => handleClickFilter(6)}
              id="six-month"
            >
              Ultimi 6 mesi
            </div>
            <div className="filter-box" onClick={handleFilterClick} id="today">
              Oggi
            </div>
          </div>
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
                />
                <YAxis dataKey="average" type="number" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="average"
                  stroke="#8884d8"
                  dot={{ r: 0 }}
                  activeDot={{ r: 4 }}
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="trend"
                  stroke="#FF4242"
                  dot={{ r: 0 }}
                  activeDot={{ r: 4 }}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
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
