import React from "react";
import { LineChart, Line } from "recharts";

function LineGraph() {
  const data = [
    {
      name: "01-may",
      uv: 18,
      pv: 20,
      amt: 10,
    },
    {
      name: "02-may",
      uv: 15,
      pv: 18,
      amt: 15,
    },
    {
      name: "03-may",
      uv: 7,
      pv: 22,
      amt: 20,
    },
    {
      name: "04-may",
      uv: 13,
      pv: 24,
      amt: 25,
    },
    {
      name: "05-may",
      uv: 7,
      pv: 17,
      amt: 30,
    },
    {
      name: "06-may",
      uv: 25,
      pv: 28,
      amt: 35,
    },
    {
      name: "07-may",
      uv: 22,
      pv: 18,
      amt: 40,
    },
    {
      name: "08-may",
      uv: 18,
      pv: 25,
      amt: 45,
    },
    {
      name: "09-may",
      uv: 18,
      pv: 23,
      amt: 50,
    },
    {
      name: "10-may",
      uv: 20,
      pv: 53,
      amt: 55,
    },
    {
      name: "11-may",
      uv: 13,
      pv: 42,
      amt: 60,
    },
    {
      name: "12-may",
      uv: 18,
      pv: 25,
      amt: 65,
    },
    {
      name: "28-Apr",
      uv: 24,
      pv: 27,
      amt: 70,
    },
    {
      name: "29-Apr",
      uv: 14,
      pv: 16,
      amt: 75,
    },
    {
      name: "30-Apr",
      uv: 16,
      pv: 25,
      amt: 80,
    },
  ];

  return (
    <div>
      <LineChart width={350} height={100} data={data}>
        <Line type="monotone" dataKey="uv" stroke="green" />
      </LineChart>
    </div>
  );
}

export default LineGraph;
