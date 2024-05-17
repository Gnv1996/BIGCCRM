import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import LineGraph from "./LineGraph";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Graph() {
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
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8 py-3" style={{ backgroundColor: "white" }}>
          <div className="">
            <h4 className="fw-1">Performance Chart</h4>
            <p>Ticket Summary</p>
          </div>
          <LineChart width={700} height={500} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="uv" stroke="red" />
            <Line type="monotone" dataKey="pv" stroke="blue" />
          </LineChart>
        </div>

        <div className="col-md-4">
          <div className="card bg-info  px-3" style={{ height: 300 }}>
            <h4 className="fw-1 px-2 pt-4">Status Summary</h4>
            <p className="px-2 ">Closed Value</p>
            <h1 className="px-2 fw-1 text-primary">357</h1>
            <LineGraph />
          </div>

          <div className="card" style={{ marginTop: 40 }}>
            <div className="row py-4 px-4 ">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <div style={{ width: 60, height: 60 }}>
                      <CircularProgressbar value={66} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p>CPU</p>
                    <span style={{ fontSize: "25px", fontWeight: "bold" }}>
                      80 %
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
                    <p>Disk</p>
                    <span style={{ fontSize: "25px", fontWeight: "bold" }}>
                      40 %
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
                      4292
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