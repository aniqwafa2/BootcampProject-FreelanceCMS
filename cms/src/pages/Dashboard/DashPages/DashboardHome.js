import React from "react";
import { Link } from "react-router-dom";
import { FiGrid, FiArchive, FiCheckSquare } from "react-icons/fi";
import { BsArchive, BsGrid } from "react-icons/bs";

const DashboardHome = () => {
  return (
    <div className="container">
      <div className="row">
        {/* sidebar */}
        <div className="col-md-3"></div>

        {/* content */}
        <div className="col-md">
          <div className="dashboard-content">
            {/* <div>
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
              </div> */}

            {/* <div className="col-md">
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
                            <small className="text-bg-info text-white rounded-4 px-3 py-1 fw-bold lh-lg">Otto</small>
                          </td>
                          <td>
                            <select className="form-select form-select-sm rounded-4 border-0 bg-warning fw-bold" aria-label=".form-select-sm example">
                              <option selected>status on</option>
                              <option value="1">accept</option>
                              <option value="2">reject</option>
                            </select>
                          </td>
                          <td>
                            <small className="text-bg-primary text-white m-2 p-1 rounded-4 px-3 fw-bold lh-lg">Detail</small>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>BackEnd Project Login/Register</td>
                          <td>
                            <small className="text-bg-info text-white rounded-4 px-3 py-1 fw-bold lh-lg">Thornton</small>
                          </td>
                          <td>
                            <select className="form-select form-select-sm rounded-4 border-0 bg-warning fw-bold" aria-label=".form-select-sm example">
                              <option selected>status on</option>
                              <option value="1">accept</option>
                              <option value="2">reject</option>
                            </select>
                          </td>
                          <td>
                            <small className="text-bg-primary text-white m-2 p-1 rounded-4 px-3 fw-bold lh-lg">Detail</small>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Design Logo</td>
                          <td>
                            <small className="text-bg-info text-white rounded-4 px-3 py-1 fw-bold lh-lg">LarrytheBird</small>
                          </td>
                          <td>
                            <select className="form-select form-select-sm rounded-4 border-0 bg-warning fw-bold" aria-label=".form-select-sm example">
                              <option selected>status on</option>
                              <option value="1">accept</option>
                              <option value="2">reject</option>
                            </select>
                          </td>
                          <td>
                            <small className="text-bg-primary text-white m-2 p-1 rounded-4 px-3 fw-bold lh-lg">Detail</small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div> */}

            <div id="widget">
              <div className="row">
                <div className="col-md-4 ">
                  <div className="card border border-0 rounded-3">
                    <div className="card-body">
                      <div className="card-title">
                        <div className="d-inline py-1 px-2 text-bg-danger rounded-2">
                          <FiArchive />
                        </div>
                        <div className="d-inline p-3 my-0 fw-bold h5 mb-0">Total Jobs</div>
                      </div>
                      <h6 className="card-subtitle text-body-secondary px-5 fs-4 fw-bold mb-0">99+</h6>
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
                        <div className="d-inline p-3 my-0 fw-bold h5">Total Category</div>
                      </div>
                      <h6 className="card-subtitle text-body-secondary px-5 fs-4 fw-bold">99+</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="card border border-0 rounded-3">
                    <div className="card-body">
                      <div className="card-title">
                        <div className="d-inline py-1 px-2 text-bg-dark rounded-2">
                          <FiCheckSquare />
                        </div>
                        <div className="d-inline p-3 my-0 fw-bold h5">Total Jobs List</div>
                      </div>
                      <h6 className="card-subtitle text-body-secondary px-5 fs-4 fw-bold">99+</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="dashboard-content">
                <div className="p-3 my-3 rounded-4 bg-white">
                  <div class="row justify-content-between m-2 lh-lg mb-3">
                    <div class="col-4">
                      <h2 className="fw-bold">Quick access</h2>
                    </div>
                  </div>
                  <div className="row mx-5 text-center">
                    <div className="col-md m-2 mx-4 rounded-4 bg-yellow">
                      <Link to="/post">
                        <span class="d-block py-1">
                          <BsArchive />
                        </span>
                        <span class="d-block pb-1 fw-bold">+Post Job</span>
                      </Link>
                    </div>
                    <div className="col-md m-2 mx-4 rounded-4 bg-yellow">
                      <Link to="/dashboard/createcategory">
                        <span class="d-block py-1">
                          <BsGrid />
                        </span>
                        <span class="d-block pb-1 fw-bold">+Category</span>
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
