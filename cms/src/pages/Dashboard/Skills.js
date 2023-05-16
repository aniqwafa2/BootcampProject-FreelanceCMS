import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Form } from "react-bootstrap";
import Navbar from "./Navbar";

const Skills = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedOptions(selectedOptions);
  };

  return (
    <>
      <Navbar></Navbar>

      {/* sidebar */}
      <div className="container pt-5">
        <div class="row mt-5">
          <div class="col-md-4">
            <div class="list-group sidebar-user ">
              <Link to="/dashboard-user" class="list-group-item list-group-item-action " aria-current="true">
                General
              </Link>
              <Link to="/edit-profile" class="list-group-item list-group-item-action ">
                Edit Profile
              </Link>
              <Link to="/skills" class="list-group-item list-group-item-action active">
                Skills
              </Link>
            </div>
          </div>
          <div class="col-md-8">
            <form className="was-validated">
              <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example flex-grow-1" tabindex="0">
                <div class="d-flex justify-content-between">
                  <div className="lh-1">
                    <h4>Skills</h4>
                    <span className="fs-6 text-secondary mb-5">Add your work experience or skills.</span>
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
                    <div id="multiSelect" className="form-group">
                      <select class="form-select" required aria-label="select example">
                        <option value="">Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <div class="invalid-feedback">Example invalid select feedback</div>
                    </div>
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

export default Skills;
