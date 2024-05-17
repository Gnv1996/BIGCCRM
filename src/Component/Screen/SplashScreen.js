import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Assest/BIGCRM_New_Logo.png";
import rocket from "../Assest/rocket.png";

function SplashScreen() {
  return (
    <div className="container">
      <div className="row py-4">
        <div className="col-md-10">
          <img
            src={logo}
            alt="loading"
            className=""
            style={{ height: 60, width: 300 }}
          />
        </div>
        <div className="col-md-2">
          <button
            className="btn btn-primary form-control "
            style={{ borderRadius: 15 }}
          >
            Login
          </button>
        </div>
      </div>

      <div className="row py-5 text-center">
        <div className="py-2 mt-5">
          <button
            className="btn btn-primary px-5 "
            style={{ borderRadius: 15 }}
          >
            Request Demo & Trail
          </button>
        </div>

        <div className="py-4">
          <img src={rocket} className="img-fluid" alt="loading" />
        </div>
        <div>
          <h1 className="fs-1">So , What are You Waiting for?</h1>
        </div>
        <div>
          <p className="fs-3 pt-3">
            Try <span className="text-primary">BIG CRM</span> For your business
            today?
          </p>
        </div>
        <div className=" mt-5">
          <button
            className="btn btn-primary px-5 "
            style={{ borderRadius: 15 }}
          >
            Request Demo & Trail
          </button>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
