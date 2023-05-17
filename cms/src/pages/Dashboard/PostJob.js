import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const PostJob = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row">
          {/* sidebar */}
          <div className="col-md-3"></div>

          <div className="col-md">
            <div className="dashboard-content">
              <div className="p-3 my-3 rounded-4 bg-white">
                <h2 className="mb-4 ms-3">Create Job</h2>
                <form>
                  <div class="row justify-content-between m-2  mb-3">
                    <div class="col-md">
                      <label for="exampleFormControlInput1" class="form-label fw-bold">
                        Job title
                      </label>{" "}
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
                      <label for="exampleFormControlInput1" class="form-label fw-bold">
                        Job description
                      </label>{" "}
                      <br />
                      <small className="text-secondary">Provide a short description about the job. Keep it short and to the point.</small>
                    </div>
                    <div class="col-md">
                      <textarea class="form-control border border-2" id="exampleFormControlTextarea1" rows="3" placeholder="Description..." required />
                    </div>
                  </div>
                  <hr />

                  <div class="row justify-content-between m-2  mb-3">
                    <div class="col-md">
                      <label for="exampleFormControlInput1" class="form-label fw-bold">
                        Sallary
                      </label>{" "}
                      <br />
                      <small className="text-secondary">Choose how you prefer to pay for this job</small>
                    </div>
                    <div class="col-md">
                      <input type="text" class="form-control border border-2" id="exampleFormControlTextarea1" rows="3" required />
                    </div>
                  </div>
                  <hr />

                  <div class="row justify-content-between m-2  mb-3">
                    <div class="col-md">
                      <button className="btn btn-outline-primary w-100 fw-bold">Cancel</button>
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

export default PostJob;
