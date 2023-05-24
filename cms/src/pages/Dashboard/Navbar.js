import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsUbuntu, BsGrid1X2, BsArchive, BsCardChecklist, BsCheck2Square, BsFolderCheck, BsFolder2Open } from "react-icons/bs";
import { FiArchive, FiGrid, FiExternalLink, FiBell } from "react-icons/fi";

const Navbar = () => {
  const location = useLocation();

  const logoutHandler = () => {
    localStorage.removeItem("access_token");

    window.location.replace("/");
  };

  return (
    <>
      {/* SideBar */}
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <nav className="navbar-left fixed-right">
              <h3 className="ps-4 mt-3 mb-4 fw-bold text-white">
                <BsUbuntu className="me-2"></BsUbuntu>GigGenie
              </h3>
              <ul className="menu-list">
                <li className={location.pathname === "/dashboard" ? "active" : ""}>
                  <Link to="/dashboard" activeclassname="active">
                    <BsGrid1X2 className="fs-5 me-2"></BsGrid1X2> Dashboard
                  </Link>
                </li>
                <li className={location.pathname === "/post" ? "active" : ""}>
                  <Link to="/post" activeclassname="active">
                    <BsArchive className="fs-5 me-2"></BsArchive> Post Job
                  </Link>
                </li>
                <li className={location.pathname === "/dashboard/category" ? "active" : ""}>
                  <Link to="/dashboard/category" activeclassname="active">
                    <BsCardChecklist className="fs-5 me-2"></BsCardChecklist> Category
                  </Link>
                </li>
                <li className={location.pathname === "/dashboard/category" ? "active" : ""} hidden>
                  <Link to="/dashboard/createcategory" activeclassname="active">
                    <BsCardChecklist className="fs-5 me-2"></BsCardChecklist> Category
                  </Link>
                </li>
                <li className={location.pathname === "/dashboard/jobs" ? "active" : ""}>
                  <Link to="/dashboard/jobs">
                    <BsFolder2Open className="fs-5 me-2" /> Jobs Lists
                  </Link>
                </li>
                <li className={location.pathname === "/dashboard/applicants" ? "active" : ""}>
                  <Link to="/dashboard/applicants">
                    <BsFolderCheck className="fs-5 me-2" /> Applicants Lists
                  </Link>
                </li>
                {/* <li>
                  <Link to="/post" activeClassName="active">
                    <FiSettings className="fs-5 me-2"></FiSettings> Settings
                  </Link>
                </li> */}
              </ul>
            </nav>
          </div>

          <div className="col-md">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-warning">
              <div className="container border-bottom lh-base">
                <Link className="navbar-brand " to="/">
                  <span className="fs-3 fw-bold">Welcome to Dashboard</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link to="/" className="btn btn-sm fw-bold mt-1 rounded-3 bg-white shadow-sm m-2" title="Homepage">
                        <FiExternalLink className="fs-5" />
                      </Link>
                    </li>
                    {/* <li className="nav-item ">
                      <button type="button" className="btn btn-sm mt-1 fw-bold position-relative shadow-sm bg-white rounded-3" to="#" title="Notification">
                        <FiBell className="text-dark fs-5" />
                        <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                          <span className="visually-hidden">New alerts</span>
                        </span>
                      </button>
                    </li> */}

                    <div>
                      <span className="fs-4 mx-4">|</span>
                    </div>

                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle fw-bold" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        JohnDoe
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="/dashboard">
                            Dashboard
                          </Link>
                        </li>
                        <hr />
                        <li>
                          <button
                            className="dropdown-item fw-bold"
                            onClick={() => {
                              logoutHandler();
                            }}
                          >
                            Sign out
                          </button>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
