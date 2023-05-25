import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateCategory } from "../../../axios/category";

const CategoryEdit = (props) => {
  const [loading, setloading] = useState(false);
  const [form, setForm] = useState();

  const navigate = useNavigate();

  const sendFormHandler = () => {
    updateCategory(props.data.id, form, (result) => {
      if (result) {
        window.location.replace("/dashboard/category");
      }
    });
  };

  useEffect(() => {
    if (props.data) {
      setForm(props.data);
    }
  }, []);

  return (
    <div className="container px-5">
      <div className="row">
        <div className="col-md">
          <div className="dashboard-content">
            <div className="p-3 my-3 rounded-4 bg-white">
              <div className="row justify-content-between m-2  mb-3">
                <div className="col-md">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label fw-bold"
                  />
                  Category title
                  <br />
                  <small className="text-secondary">A category title</small>
                </div>
                <div className="col-md">
                  <input
                    type="text"
                    className="form-control border border-2"
                    id="exampleFormControlInput1"
                    value={form ? form.name : ""}
                    placeholder="e.g. 'UX Design'"
                    required
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
              </div>
              <hr />

              <div className="row justify-content-between m-2  mb-3">
                <div className="col-md">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label fw-bold"
                  />
                  Category description
                  <br />
                  <small className="text-secondary">
                    Provide a short description about the category. Keep it
                    short and to the point.
                  </small>
                </div>
                <div className="col-md">
                  <textarea
                    className="form-control border border-2"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={form ? form.description : ""}
                    placeholder="Description..."
                    // required
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
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
                    Update
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

export default CategoryEdit;
