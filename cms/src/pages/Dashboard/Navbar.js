import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsBell, BsUbuntu } from "react-icons/bs";
import { FiArchive, FiGrid } from "react-icons/fi";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("/");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };
  return (
    <>
      {/* SideBar */}
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <nav className="navbar-left fixed-right">
              <h3 className="ps-4 mt-3 mb-4 fw-bold">
                <BsUbuntu className="me-2"></BsUbuntu>GigGenie
              </h3>
              <ul className="menu-list">
                <li className={activeMenu === "dashboard" ? "active" : ""}>
                  <a href="/dashboard" onClick={() => handleMenuClick("dashboard")}>
                    <FiGrid className="fs-5 me-2" />
                    Dashboard
                  </a>
                </li>
                <li className={activeMenu === "post" ? "active" : ""}>
                  <a href="/post" onClick={() => handleMenuClick("post")}>
                    <FiArchive className="fs-5 me-2" /> Post Job
                  </a>
                </li>
                {/* <li>
                  <NavLink exact to="/dashboard" activeClassName="active">
                    <FiGrid className="fs-5 me-2"></FiGrid> Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/post" activeClassName="active">
                    <FiArchive className="fs-5 me-2"></FiArchive> Post Job
                  </NavLink>
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
                    <li className="nav-item ">
                      <button type="button" className="btn btn-sm mt-1 fw-bold position-relative border border-1 rounded-3" to="#">
                        <BsBell className="text-dark fs-6"></BsBell>
                        <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                          <span class="visually-hidden">New alerts</span>
                        </span>
                      </button>
                    </li>

                    <div>
                      <span className="fs-4 mx-4">|</span>
                    </div>
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle fw-bold" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        JohnDoe
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="#">
                            My Profile
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/dashboard-user">
                            Setting
                          </Link>
                        </li>
                        <hr />
                        <li>
                          <Link className="dropdown-item fw-bold" to="#">
                            Sign out
                          </Link>
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
