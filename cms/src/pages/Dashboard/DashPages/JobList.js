import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { readJob, deleteJob } from "../../../axios/job";
import { dateFormat } from "../../../helpers";

const JobList = () => {
  const [jobsList, setJobsList] = useState([]);

  const location = useLocation();

  const deleteHandler = (id) => {
    deleteJob(id, (result) => {
      if (result) {
        window.location.reload();
      }
    });
  };

  useEffect(() => {
    readJob((result) => {
      setJobsList(result.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {/* sidebar */}
        <div className="col-md-3"></div>

        {/* content */}
        <div className="col-md">
          <div className="dashboard-content">
            <div className="p-3 my-3 rounded-4 bg-white">
              <div class="row justify-content-between m-2 lh-lg mb-3">
                <div class="col-4">
                  <h2 className="fw-bold">Job Listings</h2>
                </div>
                <div class="col-md-4 text-end">
                  <Link
                    to="/post"
                    className="btn btn-default btn-primary fw-bold"
                  >
                    +New Job
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
                          <th scope="col">Last Apply Date</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody className="align-middle">
                        {jobsList.map((item, id) => {
                          return (
                            <tr key={item.id}>
                              <th scope="row">{id + 1}</th>
                              <td className="fw-bold">{item.name}</td>
                              <td>
                                <small
                                  className={`text-white rounded-4 px-3 py-1 fw-bold btn btn-sm ${
                                    Date.parse(item.dueDate) < Date.now()
                                      ? "text-bg-danger"
                                      : "text-bg-info"
                                  }`}
                                >
                                  {dateFormat(item.dueDate)}
                                </small>
                              </td>
                              <td>
                                {item.status ? (
                                  <small className="rounded-4 px-3 py-1 text-bg-success fw-bold btn btn-sm">
                                    Applicant accepted
                                  </small>
                                ) : (
                                  <small className="rounded-4 px-3 py-1 text-bg-warning fw-bold btn btn-sm">
                                    No applicant accepted
                                  </small>
                                )}
                              </td>
                              <td>
                                <div class="dropdown">
                                  <button
                                    class="text-bg-primary text-white p-1 rounded-4 px-3 fw-bold btn btn-sm dropdown-toggle"
                                    type="button"
                                    id="detailDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    More
                                  </button>
                                  <ul
                                    class="dropdown-menu"
                                    aria-labelledby="detailDropdown"
                                  >
                                    <li>
                                      <Link
                                        to={`/dashboard/detail`}
                                        state={{
                                          prevPath: location.pathname,
                                          id: item.id,
                                        }}
                                        className="dropdown-item"
                                      >
                                        Open Detail
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to={`/dashboard/edit`}
                                        state={{
                                          prevPath: location.pathname,
                                          id: item.id,
                                        }}
                                        className="dropdown-item"
                                      >
                                        Edit this Job
                                      </Link>
                                    </li>
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        onClick={() => deleteHandler(item.id)}
                                      >
                                        Delete this Job
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
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

export default JobList;
