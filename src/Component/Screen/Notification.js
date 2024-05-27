import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

function Notification() {
  return (
    <div className="container-fluid bg-light" style={{ height: "100vh" }}>
      <div className="row px-5" style={{ marginTop: 160 }}>
        <div className="col-md-4">
          <div>
            <p>Email Notification</p>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input py-4 px-5"
              type="checkbox"
              role="switch"
              id="emailSwitch"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <p>WhatsApp Notification</p>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input py-4 px-5"
              type="checkbox"
              role="switch"
              id="whatsappSwitch"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <p>SMS Notification</p>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input py-4 px-5"
              type="checkbox"
              role="switch"
              id="smsSwitch"
            />
          </div>
        </div>
      </div>
      <div className="row px-5 py-5">
        <div className="col-md-4">
          <div>
            <p>Signature Update</p>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input py-4 px-5"
              type="checkbox"
              role="switch"
              id="signatureSwitch"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <p>Incident Update</p>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input py-4 px-5"
              type="checkbox"
              role="switch"
              id="incidentSwitch"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <p>Any Update</p>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input py-4 px-5"
              type="checkbox"
              role="switch"
              id="anyUpdateSwitch"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
