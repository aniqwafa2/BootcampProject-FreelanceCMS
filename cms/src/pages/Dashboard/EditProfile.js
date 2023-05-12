import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const EditProfile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Membuat preview gambar
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan penanganan upload foto di sini
    // Misalnya, kirim gambar ke server menggunakan axios atau fetch
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
              <Link to="/edit-profile" class="list-group-item list-group-item-action active">
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
                    <h4>Edit Profile</h4>
                    <span className="fs-6 text-secondary mb-5">Update your photo and personal details here.</span>
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
                  <div class="mb-4">
                    <div class="d-inline m-2 ">
                      {/* {previewUrl && <img src={previewUrl} className="img-fluid img-upload img-thumbnail rounded-circle" alt="Preview" />} */}
                      <img src="https://via.placeholder.com/150" className="img-fluid img-thumbnail img-upload" />
                    </div>
                    <div class="d-inline p-2">
                      <input type="file" className="form-control-file" id="photo" accept="image/*" onChange={handleFileInputChange} />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label fw-bold">
                      FullName
                    </label>
                    <input type="text" class="form-control is-valid" id="exampleInputEmail1" value="John Doe" aria-describedby="emailHelp" required />
                    <div id="validationServerUsernameFeedback" class="valid-feedback">
                      Looks Good
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="validationTextarea" class="form-label fw-bold">
                      Bio
                    </label>
                    <textarea class="form-control" id="validationTextarea" placeholder="Explain About You" value="loremipsum" required></textarea>
                    <div class="invalid-feedback">Please enter a message in the textarea.</div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label fw-bold">
                      Location
                    </label>
                    <input type="text" class="form-control" id="exampleInputEmail1" value="indonesia, jakarta" aria-describedby="emailHelp" required />
                    <div id="validationServerUsernameFeedback" class="invalid-feedback">
                      Enter Your Location
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

export default EditProfile;
