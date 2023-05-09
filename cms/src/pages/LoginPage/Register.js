import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="container">
        <div className="row pb-0">
          <div className="col-6">
            <form className="login-form-style mx-4 rounded-4 mt-5 px-5 pt-4 pb-3 form-login">
              <h2 className="fw-bold">Join Now</h2>
              <p>Let us help you run your freelance bussiness.</p>
              <div class="col-md-10 mt-4 mx-4 mb-2 rounded-3">
                <label class="form-label">FullName</label>
                <input type="text" class="form-control" placeholder="Enter fullname" required />
              </div>
              <div class="col-md-10 mx-4 mb-2 rounded-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" placeholder="Type your email" required />
              </div>
              <div class="col-md-10 mx-4 mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" placeholder="Type your password" required />
              </div>

              <div class="col-md-10 mx-4 mb-4">
                <button className="btn btn-custom text-white fw-bold fs-5 rounded-3 w-100 " type="submit">
                  Log in
                </button>
              </div>
              <p className="mx-5">
                Have an account?{" "}
                <Link to="/login" className="fw-bold ">
                  <span className="link-styles">Log in</span>
                </Link>
              </p>
            </form>
            <p className="text-center pt-2 fw-bold">
              <Link to="/">Back to Home</Link>
            </p>
          </div>

          <div className="col-6">
            <div className="hero-register"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
