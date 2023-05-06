import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Dashboard, Product, CreateProduct, User, CreateUser, EditUser, Category, CreateCategory, EditCategory, EditProduct } from "../pages";

const Content = () => {
  return (
    <div>
      <Routes>
        <>
          <Route path="" element={<Home></Home>}></Route>
        </>
      </Routes>
    </div>
  );
};

export default Content;
