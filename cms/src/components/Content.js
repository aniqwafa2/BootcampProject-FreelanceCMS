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
  EditPage,
  CreatePage,
} from "../pages";
import { isTokenExpired, getToken } from "../helpers";

const Content = () => {
  const [loginStatus, setLoginStatus] = useState();
  const [loadingStatus, setLoadingStatus] = useState(true);

  const loginHandler = () => {
    if (!getToken()) {
      return setLoginStatus(false);
    }
    if (isTokenExpired()) {
      localStorage.removeItem("access_token");
      return setLoginStatus(false);
    }

    setLoginStatus(true);
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
                {/* Category */}
                <Route path="category" element={<Dashboard />}></Route>
                <Route path="createcategory" element={<Dashboard />}></Route>
                {/* Jobs */}
                <Route path="jobs" element={<Dashboard />}></Route>
                {/* Messages */}
                <Route path="messages" element={<Dashboard />}></Route>
              </Route>
              <Route path="/dashboard/detail" element={<DetailPage />}></Route>
              <Route path="/dashboard/edit" element={<EditPage />}></Route>
              <Route path="/dashboard/create" element={<CreatePage />}></Route>
              <Route path="/post" element={<YourPost></YourPost>}></Route>
              <Route path="/post-job" element={<PostJob></PostJob>}></Route>
              <Route path="*" element={<Navigate replace to="/login" />} />
            </>
          ) : (
            <>
              <Route path="*" element={<Navigate replace to="/login" />} />
            </>
          )}
        </>
      </Routes>
    </div>
  );
};

export default Content;
