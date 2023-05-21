import React, { useEffect, useState } from "react";
import { readJobDetail } from "../../axios/job";
import { useLocation, useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { JobDetail, MessageDetail } from "./DetailPages";

const DetailPage = () => {
  const [title, setTitle] = useState();
  const [detailPage, setDetailPage] = useState();

  const location = useLocation();
  const navigate = useNavigate();
  // const params = useParams();

  const itemDetailHandler = (id) => {
    switch (location.state.prevPath) {
      case "/dashboard/jobs":
        readJobDetail(id, (result) => {
          setTitle("Job Detail");
          setDetailPage(<JobDetail data={result}></JobDetail>);
        });
        break;

      // TODO: nerusin buat detail lainnya
      case "/dashboard/messages":
        setTitle("Message Conversation");
        setDetailPage(<MessageDetail data={id}></MessageDetail>);
        break;

      case "/dashboard/users":
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    try {
      const id = location.state.id;
      itemDetailHandler(id);
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  }, []);

  return (
    <>
      {detailPage && (
        <div className="container">
          <div className="row">
            {/* content */}
            <div className="col">
              <div className="dashboard-content">
                <div className="row align-items-center border-bottom ">
                  <div className="col-md-auto">
                    <h5
                      className="btn btn-circle"
                      onClick={() => {
                        navigate(-1);
                      }}
                    >
                      <IconContext.Provider value={{ size: "2rem" }}>
                        <BsFillArrowLeftCircleFill />
                      </IconContext.Provider>
                    </h5>
                  </div>
                  <div className="col">
                    <h5 className="fw-bold lh-lg">{title}</h5>
                  </div>
                </div>
                {detailPage}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailPage;
