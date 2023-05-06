import React from "react";
import { Link } from "react-router-dom";
import { BsBox, BsGrid, BsPeople } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <div className="col-3">
        <div className="d-flex flex-column flex-shrink-0 p-4 bg-light sidebar pt-5">
          <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <span className="fs-4 pb-3">Sidebar</span>
          </Link>

          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <Link to="#" className="nav-link active">
                <i className="bi bi-house"></i>
                <BsBox className="fs-5 me-2"></BsBox> Product
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link link-dark">
                <i className="bi bi-person"></i>
                <BsGrid className="fs-5 me-2"></BsGrid> Category
              </Link>
            </li>
            <li>
              <Link to="/users" className="nav-link link-dark">
                <i className="bi bi-gear"></i>
                <BsPeople className="fs-5 me-2"></BsPeople> User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
