import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { JobEdit, CategoryEdit } from "./EditPages";
import { readJobDetail } from "../../axios/job";
import { readCategoryDetail } from "../../axios/category";

const EditPage = () => {
  const [title, setTitle] = useState();
  const [editPage, setEditPage] = useState();

  const location = useLocation();
  const navigate = useNavigate();

  const itemEditHandler = useCallback(
    (id) => {
      switch (location.state.prevPath) {
        case "/dashboard/jobs":
          readJobDetail(id, (result) => {
            setTitle(`Editing Job: ${result.name}`);
            setEditPage(<JobEdit data={result}></JobEdit>);
          });
          break;

        case "/dashboard/category":
          readCategoryDetail(id, (result) => {
            setTitle(`Editing Category: ${result.name}`);
            setEditPage(<CategoryEdit data={result}></CategoryEdit>);
          });
          break;

        default:
          break;
      }
    },
    [location]
  );

  useEffect(() => {
    try {
      const id = location.state.id;
      itemEditHandler(id);
    } catch (error) {
      navigate("/");
    }
  }, [itemEditHandler, location, navigate]);

  return (
    <>
      {editPage && (
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
                {editPage}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditPage;
