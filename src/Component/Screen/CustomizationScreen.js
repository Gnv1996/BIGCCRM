import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomizationScreen() {
  return (
    <div className="container-fluid">
      <h4 className="text-gray">Choose Your PDF File</h4>

      <form>
        <input
          placeholder="Choose File"
          type="file"
          className="form-control bg-light py-3"
          style={{ width: 600 }}
        />
        <div className="py-4">
          <button className="btn btn-primary py-2 px-4">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CustomizationScreen;
