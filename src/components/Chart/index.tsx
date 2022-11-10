import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { ILayout } from "../../types";
import { getDinamicWidthChart } from "../../utils";
import { data } from "./mockData";



export const Chart = ({ layout }: ILayout) => {
  const [dinamicWidth, setDinamicWidth] = useState(400);

  useEffect(() => {
    const width = getDinamicWidthChart(layout, "Chart");
    setDinamicWidth(width);
  }, [layout]);

  return (
      <AreaChart
        width={dinamicWidth}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
  );
};
