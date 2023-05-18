import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  Login,
  Register,
  Dashboard,
  YourPost,
  PostJob,
  DetailPage,
} from "../pages";

const Content = () => {
  const [loginStatus, setLoginStatus] = useState();
  const [loadingStatus, setLoadingStatus] = useState(true);

  const loginHandler = () => {
    if (localStorage.getItem("access_token")) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  };
  useEffect(() => {
    loginHandler();
    setLoadingStatus(false);
  });

  if (loadingStatus) {
    return <div>{/* Loading ... */}</div>;
  }

  return (
    <div>
      <Routes>
        <>
          <Route path="" element={<Home></Home>}></Route>
          <Route
            path="/login"
            element={<Login loginState={setLoginStatus}></Login>}
          ></Route>
          <Route path="/register" element={<Register></Register>}></Route>

          {/* DashboardUser */}
          {loginStatus ? (
            <>
              <Route path="/dashboard" element={<Dashboard></Dashboard>}>
                <Route path="jobs" element={<Dashboard />}></Route>
                <Route path="applicants" element={<Dashboard />}></Route>
                {/* TODO: child dashboard menu lainnya bisa taruh dibawah comment ini */}
              </Route>
              <Route path="/dashboard/detail" element={<DetailPage />}></Route>
              <Route path="/post" element={<YourPost></YourPost>}></Route>
              <Route path="/post-job" element={<PostJob></PostJob>}></Route>
              <Route
                path="*"
                element={<Navigate replace to="/login"></Navigate>}
              ></Route>
            </>
          ) : (
            <>
              <Route
                path="*"
                element={<Navigate replace to="/login"></Navigate>}
              ></Route>
            </>
          )}
        </>
      </Routes>
    </div>
  );
};

export default Content;
