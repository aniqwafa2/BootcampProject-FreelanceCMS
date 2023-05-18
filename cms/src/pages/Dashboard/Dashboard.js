import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { DashboardHome, JobList, ApplicantList } from "./DashPages";

const Dashboard = () => {
  const [locationPage, setLocationPage] = useState();

  const location = useLocation();

  const pageHandler = () => {
    switch (location.pathname) {
      case "/dashboard/jobs":
        return <JobList></JobList>;

      // TODO: nerusin buat dashboardmenu lainnya
      case "/dashboard/applicants":
        return <ApplicantList></ApplicantList>;

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
