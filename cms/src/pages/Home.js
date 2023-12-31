import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { BsSearch } from "react-icons/bs";
import { readJob, readJobDetail } from "../axios/job";

import { dateFormat, isTokenExpired, priceFormat, getToken } from "../helpers";


const Home = () => {
  const [loginStatus, setLoginStatus] = useState();
  const [jobsList, setJobsList] = useState([]);
  const [jobItemSelected, setJobItemSelected] = useState();

  const logoutHandler = () => {
    localStorage.removeItem("access_token");
    setLoginStatus(false);
    window.location.reload();
  };

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

  const jobSelectHandler = async (id) => {
    await readJobDetail(id, (result) => setJobItemSelected(result));
  };

  useEffect(() => {
    loginHandler();

    readJob((result) => {
      setJobsList(result.data);
      setJobItemSelected(result.data[0]);
    });

    const sidebar = document.querySelector(".sidebar");
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        sidebar.classList.add("sidebar-hide");
      } else {
        sidebar.classList.remove("sidebar-hide");
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}

      <div className="pb-2">
        <nav className="navbar fixed-top navbar-expand-lg navbar-warning bg-white border-bottom">
          <div className="container">
            <Link className="navbar-brand" to="#">
              <span className="fs-4 fw-bold">GigGenie</span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              {/* <ul className="navbar-nav ms-5 ">
                <li className="nav-item ">
                  <Link className="nav-link active navigation" aria-current="page" to="#">
                    Find Projects
                  </Link>
                </li>

              </ul> */}

              <ul className="navbar-nav ms-auto">
                {loginStatus ? (
                  <>
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle fw-bold active" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        JohnDoe
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="/dashboard">
                            Dashboard
                          </Link>
                        </li>
                        <hr />
                        <li>

                          <button
                            className="dropdown-item fw-bold"
                            onClick={() => {
                              logoutHandler();
                            }}
                          >

                            Sign out
                          </button>
                        </li>
                      </ul>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link navigation" to="/login">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link navigation" to="Register">
                        Register
                      </Link>
                    </li>
                  </>
                )}

                <div>
                  <span className="fs-4 mx-4">|</span>
                </div>

                <li className="nav-item ">

                  <Link
                    className="btn btn-sm btn-custom mt-1 text-white fw-bold"
                    to="/post"
                  >

                    Employers / Post Job
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Forn Search */}
      <div className="container py-5">
        {/* <div className="container text-center">
          <div className="row mt-5">
            <div className="col-md-5">
              <select className="custom-color form-select form-select-lg mb-3 fs-5 border border-0 text-secondary" aria-label=".form-select-lg example">
                <option selected>job title, keyword or company</option>
                <option data-icon="bi bi-heart">Option 2</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-md-5">
              <select className="custom-color form-select form-select-lg mb-3 fs-5 border border-0 text-secondary" aria-label=".form-select-lg example" readonly>
                <option selected data-icon="bi bi-funnel">
                  All
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-2">
              <button type="button" className="border border-0 btn btn-lg btn-custom w-100 text-white fs-5 lh-base">
                <BsSearch className="me-2"></BsSearch>Search
              </button>
            </div>
            <hr />
          </div>
        </div> */}
      </div>

      {/* main */}
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h2 className="mb-3 fw-bold">Last feed Projects</h2>

            {/* content */}
            {jobsList &&
              jobsList.map((item) => {
                return (

                  <div
                    className="card border border-0 rounded-4 mb-3"
                    key={item.id}
                    onClick={() => jobSelectHandler(item.id)}
                  >
                    <div className="card-body">
                      <h5 className="card-subtitle text-body-secondary fw-bold ps-1 pt-1">
                        {item.name}
                      </h5>
                      <div className="card-text text-secondary small ps-1">
                        Posted in {dateFormat(item.createdAt)}
                      </div>

                      <div className="p-1 py-3">
                        <div class="d-inline p-2 me-2 text-bg-light rounded-2 fw-semibold small border text-secondary">
                          Rp. {priceFormat(item.price)}
                        </div>
                        <div class="d-inline p-2 me-2 text-bg-light rounded-2 fw-bold small border text-secondary">
                          Last apply, {dateFormat(item.dueDate)}
                        </div>
                      </div>

                      <div className="card-text text-container text-secondary lh-sm p-1 display-endline">
                        {item.description}
                      </div>

                      <hr />

                      <div className="p-1">
                        <div class="d-inline p-2 me-2 text-bg-light rounded-2 fw-semibold small border text-secondary">
                          {item.category.name}
                        </div>

                      </div>
                    </div>
                  </div>
                );
              })}

            {/* <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-end">
                <li className="page-item disabled">
                  <Link className="page-link">Previous</Link>
                </li>
                <li className="page-item active">
                  <Link className="page-link" to="#">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    Next
                  </Link>
                </li>
              </ul>
            </nav> */}
          </div>

          {/* sidebar */}
          <div className="container col-7 sidebar sidebar-hide">
            {jobItemSelected ? (
              <>
                <div className="card card-styles alert bg-white border border-2 border-bottom-0 alert-dismissible fade show" role="alert">
                  <div className="card-body">

                    <h2 className="card-subtitle mb-2 text-body-secondary fw-bold">
                      {jobItemSelected.name}
                    </h2>

                    <Link to="https:client_app_link">
                      <button
                        type="submit"
                        className="btn btn-md btn-custom text-white fw-bold"
                      >

                        Apply Now
                      </button>
                    </Link> */}
                  </div>
                  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                </div>

                <div
                  data-bs-spy="scroll"
                  data-bs-target="#navbar-example3"
                  data-bs-smooth-scroll="true"
                  className="scrollable-content border border-2 px-4 py-4 rounded-3 bg-white"
                  tabIndex="0"
                >

                  <div id="item-1">
                    <h5 className="fw-bold">Job Descriptions</h5>
                    <p className="text-secondary lh-sm display-endline">{jobItemSelected.description}</p>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="container-fluid py-2 mt-5 border-top">
        <div className="row">
          <div className="footer">
            <div className="d-flex">
              <div className="ms-5 fw-bold fs-4">
                <div className="p-2 flex-grow-1">GigGenie</div>
              </div>
              <div className="ms-auto me-5 pt-2 fs-6 fw-semibold">
                <div className="d-inline p-2">#TeamProject4</div>
                <div className="d-inline p-2">
                  <Link to="https://www.code.id/">
                    <i>Powered by</i>
                    <img src="https://static.wixstatic.com/media/ab2f5c_4090dbbaeafb4b0d975bd44c6cd498f6~mv2_d_5000_3314_s_4_2.png/v1/fill/w_262,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/code-colored.png" className="img-footer" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
