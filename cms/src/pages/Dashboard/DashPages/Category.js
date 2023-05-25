import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { readCategory, deleteCategory } from "../../../axios/category";
import { useNavigate } from "react-router-dom";
import LoadData from "../../../helpers/LoadData";

const Category = () => {
  const [categories, setCategories] = useState([]);

  const location = useLocation();

  const deleteHandler = (id) => {
    deleteCategory(id);
  };

  useEffect(() => {
    readCategory((result) => {
      setCategories(result.data);
    });
  }, []);

  return (
    <>
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
                    <h2 className="fw-bold"> Category Table</h2>
                  </div>
                  <div class="col-md-4 text-end">
                    <Link to="/dashboard/createcategory" className="btn btn-default btn-primary fw-bold">
                      +Category
                    </Link>
                  </div>
                </div>
                <div className="m-2">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        {/* <th scope="col">Sallary</th> */}
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((item, id) => {
                        return (
                          <tr key={item.id}>
                            <th scope="row">{id + 1}</th>
                            <td className="fw-bold">{item.name}</td>

                            <td>
                              <div class="d-inline p-1">
                                <Link
                                  to={`/dashboard/edit`}
                                  state={{
                                    prevPath: location.pathname,
                                    id: item.id,
                                  }}
                                  className="btn btn-sm btn-warning rounded-4"
                                >
                                  Edit
                                </Link>
                              </div>
                              <div class="d-inline p-1">
                                <button className="btn btn-sm btn-danger rounded-4" onClick={() => deleteHandler(item.id)}>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
