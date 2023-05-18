import React from "react";
import { Link } from "react-router-dom";
import {
  FiEdit,
  FiTrash,
  FiCalendar,
  FiDollarSign,
  FiArchive,
  FiInfo,
} from "react-icons/fi";
import { BsInfoCircle, BsArrowRight } from "react-icons/bs";

const DashboardHome = () => {
  return (
    <div className="container">
      <div className="row">
        {/* sidebar */}
        <div className="col-md-3"></div>

        {/* content */}
        <div className="col-md">
          <div className="dashboard-content">
            <div>
              <h5 className="fw-bold border-bottom lh-lg">Hello, JohnDoe!</h5>
            </div>
            <div className="p-3 my-3 rounded-4 bg-white">
              <div className="row justify-content-between m-2 border-bottom lh-lg">
                <div className="col-4">
                  <Link to="" className="icon-link">
                    Your Postings
                  </Link>
                </div>
                <div className="col-4 text-end">
                  <Link to="" className="icon-link icon-link-hover">
                    All Job Postings <BsArrowRight></BsArrowRight>
                  </Link>
                </div>
              </div>

              <div className="col-md">
                <div id="post" className="p-3">
                  <div className="row p-3">
                    <table className="table text-center">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Project</th>
                          <th scope="col">Freelance</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>We need ui/ux design project figma</td>
                          <td>
                            <small className="text-bg-info text-white rounded-4 px-3 py-1 fw-bold lh-lg">
                              Otto
                            </small>
                          </td>
                          <td>
                            <select
                              className="form-select form-select-sm rounded-4 border-0 bg-warning fw-bold"
                              aria-label=".form-select-sm example"
                            >
                              <option selected>status on</option>
                              <option value="1">accept</option>
                              <option value="2">reject</option>
                            </select>
                          </td>
                          <td>
                            <small className="text-bg-primary text-white m-2 p-1 rounded-4 px-3 fw-bold lh-lg">
                              Detail
                            </small>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>BackEnd Project Login/Register</td>
                          <td>
                            <small className="text-bg-info text-white rounded-4 px-3 py-1 fw-bold lh-lg">
                              Thornton
                            </small>
                          </td>
                          <td>
                            <select
                              className="form-select form-select-sm rounded-4 border-0 bg-warning fw-bold"
                              aria-label=".form-select-sm example"
                            >
                              <option selected>status on</option>
                              <option value="1">accept</option>
                              <option value="2">reject</option>
                            </select>
                          </td>
                          <td>
                            <small className="text-bg-primary text-white m-2 p-1 rounded-4 px-3 fw-bold lh-lg">
                              Detail
                            </small>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Design Logo</td>
                          <td>
                            <small className="text-bg-info text-white rounded-4 px-3 py-1 fw-bold lh-lg">
                              LarrytheBird
                            </small>
                          </td>
                          <td>
                            <select
                              className="form-select form-select-sm rounded-4 border-0 bg-warning fw-bold"
                              aria-label=".form-select-sm example"
                            >
                              <option selected>status on</option>
                              <option value="1">accept</option>
                              <option value="2">reject</option>
                            </select>
                          </td>
                          <td>
                            <small className="text-bg-primary text-white m-2 p-1 rounded-4 px-3 fw-bold lh-lg">
                              Detail
                            </small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
