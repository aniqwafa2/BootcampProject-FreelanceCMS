import React, { useEffect, useState } from "react";
import { dateFormat, priceFormat } from "../../../helpers";
import {
  acceptApplicant,
  readApplicantByJob,
  readApplicantDetail,
} from "../../../axios/applicant";

const JobDetail = (props) => {
  const [applicantList, setApplicantList] = useState([]);
  const [acceptedApply, setAcceptedApply] = useState();

  const appplicantHandler = () => {
    if (props.data.status) {
      readApplicantDetail(props.data.id, (result) => {
        setAcceptedApply(result);
      });
    } else {
      readApplicantByJob(props.data.id, (result) => {
        setApplicantList(result.data);
      });
    }
  };

  const acceptHandler = (jobId, userId) => {
    acceptApplicant(jobId, userId, (result) => {
      window.location.reload();
    });
  };

  useEffect(() => {
    appplicantHandler();
  }, []);

  console.log(acceptedApply);

  return (
    <div className="row">
      <div className="col-md-5">
        <div className="p-3 my-3 rounded-4 bg-white">
          <h5 className="card-subtitle mb-2 text-body-secondary fw-bold">
            {props.data.name}
          </h5>
          <small className="card-text text-secondary fs-6">
            Posted in {dateFormat(props.data.createdAt)}
          </small>

          <div className="text-center mt-2 lh-sm">
            <div className="row">
              <div className="col me-2">
                <div className="py-2 border border-2 rounded-4 fw-bold">
                  Rp. {priceFormat(props.data.price)} <br />
                  <span className="text-secondary fs-6 mono">Salary</span>
                </div>
              </div>
              <div className="col me-2">
                <div className="py-2 border border-2 rounded-4 fw-bold">
                  {dateFormat(props.data.dueDate)} <br />
                  <span className="text-secondary fs-6 mono">
                    Last Apply Date
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="card-text text-container text-secondary lh-sm mt-2 display-endline">
            {props.data.description}
          </p>

          {props.data.file ? (
            <div className="row row-cols-auto small fw-bold">
              <div className="card-text text-secondary fs-6">
                Example/Support File:
              </div>
              <a
                className="btn btn-sm rounded-4 fw-bold bg-light text-secondary"
                href={props.data.file}
                target="_blank"
                rel="noreferrer noopener"
                download
                // download={props.data.file.split("/")[3]}
              >
                Download
              </a>
            </div>
          ) : (
            <></>
          )}

          <div className="row row-cols-auto small fw-bold text-secondary">
            <div className="card-text text-secondary fs-6">Category:</div>
            <div className="col lh-sm m-1 ms-2 rounded-4 bg-light">
              {props.data.category.name}
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-7">
        <div className="p-3 my-3 rounded-4 bg-white">
          {props.data.status ? (
            acceptedApply ? (
              <div>
                <div className="row justify-content-between m-2 lh-lg mb-3">
                  <h4 className="fw-bold"> Accepted applicant of this job</h4>
                </div>
                <h5 className="card-subtitle mb-2 text-body-secondary fw-bold">
                  Name: {acceptedApply.user.name}
                </h5>
                <small className="card-text text-secondary fs-6">
                  Email: {acceptedApply.user.email}
                </small>

                <p className="card-text text-container text-secondary lh-sm mt-2 display-endline">
                  Skill: {acceptedApply.user.userProfile.skill}
                </p>
              </div>
            ) : (
              <></>
            )
          ) : applicantList.length > 0 ? (
            <div>
              <div className="row justify-content-between m-2 lh-lg mb-3">
                <h4 className="fw-bold"> Applicant list of this job</h4>
              </div>
              <div className="m-2">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Skill</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applicantList.map((item, id) => {
                      return (
                        // TODO: ndaktau ini keynya oke engga
                        <tr key={id + 1}>
                          <th scope="row">{id + 1}</th>
                          <td>{item.user.name}</td>
                          <td>{item.user.email}</td>
                          <td>{item.user.userProfile.skill}</td>
                          <td>
                            <div className="d-inline p-1">
                              <button
                                className="text-bg-success text-white py-1 rounded-4 px-3 fw-bold btn btn-sm"
                                onClick={() =>
                                  acceptHandler(item.jobId, item.userId)
                                }
                              >
                                Accept
                              </button>
                            </div>
                            <div className="d-inline y1">
                              <button className="text-bg-danger text-white py-1 rounded-4 px-3 fw-bold btn btn-sm">
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="row justify-content-between m-2 lh-lg mb-3">
              <h4 className="fw-bold"> No applicant for this job</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
