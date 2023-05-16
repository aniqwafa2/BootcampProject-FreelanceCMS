import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

const Home = () => {
  useEffect(() => {
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
              <ul className="navbar-nav ms-5 ">
                <li className="nav-item ">
                  <Link className="nav-link active navigation" aria-current="page" to="#">
                    Find Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link navigation" to="#">
                    Features
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
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
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle fw-bold active" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    JohnDoe
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="#">
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/dashboard-user">
                        Setting
                      </Link>
                    </li>
                    <hr />
                    <li>
                      <Link className="dropdown-item fw-bold" to="#">
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </li>

                <div>
                  <span className="fs-4 mx-4">|</span>
                </div>

                <li className="nav-item ">
                  <Link className="btn btn-sm btn-custom mt-1 text-white fw-bold" to="/dashboard">
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
        <div className="container text-center">
          <div className="row mt-5">
            <div className="col-5">
              <select className="custom-color form-select form-select-lg mb-3 fs-5 border border-0 text-secondary" aria-label=".form-select-lg example">
                <option selected>job title, keyword or company</option>
                <option data-icon="bi bi-heart">Option 2</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-5">
              <select className="custom-color form-select form-select-lg mb-3 fs-5 border border-0 text-secondary" aria-label=".form-select-lg example">
                <option selected data-icon="bi bi-funnel">
                  All location
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
        </div>
      </div>

      {/* main */}
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h2 className="mb-3 fw-bold">Last feed Projects</h2>

            {/* content */}
            <div className="card border border-0 rounded-4 card-style mb-3">
              <div className="card-body">
                <h6 className="card-title">
                  <div className="container text-center text-secondary">
                    <div className="row row-cols-auto fw-bold ">
                      <div className="col lh-lg py-1 me-2 rounded-4 bg-light">
                        <FiMapPin className="me-1 fs-5"></FiMapPin>Bandung
                      </div>
                    </div>
                  </div>
                </h6>
                <h5 className="card-subtitle mb-2 text-body-secondary">Revamp Our E-commerce Website with a Fresh & Clean UI Design</h5>
                <small className="card-text text-secondary fs-6">Posted 23 minutes ago</small>

                <div className="text-center mt-2 lh-sm">
                  <div className="row row-cols-4 row-cols-lg-3 g-3 g-lg-3">
                    <div className="col">
                      <div className="py-2 border border-2 rounded-4 fw-bold">
                        $290 <br />
                        <span className="text-secondary fs-6 mono">Fixed-price</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="py-2 border border-2 rounded-4 fw-bold">
                        14 Days <br />
                        <span className="text-secondary fs-6 mono">Duration</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="py-2 border border-2 rounded-4 fw-bold">
                        10 to 50 <br />
                        <span className="text-secondary fs-6 mono">Proposal</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="card-text text-container text-secondary lh-sm mt-2">
                  Our e-commerce website is in need of a revamp and we are looking for a talented UI designer to help us create a fresh, modern, and user-friendly design. We are seeking a proffesional who can bring their creativity and
                  design skills to the table to help us create a visually appealing website that will enhance the shopping experience for out costumers.
                </p>
                <small className="card-text text-secondary fs-6">Tags</small>
                <div className="row row-cols-auto small fw-bold text-secondary">
                  <div className="col lh-sm m-1 ms-2 p-2 rounded-4 bg-light">UI Design</div>
                  <div className="col lh-sm m-1 ms-2 p-2 rounded-4 bg-light">Graphic Design</div>
                  <div className="col lh-sm m-1 ms-2 p-2 rounded-4 bg-light">Web Design</div>
                  <div className="col lh-sm m-1 ms-2 p-2 rounded-4 bg-light">Figma</div>
                </div>
              </div>
            </div>

            {/* content */}
            <div className="card border border-0 rounded-4 card-style mb-3">
              <div className="card-body">
                <h6 className="card-title">
                  <div className="container text-center text-secondary">
                    <div className="row row-cols-auto fw-bold ">
                      <div className="col lh-lg py-1 me-2 rounded-4 bg-light">
                        <FiMapPin className="me-1 fs-5"></FiMapPin>Bandung
                      </div>
                    </div>
                  </div>
                </h6>
                <h5 className="card-subtitle mb-2 text-body-secondary">Revamp Our E-commerce Website with a Fresh & Clean UI Design</h5>
                <small className="card-text text-secondary fs-6">Posted 23 minutes ago</small>

                <div className="text-center mt-2 lh-sm">
                  <div className="row row-cols-4 row-cols-lg-3 g-3 g-lg-3">
                    <div className="col">
                      <div className="py-2 border border-2 rounded-4 fw-bold">
                        $290 <br />
                        <span className="text-secondary fs-6 mono">Fixed-price</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="py-2 border border-2 rounded-4 fw-bold">
                        14 Days <br />
                        <span className="text-secondary fs-6 mono">Duration</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="py-2 border border-2 rounded-4 fw-bold">
                        10 to 50 <br />
                        <span className="text-secondary fs-6 mono">Proposal</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="card-text text-container text-secondary lh-sm mt-2">
                  Our e-commerce website is in need of a revamp and we are looking for a talented UI designer to help us create a fresh, modern, and user-friendly design. We are seeking a proffesional who can bring their creativity and
                  design skills to the table to help us create a visually appealing website that will enhance the shopping experience for out costumers.
                </p>
                <small className="card-text text-secondary fs-6">Tags</small>
                <div className="row row-cols-auto small fw-bold text-secondary">
                  <div className="col lh-sm m-1 ms-2 p-2 rounded-4 bg-light">UI Design</div>
                  <div className="col lh-sm m-1 ms-2 p-2 rounded-4 bg-light">Graphic Design</div>
                  <div className="col lh-sm m-1 ms-2 p-2 rounded-4 bg-light">Web Design</div>
                  <div className="col lh-sm m-1 ms-2 p-2 rounded-4 bg-light">Figma</div>
                </div>
              </div>
            </div>

            {/* content */}
            <div className="card border border-0 rounded-4 card-style mb-3">
              <div className="card-body">
                <h6 className="card-title">
                  <div className="container text-center text-secondary">
                    <div className="row row-cols-auto fw-bold ">
                      <div className="col lh-lg py-1 me-2 rounded-4 bg-light">
                        <FiMapPin className="me-1 fs-5"></FiMapPin>Bandung
                      </div>
                    </div>
                  </div>
                </h6>
                <h5 className="card-subtitle mb-2 text-body-secondary">Revamp Our E-commerce Website with a Fresh & Clean UI Design</h5>
                <small className="card-text text-secondary fs-6">Posted 23 minutes ago</small>

                <div className="text-center mt-2 lh-sm">
                  <div className="row row-cols-4 row-cols-lg-3 g-3 g-lg-3">
                    <div className="col">
                      <div className="py-2 border border-2 rounded-4 fw-bold">
                        $290 <br />
                        <span className="text-secondary fs-6 mono">Fixed-price</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="py-2 border border-2 rounded-4 fw-bold">
                        14 Days <br />
                        <span className="text-secondary fs-6 mono">Duration</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="py-2 border border-2 rounded-4 fw-bold">
                        10 to 50 <br />
                        <span className="text-secondary fs-6 mono">Proposal</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="card-text text-container text-secondary lh-sm mt-2">
                  Our e-commerce website is in need of a revamp and we are looking for a talented UI designer to help us create a fresh, modern, and user-friendly design. We are seeking a proffesional who can bring their creativity and
                  design skills to the table to help us create a visually appealing website that will enhance the shopping experience for out costumers.
                </p>
                <small className="card-text text-secondary fs-6">Tags</small>
                <div className="row row-cols-auto small fw-bold text-secondary">
                  <div className="col lh-sm m-1 ms-2 p-2 rounded-4 bg-light">UI Design</div>
                  <div className="col lh-sm m-1 ms-2 p-2 rounded-4 bg-light">Graphic Design</div>
                  <div className="col lh-sm m-1 ms-2 p-2 rounded-4 bg-light">Web Design</div>
                  <div className="col lh-sm m-1 ms-2 p-2 rounded-4 bg-light">Figma</div>
                </div>
              </div>
            </div>

            <nav aria-label="Page navigation example">
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
            </nav>
          </div>

          {/* sidebar */}
          <div className="container col-7 sidebar sidebar-hide">
            <div className="card card-styles alert bg-white border border-2 border-bottom-0 alert-dismissible fade show" role="alert">
              <div className="card-body">
                <h6 className="card-title">
                  <div className="container text-center">
                    <div className="row row-cols-auto fw-bold ">
                      <div className="col lh-lg me-2 rounded-4 bg-light">
                        <FiMapPin className="me-1 fs-5"></FiMapPin>Bandung
                      </div>
                    </div>
                  </div>
                </h6>
                <h4 className="card-subtitle mb-2 text-body-secondary fw-bold">Revamp Our E-commerce Website with a Fresh & Clean UI Design</h4>
                <Link to="#">
                  <button type="submit" className="btn btn-lg btn-custom text-white fw-bold">
                    Apply Now
                  </button>
                </Link>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollable-content border border-2 px-4 py-4 rounded-2" tabindex="0">
              <div id="item-1">
                <h5 className="fw-bold">Job Descriptions</h5>
                <p className="text-secondary lh-sm">
                  Our e-commerce website is in need of a revamp and we are looking for a talented UI designer to help us create a fresh, modern, and user-friendly design. We are seeking a proffesional who can bring their creativity and
                  design skills to the table to help us create a visually appealing website that will enhance the shopping experience for out costumers.
                </p>
              </div>
              <div id="item-1-1">
                <h5 className="fw-bold">Requirements</h5>
                <p className="text-secondary lh-sm">
                  Our e-commerce website is in need of a revamp and we are looking for a talented UI designer to help us create a fresh, modern, and user-friendly design. We are seeking a proffesional who can bring their creativity and
                  design skills to the table to help us create a visually appealing website that will enhance the shopping experience for out costumers.
                </p>
              </div>
              <div id="item-1-2">
                <h5>Item 1-2</h5>
                <p>
                  This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more
                  example copy here to emphasize the scrolling and highlighting. Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may
                  cause some issues.
                </p>
              </div>
              <div id="item-2">
                <h4>Item 2</h4>
                <p>...</p>
              </div>
              <div id="item-3">
                <h4>Item 3</h4>
                <p>...</p>
              </div>
              <div id="item-3-1">
                <h5>Item 3-1</h5>
                <p>...</p>
              </div>
              <div id="item-3-2">
                <h5>Item 3-2</h5>
                <p>...</p>
              </div>
            </div>
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
