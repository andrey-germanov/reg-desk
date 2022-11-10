import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from "recharts";
import { ILayout } from "../../types";
import { getDinamicWidthChart } from "../../utils";
import { data } from "./mockData";

const colors = ["#7DB3FF", "#49457B", "#FF7C78"];

export const PieC = ({layout}: ILayout) => {
  const [dinamicWidth, setDinamicWidth] = useState(400);

  useEffect(() => {
    const width = getDinamicWidthChart(layout,'PieC');
    setDinamicWidth(width);
  }, [layout]);
  return (
    <PieChart width={dinamicWidth} height={200}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        outerRadius={80}
        dataKey="value"
        fill="#8884d8"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Legend />
      <Tooltip />
    </PieChart>
  );
};
