import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const PostJob = () => {
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"]; // Opsi yang tersedia

  const [selectedOptions, setSelectedOptions] = useState([]); // State untuk menyimpan opsi yang dipilih

  const handleSelectChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedOptions(selectedOptions);
  };

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
                      <label for="exampleFormControlInput1" class="form-label fw-bold" />
                      Job description
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
                      <label for="exampleFormControlInput1" class="form-label fw-bold" />
                      Sallary
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
                      <label for="exampleFormControlInput1" class="form-label fw-bold" />
                      Category
                      <br />
                      <small className="text-secondary">Category for this jobs</small>
                    </div>
                    <div class="col-md">
                      <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">UI/UX Design</option>
                        <option value="2">FrontEnd Developer</option>
                        <option value="3">BackEnd Developer</option>
                        <option value="4">Fullstack</option>
                        <option value="5">Web Designer</option>
                      </select>
                    </div>
                  </div>
                  <hr />

                  <div class="row justify-content-between m-2  mb-3">
                    <div class="col-md">
                      <label for="exampleFormControlInput1" class="form-label fw-bold" />
                      Sample File
                      <br />
                      <small className="text-secondary">example for this project</small>
                    </div>
                    <div class="col-md">
                      <div class="mb-3">
                        <label for="formFileMultiple" class="form-label"></label>
                        <input class="form-control" type="file" id="formFileMultiple" multiple />
                      </div>
                    </div>
                  </div>

                  <div class="row justify-content-between m-2  mb-3">
                    <div class="col-md">
                      <Link to="/post" className="btn btn-outline-primary w-100 fw-bold">
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

export default PostJob;
