import React from "react";
import { Link } from "react-router-dom";

const CreateCategory = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {/* sidebar */}
          <div className="col-md-3"></div>

          <div className="col-md">
            <div className="dashboard-content">
              <div className="p-3 my-3 rounded-4 bg-white">
                <h3 className="mb-4 ms-3 fw-bold">New Category</h3>
                <form>
                  <div class="row justify-content-between m-2  mb-3">
                    <div class="col-md">
                      <label for="exampleFormControlInput1" class="form-label fw-bold" />
                      Job title
                      <br />
                      <small className="text-secondary">A job title must describe one position only</small>
                    </div>
                    <div class="col-md">
                      <input type="text" class="form-control border border-2" id="exampleFormControlInput1" placeholder="e.g. 'UX Design'" required />
                    </div>
                  </div>
                  <hr />

                  <div class="row justify-content-between m-2  mb-3">
                    <div class="col-md">
                      <Link to="/dashboard/category" className="btn btn-outline-primary w-100 fw-bold">
                        Cancel
                      </Link>
                    </div>
                    <div class="col-md">
                      <button className="btn btn-primary w-100 fw-bold">Publish</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCategory;
