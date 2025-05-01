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

import "./lineChart.scss";

export default function LineChartComponent({ data }) {
  return (
    <>
      {data && (
        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="5" />
              <XAxis dataKey="date" />
              <YAxis
                dataKey="average"
                type="number"
                domain={["dataMin - 2", "dataMax + 2"]}
              />
              <Tooltip />
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
      )}
    </>
  );
}
