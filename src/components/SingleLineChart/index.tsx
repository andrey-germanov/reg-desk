import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { ILayout } from "../../types";
import { getDinamicWidthChart } from "../../utils";
import { data } from "./mockData";

export const SingleLineChart = ({ layout }: ILayout) => {
  const [dinamicWidth, setDinamicWidth] = useState(400);

  useEffect(() => {
    const width = getDinamicWidthChart(layout, "SingleLineChart");
    setDinamicWidth(width);
  }, [layout]);
  
  return (
    <LineChart
      width={dinamicWidth}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="date"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="value" stroke="#82ca9d" />
    </LineChart>
  );
};
