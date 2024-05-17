import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoShareAndroid } from "react-icons/go";
import { LuPrinter } from "react-icons/lu";
import { CgExport } from "react-icons/cg";

function DashboardScreen() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-2 border-end">
              <p>Overview</p>
            </div>
            <div className="col-md-2 border-end">
              <p>Audiences</p>
            </div>
            <div className="col-md-2 border-end">
              <p>Demographics</p>
            </div>
            <div className="col-md-2">
              <p>More</p>
            </div>
            <div className="col-md-4">{""}</div>
          </div>
          <hr />
        </div>

        <div className="col-md-4">
          <div className="row">
            <div className="col-md-4">
              <button className="btn btn-light px-4">
                <GoShareAndroid className="me-2" />
                Share
              </button>
            </div>
            <div className="col-md-4">
              <button className="btn btn-light px-4">
                <LuPrinter className="me-2" />
                Print
              </button>
            </div>
            <div className="col-md-4">
              <button className="btn btn-primary px-4">
                <CgExport className="me-2" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* -----------new section------- */}
      <div className="row">
        <div className="col-md-2 ">
          <p>All User</p>
          <h2 className="fs-1">9</h2>
        </div>
        <div className="col-md-2">
          <p>MyAssets</p>
          <h2 className="fs-1">159</h2>
        </div>
        <div className="col-md-2">
          <p>Running Assests</p>
          <h2 className="fs-1">146</h2>
        </div>
        <div className="col-md-2">
          <p>Open Tickets</p>
          <h2 className="fs-1">8</h2>
        </div>
        <div className="col-md-2">
          <p>Down Links</p>
          <h2 className="fs-1">9</h2>
        </div>
        <div className="col-md-2">
          <p>Pending</p>
          <h2 className="fs-1">8</h2>
        </div>
      </div>

      
    </div>
  );
}

export default DashboardScreen;
