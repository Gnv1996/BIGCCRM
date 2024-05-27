import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  // LineChart,
  // Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
  Dot,
} from "recharts";
import LineGraph from "./LineGraph";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import DashboardScreen from "../Screen/DashboardScreen";

function Graph() {
  const data = [
    { name: "01-may", uv: 18, pv: 20, amt: 10 },
    { name: "02-may", uv: 15, pv: 18, amt: 15 },
    { name: "03-may", uv: 7, pv: 22, amt: 20 },
    { name: "04-may", uv: 13, pv: 24, amt: 25 },
    { name: "05-may", uv: 7, pv: 17, amt: 30 },
    { name: "06-may", uv: 25, pv: 28, amt: 35 },
    { name: "07-may", uv: 22, pv: 18, amt: 40 },
    { name: "08-may", uv: 18, pv: 25, amt: 45 },
    { name: "09-may", uv: 18, pv: 23, amt: 50 },
    { name: "10-may", uv: 20, pv: 53, amt: 55 },
    { name: "11-may", uv: 13, pv: 42, amt: 60 },
    { name: "12-may", uv: 18, pv: 25, amt: 65 },
    { name: "28-Apr", uv: 24, pv: 27, amt: 70 },
    { name: "29-Apr", uv: 14, pv: 16, amt: 75 },
    { name: "30-Apr", uv: 16, pv: 25, amt: 80 },
  ];
  return (
    <div
      className="container-fluid py-5 bg-light"
      style={{ marginTop: "100px", overflow: "hidden" }}
    >
      <DashboardScreen />
      <div className="row py-5" style={{ overflow: "hidden" }}>
        <div className="col-md-8" style={{ backgroundColor: "white" }}>
          <div className="">
            <h4 className="fw-1">Performance Chart</h4>
            <p>Ticket Summary</p>
          </div>
          <div></div>
          <AreaChart
            width={700}
            height={500}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ADD8E6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ADD8E6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFB6C1" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            >
              {data.map((entry, index) => (
                <Dot
                  key={`dot-${index}`}
                  cx={entry.name}
                  cy={entry.uv}
                  r={4}
                  fill="#8884d8"
                />
              ))}
            </Area>
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            >
              {data.map((entry, index) => (
                <Dot
                  key={`dot-${index}`}
                  cx={entry.name}
                  cy={entry.pv}
                  r={4}
                  fill="#82ca9d"
                />
              ))}
            </Area>
          </AreaChart>
        </div>

        <div className="col-md-4" style={{ overflow: "hidden" }}>
          <div className="card bg-info  px-3" style={{ height: "250px" }}>
            <h4 className="fw-1 px-2 pt-4">Status Summary</h4>
            <p className="px-2 ">Closed Value</p>
            <h1 className="px-2 fw-1 text-primary">357</h1>
            <LineGraph />
          </div>

          <div className="card py-4" style={{ marginTop: 40, height: "150px" }}>
            <div className="row py-4 px-4 ">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <div style={{ width: 60, height: 60 }}>
                      <CircularProgressbar value={66} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p>Network</p>
                    <span style={{ fontSize: "25px", fontWeight: "bold" }}>
                      429
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <div style={{ width: 60, height: 60 }}>
                      <CircularProgressbar value={66} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p>Ram</p>
                    <span style={{ fontSize: "25px", fontWeight: "bold" }}>
                      80 %
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card" style={{ marginTop: 20 }}>
            <div className="row py-4 px-4 ">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <div style={{ width: 60, height: 60 }}>
                      <CircularProgressbar value={66} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p>Network</p>
                    <span style={{ fontSize: "25px", fontWeight: "bold" }}>
                      429
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <div style={{ width: 60, height: 60 }}>
                      <CircularProgressbar value={66} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p>Network</p>
                    <span style={{ fontSize: "25px", fontWeight: "bold" }}>
                      429
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graph;
