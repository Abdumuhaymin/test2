import React from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const data = [
  { name: "Direct", uv: 1500, amt: 2400, fill: "#563BFF" },
  { name: "Direct", uv: 2000, amt: 2210, fill: "#FF7049" },
  { name: "Direct", uv: 1000, amt: 2290, fill: "#20C997" },
];

const HorizontalBarChart: React.FC = () => {
  return (
    <BarChart
      layout="vertical"
      width={200}
      height={110}
      data={data}
      margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
    >
      <XAxis hide type="number" />
      <YAxis type="category" dataKey="name" />
      <Bar dataKey="uv" radius={10} barSize={6} fill="fill" />
    </BarChart>
  );
};

export default HorizontalBarChart;
