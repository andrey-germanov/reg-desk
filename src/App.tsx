import "./App.css";
import { Chart } from "./components/Chart";
import { StakedBarChart } from "./components/StakedBarChart";
import { PieC } from "./components/Pie";
import { SingleBarChart } from "./components/SingleBarChart";
import { SingleLineChart } from "./components/SingleLineChart";
import GridLayout, { Layout } from "react-grid-layout";
import { Card } from "antd";
import { memo, useMemo, useState } from "react";


const defaultLayout: Layout[] = [
  { i: "SingleLineChart", x: 0, y: 0, w: 3, h: 1, minW: 3, maxW: 12, maxH: 2 },
  { i: "Chart", x: 3, y: 0, w: 3, h: 1, minW: 3, maxW: 12, maxH: 2 },
  { i: "PieC", x: 6, y: 0, w: 2, h: 1, minW: 2, maxW: 12, maxH: 2 },
  { i: "StakedBarChart", x: 3, y: 1, w: 3, h: 1, minW: 2, maxW: 12, maxH: 2 },
  { i: "SingleBarChart", x: 0, y: 2, w: 3, h: 1, minW: 3, maxW: 12, maxH: 2 },
];

const MemoSingleLineChart = memo(SingleLineChart);
const MemoChart = memo(Chart);
const MemoPieC = memo(PieC);
const MemoStakedBarChart = memo(StakedBarChart);
const MemoSingleBarChart = memo(SingleBarChart);

function App() {
  const [layout, setLayout] = useState<Layout[]>(defaultLayout);
  const onLayoutChange = (layout: Layout[]) => {
    setLayout(layout);
  };
  
  const memoLayout = useMemo(()=> [...layout], [layout]);
  
  return (
    <div className="App">
      <GridLayout
        className="layout"
        layout={layout}
        rowHeight={500}
        width={1440}
        onLayoutChange={onLayoutChange}
      >
        <div key="SingleLineChart">
          <Card title="SingleLineChart" bordered={false}>
            <MemoSingleLineChart layout={memoLayout} />
          </Card>
        </div>
        <div key="Chart">
          <Card title="Chart" bordered={false}>
            <MemoChart layout={memoLayout} />
          </Card>
        </div>
        <div key="PieC">
          <Card title="PieC" bordered={false}>
            <MemoPieC layout={memoLayout} />
          </Card>
        </div>
        <div key="StakedBarChart">
          <Card title="StakedBarChart">
            <MemoStakedBarChart layout={memoLayout} />
          </Card>
        </div>
        <div key="SingleBarChart">
          <Card title="SingleBarChart">
            <MemoSingleBarChart layout={memoLayout} />
          </Card>
        </div>
      </GridLayout>
    </div>
  );
}

export default App;
