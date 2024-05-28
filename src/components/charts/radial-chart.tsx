import { RadialBarChart, PolarAngleAxis, RadialBar } from "recharts";

const RadialChart = () => {
  // Sample data
  const data = [
    { name: "A", value: 4, x: 1, fill: "#20C997" },
    { name: "B", value: 6, x: 2, fill: "#FF7049" },
    { name: "C", value: 8, x: 3, fill: "#563BFF" },
  ];

  return (
    <RadialBarChart
      width={200}
      height={200}
      data={data}
      // cx={30 / 2}
      // cy={30 / 2}
      innerRadius={40}
      // outerRadius={18}
      barSize={7}
      startAngle={90}
      endAngle={-270}
    >
      <PolarAngleAxis
        type="number"
        domain={[0, 10]}
        angleAxisId={0}
        tick={false}
      />
      <RadialBar
        background
        dataKey="value"
        cornerRadius={30 / 2}
        fill="#0BEFF2"
        width="100%"
        height="100%"
      />
    </RadialBarChart>
  );
};

export default RadialChart;
