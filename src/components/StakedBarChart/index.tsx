import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { ILayout } from "../../types";
import { getDinamicWidthChart } from "../../utils";
import { data } from "./mockData";

export const StakedBarChart = ({ layout }: ILayout) => {
  const [dinamicWidth, setDinamicWidth] = useState(400);

  useEffect(() => {
    const width = getDinamicWidthChart(layout, "StakedBarChart");
    setDinamicWidth(width);
  }, [layout]);
  return (
    <BarChart
      width={dinamicWidth}
      height={300}
      data={data}
      margin={{
        top: 20,
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
      <Bar dataKey="income" stackId="a" fill="#8884d8" />
      <Bar dataKey="spend" stackId="a" fill="#82ca9d" />
    </BarChart>
  );
};
