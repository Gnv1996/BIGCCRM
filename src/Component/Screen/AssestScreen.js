import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function AssestScreen() {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="row py-5">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-2">
              <div className="dropdown">
                <button
                  className="btn btn-light border dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Active
                </button>
                <ul className="dropdown-menu">
                  <div>
                    <a className="dropdown-item" href="#">
                      Active
                    </a>
                  </div>
                  <div>
                    <a className="dropdown-item" href="#">
                      No Active
                    </a>
                  </div>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="dropdown">
                <button
                  className="btn btn-light border"
                  type="button"
                  aria-expanded="false"
                >
                  Active All / Block All
                </button>
              </div>
            </div>
            <div className="col-md-2">
              <div className="dropdown">
                <button
                  className="btn btn-light border dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Yes
                </button>
                <ul className="dropdown-menu">
                  <div>
                    <a className="dropdown-item" href="#">
                      No
                    </a>
                  </div>
                  <div>
                    <a className="dropdown-item" href="#">
                      Other
                    </a>
                  </div>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="dropdown">
                <button
                  className="btn btn-light border"
                  type="button"
                  aria-expanded="false"
                >
                  Ticket Yes / Ticket No
                </button>
              </div>
            </div>
            <div className="col-md-2">
              <div className="dropdown">
                <button
                  className="btn btn-light border"
                  type="button"
                  aria-expanded="false"
                >
                  Add MyAssets
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row pt-3">
        <div className="col-md-4">
          <input placeholder="Link ID" type="text" className="form-control" />
        </div>
        <div className="col-md-4">
          <input placeholder="Site Name" type="text" className="form-control" />
        </div>
        <div className="col-md-4">
          <input placeholder="Address" type="text" className="form-control" />
        </div>
      </div>
      <div className="row py-3">
        <div className="col-md-4">
          <input
            placeholder="Model/Make"
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <input placeholder="Serial No" type="text" className="form-control" />
        </div>
        <div className="col-md-4">
          <input
            placeholder="IPAdress-1"
            type="text"
            className="form-control"
          />
        </div>
      </div>

      <div className="row pb-3">
        <div className="col-md-4">
          <input
            placeholder="IPAdress-2"
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <input
            placeholder="Connectivity"
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <input placeholder="Link BW" type="text" className="form-control" />
        </div>
      </div>

      <div className="row pb-3">
        <div className="col-md-4">
          <input
            placeholder="Discovered Date"
            type="date"
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <input placeholder="Email Id" type="email" className="form-control" />
        </div>
      </div>
      <button className="btn btn-primary">Save</button>
    </div>
  );
}

export default AssestScreen;
