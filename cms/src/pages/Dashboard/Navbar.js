import React from "react";
import { Link } from "react-router-dom";
import { BsGrid, BsBell, BsArrowRight } from "react-icons/bs";
import { FiEdit, FiTrash } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
        </div>
      </div>

      {/* SideBar */}
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <nav className="navbar-left fixed-right">
              <ul className="menu-list">
                <li>
                  <a href="/">
                    {" "}
                    <BsGrid className="fs-5 me-2"></BsGrid> Dashboard
                  </a>
                </li>
                <li>
                  <a href="/tentang">Tentang</a>
                </li>
                <li>
                  <a href="/layanan">Layanan</a>
                </li>
                <li>
                  <a href="/kontak">Kontak</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-md">
            {/* Navbar */}
            <nav className="navbar fixed-top navbar-expand-lg navbar-warning mx-5">
              <div className="container-fluid">
                <Link className="navbar-brand text-center" to="/">
                  <span className="fs-3 fw-bold">GigGenie</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item ">
                      <button type="button" className="btn btn-sm btn-light mt-1 fw-bold position-relative" to="#">
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

            {/*  */}
            <div className="dashboard-content">
              <div>
                <h5 className="fw-bold border-bottom lh-lg">Hello, JohnDoe!</h5>
              </div>
              <div className="p-3 my-3 rounded-4 bg-white">
                <div class="row justify-content-between m-2 border-bottom lh-lg">
                  <div class="col-4">
                    <Link to="" className="icon-link">
                      Your Postings
                    </Link>
                  </div>
                  <div class="col-4 text-end">
                    <Link to="" className="icon-link icon-link-hover">
                      All Job Postings <BsArrowRight></BsArrowRight>
                    </Link>
                  </div>
                </div>
                {/* <div id="post" className="p-3">
                  <div class="row justify-content-between">
                    <div class="col-4 fw-bold">Ux Designer Project Figma</div>
                    <div class="col-4">One of two columns</div>
                  </div>
                </div> */}

                <div id="post" className="p-3">
                  <div className="row">
                    <div className="col-md-7 fs-5 fw-bold">
                      <span>We need ui/ux design project figma</span>
                    </div>
                    <div className="col-md-4 text-center px-5 mx-2">
                      <div class="d-inline p-2 text-bg-white me-2 rounded-4 shadow-sm" title="Edit">
                        <FiEdit />
                      </div>
                      <div class="d-inline p-2 text-bg-white  me-2  rounded-4 shadow-sm" title="Delete">
                        <FiTrash />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
