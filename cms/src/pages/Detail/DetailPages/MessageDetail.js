import React, { useEffect, useState } from "react";
import { getIdFromToken, dateFormatWithHour } from "../../../helpers";
import { postMessage, readMessageDetail } from "../../../axios/message";

const MessageDetail = (props) => {
  const [messageList, setMessageList] = useState([]);
  const [contactDetail, setContactDetail] = useState({});
  const [messageBody, setMessageBody] = useState();

  const contentHandler = () => {
    readMessageDetail(props.data, (result) => {
      if (result.contactId.recipientId !== getIdFromToken()) {
        setContactDetail(result.contactId.recipient);
      } else {
        setContactDetail(result.contactId.sender);
      }
      setMessageList(result.data);
    });
  };

  const sendMessageHandler = (senderId, recipientId) => {
    const data = {
      senderId,
      recipientId,
      messageContent: messageBody.messageContent,
    };
    postMessage(data, (result) => {
      if (result) {
        window.location.reload();
      }
    });
  };

  const messageDateFormat = (date) => {
    const formattedDate = `${new Date(
      date
    ).toLocaleDateString()} ${dateFormatWithHour(date)}`;

    return formattedDate;
  };

  useEffect(() => {
    contentHandler();
  }, []);

  // console.log(messageBody);

  return (
    <div className="row">
      <div className="col-md-5">
        <div className="p-3 my-3 rounded-4 bg-white">
          <h5 className="card-subtitle mb-2 text-body-secondary fw-bold">
            Send to: {contactDetail.name}
          </h5>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessageHandler(getIdFromToken(), contactDetail.id);
            }}
          >
            <div>
              <textarea
                type="text"
                className="form-control"
                placeholder="Type your message body"
                rows="3"
                maxLength="500"
                value={messageBody ? messageBody.messageContent : ""}
                onChange={(e) =>
                  setMessageBody({
                    ...messageBody,
                    messageContent: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="mt-2 col-sm-auto gap-2 text-end">
              <button
                type="submit"
                className="btn btn-sm rounded-4 fw-bold btn-success mx-2"
              >
                Send
              </button>
              <button
                type="button"
                className="btn btn-sm rounded-4 fw-bold btn-danger"
                onClick={() => setMessageBody()}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="col-md-7">
        <div
          className="p-3 my-3 rounded-4 bg-white overflow-auto hide-scrollbar"
          style={{ maxHeight: "80vh" }}
        >
          <div className="m-2 ">
            {messageList.map((item) => (
              <div
                key={item.id}
                className={`d-flex mb-3  justify-content-${
                  item.userId === getIdFromToken()
                    ? "end text-end"
                    : "start text-start"
                }`}
              >
                <div
                  className={`rounded p-2 rounded-3 ${
                    item.userId === getIdFromToken()
                      ? "bg-primary text-white"
                      : "bg-light"
                  }`}
                  style={{ maxWidth: "70%" }}
                >
                  <div className="fw-bold">{item.user.name}</div>
                  <div className="text-break">{item.messageContent}</div>
                  <div className="fw-lighter" style={{ fontSize: "12px" }}>
                    {messageDateFormat(item.createdAt)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageDetail;
