
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import PostJob from "./PostJob";

const YourPost = () => {
  return (
    <>
      <Navbar />
      <PostJob />

      {/* <div className="container">
        <div className="row"> */}
      {/* sidebar */}
      {/* <div className="col-md-3"></div> */}

      {/* content */}
      {/* <div className="col-md">
            <div className="dashboard-content">
              <div className="p-3 my-3 rounded-4 bg-white">
                <div class="row justify-content-between m-2 lh-lg mb-3">
                  <div class="col-4">
                    <h2 className="fw-bold"> Data Table</h2>
                  </div>
                  <div class="col-md-4 text-end">
                    <Link to="/post-job" className="btn btn-default btn-primary fw-bold">
                      +Post Job
                    </Link>
                  </div>
                </div>
                <div className="m-2">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Job title</th>
                        <th scope="col">Sallary</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Web Design</td>
                        <td>Otto</td>
                        <td>
                          <div class="d-inline p-1">
                            <small className="text-bg-success text-white p-1 rounded-4 px-3 fw-bold lh-lg">Edit</small>
                          </div>
                          <div class="d-inline p-1">
                            <small className="text-bg-danger text-white p-1 rounded-4 px-3 fw-bold lh-lg">Delete</small>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default YourPost;
