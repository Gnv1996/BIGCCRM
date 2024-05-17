import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import logo_bg from "../Assest/logo_bg.png";

function NavbarScreen() {
  return (
    <div className="container-fluid" style={{ position: "fixed" }}>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={logo_bg}
              alt="Loading..."
              className="img-fluid"
              style={{ height: 70, width: 200 }}
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <div className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <div>
                <h2 className="text-gray">
                  Welcome , <span style={{ fontWeight: "bold" }}>CRM</span>
                </h2>
                <p className="fs-5">ABC COMMUNICATION PVT LIMITED</p>
              </div>
            </div>
            {/* <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Link
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">
                  Link
                </a>
              </li>
            </ul> */}
            <div className="px-5">
              <h6 className="card text-white bg-black px-2 py-2">PIN</h6>
            </div>

            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="date"
                placeholder="Search"
                aria-label="Search"
              />

              <a class="px-3" type="submit">
                <MdMailOutline size={24} style={{ color: "gray" }} />{" "}
              </a>
              <a class="px-3" type="submit">
                <IoSearchSharp size={24} style={{ color: "gray" }} />{" "}
              </a>
              <a class="px-3" type="submit">
                <MdMailOutline size={24} style={{ color: "gray" }} />{" "}
              </a>
              <a class="px-3" type="submit">
                <FaRegBell size={24} style={{ color: "gray" }} />{" "}
              </a>
              <a class="px-3" type="submit">
                <FaRegCircleUser size={24} style={{ color: "gray" }} />{" "}
              </a>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarScreen;
