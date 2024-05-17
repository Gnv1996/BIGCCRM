import React from "react";
import LeftImg from "../Assest/leftImg.png";
import avatar from "../Assest/avatar.png";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginScreen() {
  return (
    <div className="container" style={{ marginTop: "8%" }}>
      <div className="row py-5 px-5">
        <div className="col-md-6">
          <img src={LeftImg} alt="Banner" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <div className="text-center py-2">
            <img src={avatar} alt="logo" style={{ height: 60, width: 60 }} />
            <h2 className="py-3">BIGCRM</h2>
          </div>
          <form>
            <div class="form-group py-2">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group py-3">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              class="btn btn-danger form-control"
              style={{ borderRadius: 15 }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
