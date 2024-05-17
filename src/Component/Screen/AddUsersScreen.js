import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function AddUsersScreen() {
  return (
    <div
      className="container-fluid bg-light py-5"
      style={{ marginTop: "60px" }}
    >
      <div className="row pb-3">
        <div className="col-md-6">
          <h2>User List</h2>

          <button className="btn btn-primary">Add Users</button>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-md-4">
          <input placeholder="Name" type="text" className="form-control" />
        </div>
        <div className="col-md-4">
          <input placeholder="Mobile" type="phone" className="form-control" />
        </div>
        <div className="col-md-4">
          <input placeholder="Emp-id" type="text" className="form-control" />
        </div>
      </div>
      <div className="row py-3">
        <div className="col-md-4">
          <input
            placeholder="Password"
            type="password"
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <input placeholder="Address" type="text" className="form-control" />
        </div>
        <div className="col-md-4">
          <input placeholder="Address" type="text" className="form-control" />
        </div>
      </div>
      <div className="row pb-3">
        <div className="col-md-4">
          <div className="dropdown">
            <button
              className="btn btn border form-control dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  Admin
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Users
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Visiter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dropdown">
            <button
              className="btn btn border dropdown-toggle form-control"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  Admin
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  User
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Visiter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button className="btn btn-primary">Save</button>
    </div>
  );
}

export default AddUsersScreen;
