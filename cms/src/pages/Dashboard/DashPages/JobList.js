import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiEdit, FiTrash, FiCalendar, FiDollarSign, FiArchive, FiInfo } from "react-icons/fi";
import { BsInfoCircle, BsArrowRight } from "react-icons/bs";
import { readJob } from "../../../axios/job";
import { dateFormat } from "../../../helpers";

const JobList = () => {
  const [jobsList, setJobsList] = useState([]);

  const location = useLocation();

  const deleteHandler = (id) => {
    deleteJob(id);
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
            <div>
              <h5 className="fw-bold border-bottom lh-lg">Job Listings</h5>
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
                                <small className={`text-white rounded-4 px-3 py-1 fw-bold btn btn-sm ${Date.parse(item.dueDate) < Date.now() ? "text-bg-danger" : "text-bg-info"}`}>{dateFormat(item.dueDate)}</small>
                              </td>
                              <td>
                                {item.status ? (
                                  <small className="rounded-4 px-3 py-1 text-bg-success fw-bold btn btn-sm">Applicant accepted</small>
                                ) : (
                                  <small className="rounded-4 px-3 py-1 text-bg-warning fw-bold btn btn-sm">No applicant accepted</small>
                                )}
                              </td>
                              <td>
                                <div className="row justify-content-center lh-lg">
                                  <div className="col-md-auto">
                                    <button className="text-bg-danger text-white p-1 rounded-4 px-3 fw-bold btn btn-sm" onClick={() => deleteHandler(item.id)}>
                                      Delete
                                    </button>
                                  </div>
                                  <div className="col-md-auto">
                                    <Link
                                      to={`/dashboard/detail`}
                                      state={{
                                        prevPath: location.pathname,
                                        id: item.id,
                                      }}
                                      className="text-bg-primary text-white p-1 rounded-4 px-3 fw-bold btn btn-sm"
                                      style={{ fontSize: "smaller" }}
                                    >
                                      Detail
                                    </Link>
                                  </div>
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
