import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="pb-2">
        <nav className="navbar fixed-top navbar-expand-lg navbar-warning bg-white border-bottom">
          <div className="container">
            <Link className="navbar-brand" to="#">
              <span className="fs-4 fw-bold">GigGenie</span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-5 ">
                <li className="nav-item ">
                  <Link className="nav-link active navigation" aria-current="page" to="#">
                    Find Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link navigation" to="#">
                    Features
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link navigation" to="#">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link navigation" to="#">
                    Register
                  </Link>
                </li>

                <div>
                  <span className="fs-4 mx-4">|</span>
                </div>

                <li className="nav-item ">
                  <Link className="btn btn-sm btn-info mt-1 text-white fw-bold" to="#">
                    Employers / Post Job
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
