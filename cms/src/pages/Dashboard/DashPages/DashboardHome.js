import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiGrid, FiArchive, FiUser } from "react-icons/fi";
import { BsArchive, BsGrid } from "react-icons/bs";
import { readUser } from "../../../axios/user";
import { readJob } from "../../../axios/job";
import { readCategory } from "../../../axios/category";

const DashboardHome = () => {
  const [userCounter, setUserCounter] = useState("loading...");
  const [jobCounter, setjobCounter] = useState("loading...");
  const [catCounter, setCatCounter] = useState("loading...");

  useEffect(() => {
    readUser((result) => setUserCounter(result.data.length));
    readJob((result) => setjobCounter(result.data.length));
    readCategory((result) => setCatCounter(result.data.length));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {/* sidebar */}
        <div className="col-md-3"></div>

        {/* content */}
        <div className="col-md">
          <div className="dashboard-content">
            <div id="widget">
              <div className="row">
                <div className="col-md-4 ">
                  <div className="card border border-0 rounded-3">
                    <div className="card-body">
                      <div className="card-title">
                        <div className="d-inline py-1 px-2 text-bg-danger rounded-2">
                          <FiArchive />
                        </div>
                        <div className="d-inline p-3 my-0 fw-bold h5 mb-0">
                          Total Jobs
                        </div>
                      </div>
                      <h6 className="card-subtitle text-body-secondary px-5 fs-4 fw-bold mb-0">
                        {jobCounter}
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="card border border-0 rounded-3">
                    <div className="card-body">
                      <div className="card-title">
                        <div className="d-inline py-1 px-2 text-bg-success rounded-2">
                          <FiGrid />
                        </div>
                        <div className="d-inline p-3 my-0 fw-bold h5">
                          Total Categories
                        </div>
                      </div>
                      <h6 className="card-subtitle text-body-secondary px-5 fs-4 fw-bold">
                        {catCounter}
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="card border border-0 rounded-3">
                    <div className="card-body">
                      <div className="card-title">
                        <div className="d-inline py-1 px-2 text-bg-dark rounded-2">
                          <FiUser />
                        </div>
                        <div className="d-inline p-3 my-0 fw-bold h5">
                          Total Users
                        </div>
                      </div>
                      <h6 className="card-subtitle text-body-secondary px-5 fs-4 fw-bold">
                        {userCounter}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="dashboard-content">
                <div className="p-3 my-3 rounded-4 bg-white">
                  <div className="row justify-content-between m-2 lh-lg mb-3">
                    <div className="col-4">
                      <h2 className="fw-bold">Quick access</h2>
                    </div>
                  </div>
                  <div className="row mx-5 text-center">
                    <div className="col-md m-2 mx-4 rounded-4 bg-yellow">
                      <Link to="/post">
                        <span className="d-block py-1">
                          <BsArchive />
                        </span>
                        <span className="d-block pb-1 fw-bold">+Post Job</span>
                      </Link>
                    </div>
                    <div className="col-md m-2 mx-4 rounded-4 bg-yellow">
                      <Link to="/dashboard/createcategory">
                        <span className="d-block py-1">
                          <BsGrid />
                        </span>
                        <span className="d-block pb-1 fw-bold">+Category</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
