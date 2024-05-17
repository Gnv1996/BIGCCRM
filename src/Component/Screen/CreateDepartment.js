import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function CreateDepartment() {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="row pb-3">
        <div className="col-md-6">
          <h2>Department</h2>

          <button className="btn btn-primary">Add Departments</button>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-md-12">
          <label for="exampleInputEmail1" class="form-label">
            Department Code
          </label>
          <input placeholder="Name" type="text" className="form-control py-2" />
        </div>
        <div className="col-md-12 my-4">
          <label for="exampleInputEmail1" class="form-label">
            Department Name
          </label>
          <input
            placeholder="Mobile"
            type="text"
            className="form-control py-2"
          />
        </div>
      </div>

      <button className="btn btn-primary px-4">Upload</button>
    </div>
  );
}

export default CreateDepartment;
