import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const DashboardUser = () => {
  return (
    <>
      <Navbar></Navbar>

      {/* sidebar */}
      <div className="container pt-5">
        <div class="row mt-5">
          <div class="col-md-4">
            <div class="list-group sidebar-user ">
              <Link to="#" class="list-group-item list-group-item-action active" aria-current="true">
                General
              </Link>
              <Link to="/edit-profile" class="list-group-item list-group-item-action">
                Edit Profile
              </Link>
              <Link to="/skills" class="list-group-item list-group-item-action">
                Skills
              </Link>
            </div>
          </div>
          <div class="col-md-8">
            <form className="was-validated">
              <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example flex-grow-1" tabindex="0">
                <div class="d-flex justify-content-between">
                  <div className="lh-1">
                    <h4>General</h4>
                    <span className="fs-6 text-secondary mb-5">Update your username and manage your account</span>
                  </div>
                  <div className="mb-4 form-check">
                    <button className="btn btn-md btn-cancel me-3 fw-bold px-4 py-2 rounded-3" type="submit">
                      Cancel
                    </button>
                    <button className="btn btn-md btn-primary px-4 py-2 fw-bold" type="submit">
                      Save
                    </button>
                  </div>
                </div>

                {/* form */}
                <div className="bg-white p-5 rounded-3 border-2px ">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label fw-bold">
                      Email address
                    </label>
                    <input type="email" class="form-control" id="exampleInputEmail1" value="johndoe@example.com" aria-describedby="emailHelp" required />
                    <div id="validationServerUsernameFeedback" class="invalid-feedback">
                      Enter valid email.
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="validationServer01" class="form-label fw-bold">
                      Password
                    </label>
                    <input type="password" class="form-control is-valid" id="validationServer01" value="Mark" required />
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardUser;
