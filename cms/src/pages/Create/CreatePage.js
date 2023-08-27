import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import MessageCreate from "./CreatePages/MessageCreate";

const CreatePage = () => {
  const [title, setTitle] = useState();
  const [createPage, setCreatePage] = useState();

  const location = useLocation();
  const navigate = useNavigate();

  const itemCreateHandler = useCallback(() => {
    switch (location.state.prevPath) {
      case "/dashboard/messages":
        setTitle(`Create new chat`);
        setCreatePage(<MessageCreate></MessageCreate>);
        break;

      case "/dashboard/category":
        break;

      default:
        break;
    }
  }, [location]);

  useEffect(() => {
    try {
      itemCreateHandler();
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  }, [itemCreateHandler, location, navigate]);

  return (
    <>
      {createPage && (
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
                {createPage}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePage;
