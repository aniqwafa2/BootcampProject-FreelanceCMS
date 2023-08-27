import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { imageUrl } from "../../../config/config";
import { readMessage } from "../../../axios/message";
import {
  dateFormat,
  dateFormatWithHour,
  getIdFromToken,
} from "../../../helpers";

const MessageList = () => {
  const [messagesList, setMessagesList] = useState([]);

  const location = useLocation();

  const isCurrentDate = (date) => {
    const currentDate = new Date().getDate();

    if (new Date(date).getDate() === currentDate) {
      return dateFormatWithHour(date);
    }

    return dateFormat(date);
  };

  useEffect(() => {
    const tokenUID = getIdFromToken();

    readMessage(tokenUID, (result) => {
      setMessagesList(result.data);
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
                  <h2 className="fw-bold">Message Lists</h2>
                </div>
                <div class="col-md-4 text-end">
                  <Link
                    to="/dashboard/create"
                    state={{
                      prevPath: location.pathname,
                    }}
                    className="btn btn-default btn-primary fw-bold"
                  >
                    +New Chat
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
                          <th scope="col">Contact</th>
                          <th scope="col">Last Message</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody className="align-middle">
                        {messagesList.map((item, id) => {
                          return (
                            <tr key={item.id}>
                              <th scope="row">{id + 1}</th>
                              <td>
                                <div className="row-auto align-items-center justify-content-center">
                                  <div className="col-md-auto">
                                    <img
                                      className="img-fluid rounded-circle"
                                      alt=""
                                      width="50px"
                                      src={
                                        item.recipient.id !== getIdFromToken()
                                          ? item.recipient.userProfile.image
                                            ? `${imageUrl}/${item.recipient.userProfile.image}`
                                            : "https://via.placeholder.com/100"
                                          : item.sender.userProfile.image
                                          ? `${imageUrl}/${item.sender.userProfile.image}`
                                          : "https://via.placeholder.com/100"
                                      }
                                    ></img>
                                  </div>
                                  <div className="col-md-auto">
                                    <small className="rounded-4 px-3 py-1 fw-bold">
                                      {item.recipient.id !== getIdFromToken()
                                        ? item.recipient.name
                                        : item.sender.name}
                                    </small>
                                  </div>
                                </div>
                              </td>
                              <td
                                style={{ maxWidth: "15vh", overflow: "hidden" }}
                              >
                                <div className="col-sm-auto text-start align-items-center justify-content-between">
                                  <div>
                                    <small className="rounded-4 px-3 py-1 fw-bold ">
                                      {item.messageRecords.length > 0 && (
                                        <>
                                          {
                                            item.messageRecords[0]
                                              .messageContent
                                          }
                                        </>
                                      )}
                                    </small>
                                  </div>
                                  <div>
                                    <small className="rounded-4 px-3 py-1 fw-normal">
                                      {item.messageRecords.length > 0 && (
                                        <>
                                          {isCurrentDate(
                                            item.messageRecords[0].createdAt
                                          )}
                                        </>
                                      )}
                                    </small>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <Link
                                  to={`/dashboard/detail`}
                                  state={{
                                    prevPath: location.pathname,
                                    id: item.id,
                                  }}
                                  className="text-bg-primary text-white m-2 p-1 rounded-4 px-3 fw-bold btn btn-sm"
                                  style={{ fontSize: "smaller" }}
                                >
                                  Detail
                                </Link>
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

export default MessageList;
