import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Ma'lumot turlari
interface DataPoint {
  name: string;
  value: number;
}

const data: DataPoint[] = [
  { name: "Jan", value: 14000 },
  { name: "Feb", value: 10000 },
  { name: "Mar", value: 25000 },
  { name: "Apr", value: 10000 },
  { name: "May", value: 13000 },
  { name: "Jun", value: 5000 },
  { name: "Jul", value: 6000 },
  { name: "Aug", value: 13000 },
  { name: "Sep", value: 9000 },
  { name: "Oct", value: 20000 },
  { name: "Nov", value: 13000 },
  { name: "Dec", value: 14000 },
];

const Linechart: React.FC = () => (
  <ResponsiveContainer width={"100%"} height={"100%"}>
    <LineChart data={data}>
      <XAxis dataKey="name" tick={{ fontSize: 12 }} textAnchor="end" />
      <YAxis hide />
      <Tooltip />
      <Line
        strokeWidth={4}
        type="monotone"
        dataKey="value"
        stroke="hsla(248,100%,61%,1)"
        dot={false}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default Linechart;
