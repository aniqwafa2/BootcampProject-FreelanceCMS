import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="row pb-0">
          <div className="col-6">
            <div className="hero-login"></div>
          </div>
          <div className="col-6">
            <form className="login-form-style mx-4 rounded-4 p-4 form-login">
              <h2 className="fw-bold">Login to Account</h2>
              <p>Hey, Enter your details to get log in to your account</p>
              <div class="col-md-10 mt-4 mx-4 mb-3 rounded-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" placeholder="Type your email" required />
              </div>
              <div class="col-md-10 mx-4 mb-4">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" placeholder="Type your password" required />
              </div>

              <div class="col-md-10 mx-4 mb-4">
                <button className="btn btn-custom text-white fw-bold fs-5 rounded-3 w-100 " type="submit">
                  Log in
                </button>
              </div>
              <p className="mx-5">
                Don't have an account?{" "}
                <Link to="/register" className="fw-bold ">
                  <span className="link-styles">Register Now</span>
                </Link>
              </p>
            </form>
            <p className="text-center pt-2 fw-bold">
              <Link to="/">Back to Home</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;