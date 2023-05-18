import React, { useEffect, useState } from "react";
import { readJobDetail } from "../../axios/job";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import JobDetail from "./DetailPages/JobDetail";

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
          setTitle("Job");
          setDetailPage(<JobDetail data={result}></JobDetail>);
        });
        break;

      // TODO: nerusin buat detail lainnya
      case "/dashboard/applicants":
        break;

      case "/dashboard/users":
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    const id = location.state.id;
    itemDetailHandler(id);
  }, []);

  return (
    <>
      {detailPage ? (
        <div className="container">
          <div className="row">
            {/* content */}
            <div className="col-md m-3">
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
                    <h5 className="fw-boldlh-lg">{title} Detail</h5>
                  </div>
                </div>
                <div className="p-3 my-3 rounded-4 bg-white">{detailPage}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default DetailPage;
