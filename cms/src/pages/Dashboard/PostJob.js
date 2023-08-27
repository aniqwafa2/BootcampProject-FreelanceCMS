import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { readCategory } from "../../axios/category";
import { createJob } from "../../axios/job";

const PostJob = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [form, setForm] = useState();
  const [formFile, setFormFile] = useState();

  const navigate = useNavigate();

  const sendFormHandler = () => {
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("price", form.price);
    formData.append("description", form.description);
    formData.append("dueDate", form.dueDate);

    if (form.categoryId !== null || form.categoryId !== "") {
      formData.append("categoryId", form.categoryId);
    }
    if (form.file !== null || form.file !== "") {
      formData.append("file", formFile);
    }

    createJob(formData, (result) => {
      if (result) {
        window.location.replace("/dashboard/jobs");
      }
    });
  };

  useEffect(() => {
    readCategory((result) => setCategoryList(result.data));
  }, []);

  return (
    <>
      {/* <Navbar /> */}

      <div className="container">
        <div className="row">
          {/* sidebar */}
          <div className="col-md-3"></div>

          <div className="col-md">
            <div className="dashboard-content">
              <div className="p-3 my-3 rounded-4 bg-white">
                <h3 className="mb-4 ms-3 fw-bold">Post a New Job</h3>

                <div className="row justify-content-between m-2  mb-3">
                  <div className="col-md">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label fw-bold"
                    />
                    Job title
                    <br />
                    <small className="text-secondary">
                      A job title must describe one position only
                    </small>

                  </div>
                  <div className="col-md">
                    <input
                      type="text"
                      className="form-control border border-2"
                      id="exampleFormControlInput1"
                      placeholder="e.g. 'UX Design'"
                      required
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
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
                    Job description
                    <br />
                    <small className="text-secondary">
                      Provide a short description about the job. Keep it short
                      and to the point.
                    </small>
                  </div>
                  <div className="col-md">
                    <textarea
                      className="form-control border border-2"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Description..."
                      required
                      onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                      }
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
                    Sallary
                    <br />
                    <small className="text-secondary">
                      Choose how you prefer to pay for this job
                    </small>
                  </div>
                  <div className="col-md">
                    <input
                      type="text"
                      className="form-control border border-2"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      required
                      onChange={(e) =>
                        setForm({ ...form, price: e.target.value })
                      }
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
                    Last Apply Date
                    <br />
                    <small className="text-secondary">
                      Choose last apply date for this job
                    </small>
                  </div>
                  <div className="col-md">
                    <input
                      type="date"
                      className="form-control border border-2"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      required
                      onChange={(e) =>
                        setForm({ ...form, dueDate: e.target.value })
                      }
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
                    Category
                    <br />
                    <small className="text-secondary">
                      Category for this jobs
                    </small>
                  </div>
                  <div className="col-md">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) =>
                        setForm({ ...form, categoryId: e.target.value })
                      }
                    >
                      <option disabled selected hidden value="">
                        Pilih opsi
                      </option>
                      {categoryList.length > 0 &&
                        categoryList.map((item) => {
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
                    Sample File
                    <br />
                    <small className="text-secondary">
                      example for this project
                    </small>
                  </div>
                  <div className="col-md">
                    <div className="mb-3">
                      <label
                        htmlFor="formFileMultiple"
                        className="form-label"
                      ></label>
                      <input
                        className="form-control"
                        type="file"
                        id="formFileMultiple"
                        onChange={(e) => setFormFile(e.target.files[0])}
                      />
                    </div>
                  </div>
                </div>

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
                      Publish
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostJob;
