import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fileUrl } from "../../../config/config";
import { dateFormat, priceFormat, getIdFromToken } from "../../../helpers";
import {
  acceptApplicant,
  readApplicantByJob,
  readApplicantDetail,
} from "../../../axios/applicant";
import { postMessage } from "../../../axios/message";

const JobDetail = (props) => {
  const [applicantList, setApplicantList] = useState([]);
  const [acceptedApply, setAcceptedApply] = useState();
  const [messageBody, setMessageBody] = useState();

  const location = useLocation();
  const navigate = useNavigate();

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
    acceptApplicant(jobId, userId);
  };

  const sendMessageHandler = (senderId, recipientId) => {
    const data = {
      senderId,
      recipientId,
      messageContent: messageBody.messageContent,
    };

    postMessage(data, (result) => {
      if (result) {
        window.location.replace("/dashboard/messages");
      }
    });
  };

  useEffect(() => {
    appplicantHandler();
  }, []);

  return (
    <div className="row">
      <div className="col-md-5">
        <div className="p-3 my-3 rounded-4 bg-white">
          <h4 className="card-subtitle mb-2 text-body-secondary fw-bold">
            {props.data.name}
          </h4>
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

          {props.data.file && (
            <div className="row row-cols-auto small fw-bold">
              <div className="card-text text-secondary fs-6">
                Example/Support File:
              </div>
              <a
                className="btn btn-sm rounded-4 fw-bold bg-light text-secondary"
                href={`${fileUrl}/${props.data.file}`}
                target="_blank"
                rel="noreferrer noopener"
                download
              >
                Download
              </a>
            </div>
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
            acceptedApply && (
              <div className="m-2">
                <div className="row justify-content-between lh-lg mb-3">
                  <div className="col-md-auto">
                    <h4 className="fw-bold">Accepted applicant of this job</h4>
                  </div>
                  <div className="col-md-auto">
                    <button
                      className="btn btn-sm text-bg-secondary rounded-4 fw-bold"
                      data-bs-toggle="modal"
                      data-bs-target="#chatMessageModal"
                    >
                      Message this Applicant
                    </button>
                  </div>
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

                <div
                  className="modal fade"
                  id="chatMessageModal"
                  tabIndex="-1"
                  data-bs-backdrop="static"
                  aria-labelledby="MessageModal"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          sendMessageHandler(
                            getIdFromToken(),
                            acceptedApply.user.id
                          );
                        }}
                      >
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="MessageModal">
                            Send message to: {acceptedApply.user.name}
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={() => setMessageBody()}
                          ></button>
                        </div>
                        <div className="modal-body">
                          <textarea
                            type="text"
                            className="form-control"
                            placeholder="Type your message body"
                            rows="3"
                            maxLength="500"
                            value={
                              messageBody ? messageBody.messageContent : ""
                            }
                            onChange={(e) =>
                              setMessageBody({
                                ...messageBody,
                                messageContent: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className="modal-footer">
                          <button
                            type="submit"
                            className="btn btn-sm rounded-4 fw-bold btn-success"
                          >
                            Send
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm rounded-4 fw-bold btn-danger"
                            data-bs-dismiss="modal"
                            onClick={() => setMessageBody()}
                          >
                            Close/Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )
          ) : applicantList.length > 0 ? (
            <div>
              <div className="row justify-content-between m-2 lh-lg mb-3">
                <h4 className="fw-bold"> Applicant list of this job</h4>
              </div>
              <div className="m-2">
                <table className="table text-center">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Skill</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody className="align-middle">
                    {applicantList.map((item, id) => {
                      return (
                        <tr key={id + 1}>
                          <th scope="row">{id + 1}</th>
                          <td>{item.user.name}</td>
                          <td>{item.user.email}</td>
                          <td>{item.user.userProfile.skill}</td>
                          <td>
                            <button
                              className="text-bg-success text-white py-1 rounded-4 px-3 fw-bold btn btn-sm"
                              onClick={() =>
                                acceptHandler(item.jobId, item.userId)
                              }
                            >
                              Accept
                            </button>
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
