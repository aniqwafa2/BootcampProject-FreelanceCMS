import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const YourPost = () => {
  const [activeMenu, setActiveMenu] = useState("post");
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row">
          {/* sidebar */}
          <div className="col-md-3"></div>

          {/* content */}
          <div className="col-md">
            <div className="dashboard-content">
              <div>
                <h5 className="fw-bold border-bottom lh-lg">Post Job</h5>
              </div>
              <div className="p-3 my-3 rounded-4 bg-white">
                <div class="row justify-content-between m-2 border-bottom lh-lg">
                  <div class="col-4">
                    <Link to="" className="icon-link">
                      Your Postings
                    </Link>
                  </div>
                  <div class="col-4 text-end">
                    <Link to="" className="icon-link icon-link-hover">
                      All Job Postings <BsArrowRight></BsArrowRight>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourPost;
