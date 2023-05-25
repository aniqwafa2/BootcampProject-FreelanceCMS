import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../axios/user";

const Login = ({ loginState }) => {
  const [form, setForm] = useState({});

  const navigate = useNavigate();

  const loginSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      await loginUser(form, (result) => {
        if (result === 1) {
          loginState(true);
          navigate("/dashboard");
        } else if (result === 2) {
          navigate("/");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row pb-0">
          <div className="col-6">
            <div className="hero-login"></div>
          </div>
          <div className="col-6">
            <form
              className="login-form-style mx-4 rounded-4 p-4 form-login"
              onSubmit={loginSubmitHandler}
            >
              <h2 className="fw-bold">Login to Account</h2>
              <p>Hey, Enter your details to get log in to your account</p>
              <div className="col-md-10 mt-4 mx-4 mb-3 rounded-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Type your email"
                  required
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                  }}
                />
              </div>
              <div className="col-md-10 mx-4 mb-4">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Type your password"
                  required
                  onChange={(e) => {
                    setForm({ ...form, password: e.target.value });
                  }}
                />
              </div>

              <div className="col-md-10 mx-4 mb-4">
                <button
                  className="btn btn-custom text-white fw-bold fs-5 rounded-3 w-100"
                  type="submit"
                >
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
