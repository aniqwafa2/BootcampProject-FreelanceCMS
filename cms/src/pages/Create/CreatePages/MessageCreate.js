import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getIdFromToken } from "../../../helpers";
import { readUser } from "../../../axios/user";
import { postMessage } from "../../../axios/message";

const MessageCreate = () => {
  const [userList, setUserList] = useState([]);
  const [messageForm, setMessageForm] = useState();

  const navigate = useNavigate();

  const sendFormHandler = () => {
    postMessage(messageForm, (result) => {
      if (result) {
        window.location.replace("/dashboard/messages");
      }
    });
  };

  useEffect(() => {
    readUser((result) => {
      const data = result.data;
      const filtered = data.filter((item) => item.id !== getIdFromToken());
      setUserList(filtered);
    });
    setMessageForm({ senderId: getIdFromToken() });
  }, []);

  console.log(messageForm);

  return (
    <div className="container px-5">
      <div className="row">
        <div className="col-md">
          <div className="dashboard-content">
            <div className="p-3 my-3 rounded-4 bg-white">
              {/* <form> */}
              <div className="row justify-content-between m-2  mb-3">
                <div className="col-md">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label fw-bold"
                  />
                  Recipient
                  <br />
                  <small className="text-secondary">
                    Choose recipient contact here.
                  </small>
                </div>
                <div className="col-md">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) =>
                      setMessageForm({
                        ...messageForm,
                        recipientId: e.target.value,
                      })
                    }
                  >
                    <option disabled selected hidden value="">
                      Select contact
                    </option>
                    {userList.length > 0 &&
                      userList.map((item) => {
                        return (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>
              <hr />

              <div className="row justify-content-between m-2  mb-3">
                <div className="col-md">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label fw-bold"
                  />
                  Message Body
                  <br />
                  <small className="text-secondary">
                    Write your message here.
                  </small>
                </div>
                <div className="col-md">
                  <textarea
                    className="form-control border border-2"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Description..."
                    maxLength="500"
                    required
                    onChange={(e) =>
                      setMessageForm({
                        ...messageForm,
                        messageContent: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <hr />

              <div className="row justify-content-between m-2  mb-3">
                <div className="col-md">
                  <button
                    className="btn btn-outline-primary w-100 fw-bold"
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    Cancel
                  </button>
                </div>
                <div className="col-md">
                  <button
                    className="btn btn-primary w-100 fw-bold"
                    onClick={() => sendFormHandler()}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCreate;
