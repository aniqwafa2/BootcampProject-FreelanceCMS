import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import {
  DashboardHome,
  JobList,
  ApplicantList, Category, CreateCategory,
  MessageList,
} from "./DashPages";

const Dashboard = () => {
  const [locationPage, setLocationPage] = useState();

  const location = useLocation();

  const pageHandler = () => {
    switch (location.pathname) {
      case "/dashboard/category":
        return <Category></Category>;

      case "/dashboard/createcategory":
        return <CreateCategory></CreateCategory>;

      case "/dashboard/jobs":
        return <JobList></JobList>;

      // TODO: nerusin buat dashboardmenu lainnya
      case "/dashboard/applicants":
        return <ApplicantList></ApplicantList>;

      case "/dashboard/messages":
        return <MessageList></MessageList>;

      default:
        return <DashboardHome></DashboardHome>;
    }
  };

  useEffect(() => {
    setLocationPage(pageHandler());
  }, [location]);

  return (
    <>
      <Navbar />
      {locationPage}
    </>
  );
};

export default Dashboard;
