import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Login, Register, Dashboard } from "../pages";

const Content = () => {
  return (
    <div>
      <Routes>
        <>
          <Route path="" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>

          {/* DashboardUser */}
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        </>
      </Routes>
    </div>
  );
};

export default Content;
