import React from "react";
import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";

const Dashboard = () => {
  return (
    <>
    <div id="layout-wrapper">
     <Header />
     
      <div className="vertical-menu">
        <div data-simplebar="" className="h-100" >
         <SideBar />
        </div>
      </div>
          <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18 my-2">
                    Luxorpen Administrator Control Panel V1.0{" "}
                  </h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="dashboard.php">Home</a>
                      </li>
                      <li className="breadcrumb-item active">
                        &gt;&gt; Dashboard
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* end page title */}
            <div className="row">
              <div className="col-xl-4">
                <div className="card overflow-hidden">
                  <div className="bg-primary bg-soft">
                    <div className="row">
                      <div className="col-7">
                        <div className="text-primary p-3">
                          <h5 className="text-primary">Welcome Back !</h5>
                          <p>Luxorpen Dashboard</p>
                        </div>
                      </div>
                      <div className="col-5 align-self-end">
                        <img
                          src="assets/images/profile-img.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="avatar-md profile-user-wid mb-4">
                          <img
                            src="assets/images/users/avatar-2.jpg"
                            alt=""
                            className="img-thumbnail rounded-circle"
                          />
                        </div>
                        <h5 className="font-size-15 text-truncate">
                          Kunal Gupta
                        </h5>
                        <p className="text-muted mb-0 text-truncate">
                          Administrator
                        </p>
                      </div>
                      <div className="col-sm-8">
                        <div className="pt-4">
                          <div className="row">
                            <div className="col-6">
                              <h5 className="font-size-15">125</h5>
                              <p className="text-muted mb-0">CATEGORIES</p>
                            </div>
                            <div className="col-6">
                              <h5 className="font-size-15">1245</h5>
                              <p className="text-muted mb-0">PRODUCTS</p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <a
                              href="javascript: void(0);"
                              className="btn btn-primary waves-effect waves-light btn-sm"
                            >
                              View Profile{" "}
                              <i className="mdi mdi-arrow-right ms-1" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                {/* <div className="card">
                  <div className="card-body">
                    <h4 className="card-title mb-4">Monthly Jobs</h4>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="text-muted">This month</p>
                        <h3>252</h3>
                        <p className="text-muted">
                          <span className="text-success me-2">
                            {" "}
                            12% <i className="mdi mdi-arrow-up" />{" "}
                          </span>{" "}
                          From previous period
                        </p>
                        <div className="mt-4">
                          <a
                            href="javascript: void(0);"
                            className="btn btn-primary waves-effect waves-light btn-sm"
                          >
                            View More <i className="mdi mdi-arrow-right ms-1" />
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mt-4 mt-sm-0">
                          <div id="radialBar-chart" className="apex-charts" />
                        </div>
                      </div>
                    </div>
                    <p className="text-muted mb-0">
                      Manage candidates, employers, jobs &amp; advertisement etc.{" "}
                    </p>
                  </div>
                </div>
                 */}
                  

              </div>
              <div className="col-xl-8">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card mini-stats-wid">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="flex-grow-1">
                            <p className="text-muted fw-medium">CATEGORIES</p>
                            <h4 className="mb-0">12351</h4>
                          </div>
                          <div className="flex-shrink-0 align-self-center">
                            <div className="mini-stat-icon avatar-sm rounded-circle bg-primary">
                              <span className="avatar-title">
                                <i className="bx bxs-user-circle font-size-24" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mini-stats-wid">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="flex-grow-1">
                            <p className="text-muted fw-medium">PRODUCTS</p>
                            <h4 className="mb-0">145</h4>
                          </div>
                          <div className="flex-shrink-0 align-self-center">
                            <div className="avatar-sm rounded-circle bg-primary mini-stat-icon">
                              <span className="avatar-title rounded-circle bg-primary">
                                <i className="bx bx bx-building-house font-size-24" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mini-stats-wid">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="flex-grow-1">
                            <p className="text-muted fw-medium">RECENT</p>
                            <h4 className="mb-0">12111</h4>
                          </div>
                          <div className="flex-shrink-0 align-self-center">
                            <div className="avatar-sm rounded-circle bg-primary mini-stat-icon">
                              <span className="avatar-title rounded-circle bg-primary">
                                <i className="bx bx-task font-size-24" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end row */}
                <div className="card">
                  <div className="card-body">
                    <div className="d-sm-flex flex-wrap">
                      <h4 className="card-title mb-4">
                        Monthly Products -  released
                      </h4>
                      <div className="ms-auto">
                        <ul className="nav nav-pills">
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              Week
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              Month
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link active" href="#">
                              Year
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      id="stacked-column-chart"
                      className="apex-charts"
                      dir="ltr"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* end row */}
            {/* end row */}
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title mb-4">Latest Products</h4>
                    <div className="table-responsive">
                      <table className="table align-middle table-nowrap table-hover">
                        <thead className="table-light">
                          <tr>
                            <th scope="col" style={{ width: 70 }}>
                              ID
                            </th>
                            <th scope="col">Category</th>
                            <th scope="col">Product</th>
                            <th scope="col">Profile Status</th>
                            <th scope="col">Other Information </th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td
                              style={{
                                color: "#ff8000",
                                fontSize: 15,
                                fontFamily: "nunito"
                              }}
                            >
                              RZG000091
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-1">
                                <a href="profile.php" className="text-dark">
                                  Pens 
                                </a>
                              </h5>
                              <p
                                className="text-muted mb-0"
                                style={{ color: "#00add2 !important" }}
                              >
                                Metal Pens {" "}
                                <span className="badge border border-light rounded-circle bg-success p-1">
                                  <span className="visually-hidden">Online</span>
                                </span>
                              </p>
                              <p className="text-muted mb-0">
                                {/* satyaprakash@gmail.com */}
                              </p>
                              {/* <p className="text-muted mb-0">99902434443</p> */}
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-1">
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  Jobs Applied (12)
                                </a>
                              </h5>
                              <p className="text-muted mb-0">
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#c80064" }}>
                                    Shortlisted (2){" "}
                                  </span>
                                </a>{" "}
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#ff0000" }}>
                                    Rejected (5)
                                  </span>
                                </a>{" "}
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#008040" }}>
                                    Subscription (2){" "}
                                  </span>
                                </a>
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#009999" }}>
                                    Saved Jobs (23)
                                  </span>
                                </a>{" "}
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#ff00ff" }}>
                                    Reviews(3){" "}
                                  </span>
                                </a>
                                {/* <a href="javascript:void(0);" class="text-dark"><span style="color: #c80064;">Referred Jobs (1)</span></a> <br>
                                                                <a href="javascript:void(0);" class="text-dark"><span style="color: #c80064;">Reviews(3) </span></a> <br>
                                                                : 5 Min | <span style="color: #f46a6a;">Complete Required</span> : 500<br> <p class="text-muted mb-0"><i class="bx bx-calendar-event" style="color: #f46a6a;"></i> <strong>From</strong>  01-01-2021 <strong>to</strong> 02-02-2022  */}
                              </p>{" "}
                              <p />
                            </td>
                            <td>
                              Completeness{" "}
                              <span className="badge rounded-pill bg-success">
                                90%
                              </span>
                              <br />
                              <a href="javascript:void(0);" className="text-dark">
                                <span style={{ color: "#008040" }}>
                                  Recruiter Message (3){" "}
                                </span>
                              </a>{" "}
                              <br />
                              <a href="javascript:void(0);" className="text-dark">
                                <span style={{ color: "#808040" }}>
                                  Download Resume{" "}
                                  <i className="bx bxs-cloud-download" />{" "}
                                </span>
                              </a>{" "}
                              <br />
                              <a href="javascript:void(0);" className="text-dark">
                                <span style={{ color: "#444444" }}>
                                  Transaction History (5){" "}
                                </span>
                              </a>{" "}
                              <br />
                            </td>
                            <td>
                              <button
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop3"
                                className="btn btn-info waves-effect btn-label waves-light"
                              >
                                <i className="bx bx-street-view label-icon " />{" "}
                                View Details{" "}
                                {/* <span class="badge rounded-pill bg-danger">20</span> */}
                              </button>
                              {/* STATIC BACKDROP MODAL */}
                              <div
                                className="modal fade"
                                id="staticBackdrop3"
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="staticBackdropLabel"
                                aria-hidden="true"
                              >
                                <div
                                  className="modal-dialog modal-dialog-centered modal-lg"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5
                                        className="modal-title"
                                        id="staticBackdropLabel"
                                      >
                                        Satya Prakash - Information
                                      </h5>
                                      <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      />
                                    </div>
                                    <div className="modal-body">
                                      <p></p>
                                      <table className="table table-striped mb-0">
                                        <tbody>
                                          <tr>
                                            <td>Skills</td>
                                            <td>PHP, Lamp, Java</td>
                                          </tr>
                                          <tr>
                                            <td>Certifications</td>
                                            <td>GCP, CSM</td>
                                          </tr>
                                          <tr>
                                            <td>Current Company</td>
                                            <td>Mount Talent</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <p />
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-light"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* MODEL CLOSED */}
                            </td>
                            <td>
                              <ul className="list-inline font-size-20 contact-links mb-0">
                                <li className="list-inline-item px-2">
                                  <a
                                    href="javascript: void(0);"
                                    title="View Client"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                  >
                                    <i className="bx bxs-zoom-in" />
                                  </a>
                                </li>
                                <li className="list-inline-item px-2">
                                  <a
                                    href="javascript: void(0);"
                                    title="Edit User"
                                  >
                                    <i className="bx bx-edit" />
                                  </a>
                                </li>
                                <li className="list-inline-item px-2">
                                  <a
                                    href="javascript: void(0);"
                                    style={{ color: "red" }}
                                    title="Delete User"
                                  >
                                    <i className="bx bx-trash" />
                                  </a>
                                </li>
                              </ul>
                              {/* STATIC BACKDROP MODAL */}
                              <div
                                className="modal fade"
                                id="staticBackdrop"
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="staticBackdropLabel"
                                aria-hidden="true"
                              >
                                <div
                                  className="modal-dialog modal-dialog-centered modal-lg"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5
                                        className="modal-title"
                                        id="staticBackdropLabel"
                                      >
                                        Candidate Details
                                      </h5>
                                      <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      />
                                    </div>
                                    <div className="modal-body">
                                      <p></p>
                                      <table className="table table-striped mb-0">
                                        <tbody>
                                          <tr>
                                            <td style={{ width: "32%" }}>ID</td>
                                            <td>RZG000091</td>
                                          </tr>
                                          <tr>
                                            <td>Name</td>
                                            <td>Satya Prakash</td>
                                          </tr>
                                          <tr>
                                            <td>Skills</td>
                                            <td>PHP, Lamp, Java, GCP</td>
                                          </tr>
                                          <tr>
                                            <td>Certification</td>
                                            <td>GCP, CSM</td>
                                          </tr>
                                          <tr>
                                            <td>Email</td>
                                            <td>satyaprakash@gmail.co</td>
                                          </tr>
                                          <tr>
                                            <td>Phone No.</td>
                                            <td>99902434443</td>
                                          </tr>
                                          <tr>
                                            <td>Current Organization</td>
                                            <td>Mount Talent</td>
                                          </tr>
                                          <tr>
                                            <td>Notice Period</td>
                                            <td>Immediate Joiners</td>
                                          </tr>
                                          <tr>
                                            <td>Address</td>
                                            <td>H - 12, GNA2, Noida Extension</td>
                                          </tr>
                                          <tr>
                                            <td>Featured Profile Subscription</td>
                                            <td>No</td>
                                          </tr>
                                          <tr>
                                            <td>Profile Status</td>
                                            <td>
                                              <span className="badge rounded-pill bg-success">
                                                LIVE
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <p />
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-light"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* MODEL CLOSED */}
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                color: "#ff8000",
                                fontSize: 15,
                                fontFamily: "nunito"
                              }}
                            >
                              RZG000091
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-1">
                                <a href="profile.php" className="text-dark">
                                  Satya Prakash
                                </a>
                              </h5>
                              <p
                                className="text-muted mb-0"
                                style={{ color: "#00add2 !important" }}
                              >
                                Fresher{" "}
                                <span className="badge border border-light rounded-circle bg-success p-1">
                                  <span className="visually-hidden">Online</span>
                                </span>
                              </p>
                              <p className="text-muted mb-0">
                                satyaprakash@gmail.com
                              </p>
                              <p className="text-muted mb-0">99902434443</p>
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-1">
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  Jobs Applied (12)
                                </a>
                              </h5>
                              <p className="text-muted mb-0">
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#c80064" }}>
                                    Shortlisted (2){" "}
                                  </span>
                                </a>{" "}
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#ff0000" }}>
                                    Rejected (5)
                                  </span>
                                </a>{" "}
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#008040" }}>
                                    Subscription (2){" "}
                                  </span>
                                </a>
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#009999" }}>
                                    Saved Jobs (23)
                                  </span>
                                </a>{" "}
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#ff00ff" }}>
                                    Reviews(3){" "}
                                  </span>
                                </a>
                                {/* <a href="javascript:void(0);" class="text-dark"><span style="color: #c80064;">Referred Jobs (1)</span></a> <br>
                                                                <a href="javascript:void(0);" class="text-dark"><span style="color: #c80064;">Reviews(3) </span></a> <br>
                                                                : 5 Min | <span style="color: #f46a6a;">Complete Required</span> : 500<br> <p class="text-muted mb-0"><i class="bx bx-calendar-event" style="color: #f46a6a;"></i> <strong>From</strong>  01-01-2021 <strong>to</strong> 02-02-2022  */}
                              </p>{" "}
                              <p />
                            </td>
                            <td>
                              Completeness{" "}
                              <span className="badge rounded-pill bg-success">
                                90%
                              </span>
                              <br />
                              <a href="javascript:void(0);" className="text-dark">
                                <span style={{ color: "#008040" }}>
                                  Recruiter Message (3){" "}
                                </span>
                              </a>{" "}
                              <br />
                              <a href="javascript:void(0);" className="text-dark">
                                <span style={{ color: "#808040" }}>
                                  Download Resume{" "}
                                  <i className="bx bxs-cloud-download" />{" "}
                                </span>
                              </a>{" "}
                              <br />
                              <a href="javascript:void(0);" className="text-dark">
                                <span style={{ color: "#444444" }}>
                                  Transaction History (5){" "}
                                </span>
                              </a>{" "}
                              <br />
                            </td>
                            <td>
                              <button
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop3"
                                className="btn btn-info waves-effect btn-label waves-light"
                              >
                                <i className="bx bx-street-view label-icon " />{" "}
                                View Details{" "}
                                {/* <span class="badge rounded-pill bg-danger">20</span> */}
                              </button>
                              {/* STATIC BACKDROP MODAL */}
                              <div
                                className="modal fade"
                                id="staticBackdrop3"
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="staticBackdropLabel"
                                aria-hidden="true"
                              >
                                <div
                                  className="modal-dialog modal-dialog-centered modal-lg"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5
                                        className="modal-title"
                                        id="staticBackdropLabel"
                                      >
                                        Satya Prakash - Information
                                      </h5>
                                      <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      />
                                    </div>
                                    <div className="modal-body">
                                      <p></p>
                                      <table className="table table-striped mb-0">
                                        <tbody>
                                          <tr>
                                            <td>Skills</td>
                                            <td>PHP, Lamp, Java</td>
                                          </tr>
                                          <tr>
                                            <td>Certifications</td>
                                            <td>GCP, CSM</td>
                                          </tr>
                                          <tr>
                                            <td>Current Company</td>
                                            <td>Mount Talent</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <p />
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-light"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* MODEL CLOSED */}
                            </td>
                            <td>
                              <ul className="list-inline font-size-20 contact-links mb-0">
                                <li className="list-inline-item px-2">
                                  <a
                                    href="javascript: void(0);"
                                    title="View Client"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                  >
                                    <i className="bx bxs-zoom-in" />
                                  </a>
                                </li>
                                <li className="list-inline-item px-2">
                                  <a
                                    href="javascript: void(0);"
                                    title="Edit User"
                                  >
                                    <i className="bx bx-edit" />
                                  </a>
                                </li>
                                <li className="list-inline-item px-2">
                                  <a
                                    href="javascript: void(0);"
                                    style={{ color: "red" }}
                                    title="Delete User"
                                  >
                                    <i className="bx bx-trash" />
                                  </a>
                                </li>
                              </ul>
                              {/* STATIC BACKDROP MODAL */}
                              <div
                                className="modal fade"
                                id="staticBackdrop"
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="staticBackdropLabel"
                                aria-hidden="true"
                              >
                                <div
                                  className="modal-dialog modal-dialog-centered modal-lg"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5
                                        className="modal-title"
                                        id="staticBackdropLabel"
                                      >
                                        Candidate Details
                                      </h5>
                                      <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      />
                                    </div>
                                    <div className="modal-body">
                                      <p></p>
                                      <table className="table table-striped mb-0">
                                        <tbody>
                                          <tr>
                                            <td style={{ width: "32%" }}>ID</td>
                                            <td>RZG000091</td>
                                          </tr>
                                          <tr>
                                            <td>Name</td>
                                            <td>Satya Prakash</td>
                                          </tr>
                                          <tr>
                                            <td>Skills</td>
                                            <td>PHP, Lamp, Java, GCP</td>
                                          </tr>
                                          <tr>
                                            <td>Certification</td>
                                            <td>GCP, CSM</td>
                                          </tr>
                                          <tr>
                                            <td>Email</td>
                                            <td>satyaprakash@gmail.co</td>
                                          </tr>
                                          <tr>
                                            <td>Phone No.</td>
                                            <td>99902434443</td>
                                          </tr>
                                          <tr>
                                            <td>Current Organization</td>
                                            <td>Mount Talent</td>
                                          </tr>
                                          <tr>
                                            <td>Notice Period</td>
                                            <td>Immediate Joiners</td>
                                          </tr>
                                          <tr>
                                            <td>Address</td>
                                            <td>H - 12, GNA2, Noida Extension</td>
                                          </tr>
                                          <tr>
                                            <td>Featured Profile Subscription</td>
                                            <td>No</td>
                                          </tr>
                                          <tr>
                                            <td>Profile Status</td>
                                            <td>
                                              <span className="badge rounded-pill bg-success">
                                                LIVE
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <p />
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-light"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* MODEL CLOSED */}
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                color: "#ff8000",
                                fontSize: 15,
                                fontFamily: "nunito"
                              }}
                            >
                              RZG000091
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-1">
                                <a href="profile.php" className="text-dark">
                                  Satya Prakash
                                </a>
                              </h5>
                              <p
                                className="text-muted mb-0"
                                style={{ color: "#00add2 !important" }}
                              >
                                Fresher{" "}
                                <span className="badge border border-light rounded-circle bg-success p-1">
                                  <span className="visually-hidden">Online</span>
                                </span>
                              </p>
                              <p className="text-muted mb-0">
                                satyaprakash@gmail.com
                              </p>
                              <p className="text-muted mb-0">99902434443</p>
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-1">
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  Jobs Applied (12)
                                </a>
                              </h5>
                              <p className="text-muted mb-0">
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#c80064" }}>
                                    Shortlisted (2){" "}
                                  </span>
                                </a>{" "}
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#ff0000" }}>
                                    Rejected (5)
                                  </span>
                                </a>{" "}
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#008040" }}>
                                    Subscription (2){" "}
                                  </span>
                                </a>
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#009999" }}>
                                    Saved Jobs (23)
                                  </span>
                                </a>{" "}
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#ff00ff" }}>
                                    Reviews(3){" "}
                                  </span>
                                </a>
                                {/* <a href="javascript:void(0);" class="text-dark"><span style="color: #c80064;">Referred Jobs (1)</span></a> <br>
                                                                <a href="javascript:void(0);" class="text-dark"><span style="color: #c80064;">Reviews(3) </span></a> <br>
                                                                : 5 Min | <span style="color: #f46a6a;">Complete Required</span> : 500<br> <p class="text-muted mb-0"><i class="bx bx-calendar-event" style="color: #f46a6a;"></i> <strong>From</strong>  01-01-2021 <strong>to</strong> 02-02-2022  */}
                              </p>{" "}
                              <p />
                            </td>
                            <td>
                              Completeness{" "}
                              <span className="badge rounded-pill bg-success">
                                90%
                              </span>
                              <br />
                              <a href="javascript:void(0);" className="text-dark">
                                <span style={{ color: "#008040" }}>
                                  Recruiter Message (3){" "}
                                </span>
                              </a>{" "}
                              <br />
                              <a href="javascript:void(0);" className="text-dark">
                                <span style={{ color: "#808040" }}>
                                  Download Resume{" "}
                                  <i className="bx bxs-cloud-download" />{" "}
                                </span>
                              </a>{" "}
                              <br />
                              <a href="javascript:void(0);" className="text-dark">
                                <span style={{ color: "#444444" }}>
                                  Transaction History (5){" "}
                                </span>
                              </a>{" "}
                              <br />
                            </td>
                            <td>
                              <button
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop3"
                                className="btn btn-info waves-effect btn-label waves-light"
                              >
                                <i className="bx bx-street-view label-icon " />{" "}
                                View Details{" "}
                                {/* <span class="badge rounded-pill bg-danger">20</span> */}
                              </button>
                              {/* STATIC BACKDROP MODAL */}
                              <div
                                className="modal fade"
                                id="staticBackdrop3"
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="staticBackdropLabel"
                                aria-hidden="true"
                              >
                                <div
                                  className="modal-dialog modal-dialog-centered modal-lg"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5
                                        className="modal-title"
                                        id="staticBackdropLabel"
                                      >
                                        Satya Prakash - Information
                                      </h5>
                                      <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      />
                                    </div>
                                    <div className="modal-body">
                                      <p></p>
                                      <table className="table table-striped mb-0">
                                        <tbody>
                                          <tr>
                                            <td>Skills</td>
                                            <td>PHP, Lamp, Java</td>
                                          </tr>
                                          <tr>
                                            <td>Certifications</td>
                                            <td>GCP, CSM</td>
                                          </tr>
                                          <tr>
                                            <td>Current Company</td>
                                            <td>Mount Talent</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <p />
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-light"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* MODEL CLOSED */}
                            </td>
                            <td>
                              <ul className="list-inline font-size-20 contact-links mb-0">
                                <li className="list-inline-item px-2">
                                  <a
                                    href="javascript: void(0);"
                                    title="View Client"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                  >
                                    <i className="bx bxs-zoom-in" />
                                  </a>
                                </li>
                                <li className="list-inline-item px-2">
                                  <a
                                    href="javascript: void(0);"
                                    title="Edit User"
                                  >
                                    <i className="bx bx-edit" />
                                  </a>
                                </li>
                                <li className="list-inline-item px-2">
                                  <a
                                    href="javascript: void(0);"
                                    style={{ color: "red" }}
                                    title="Delete User"
                                  >
                                    <i className="bx bx-trash" />
                                  </a>
                                </li>
                              </ul>
                              {/* STATIC BACKDROP MODAL */}
                              <div
                                className="modal fade"
                                id="staticBackdrop"
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="staticBackdropLabel"
                                aria-hidden="true"
                              >
                                <div
                                  className="modal-dialog modal-dialog-centered modal-lg"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5
                                        className="modal-title"
                                        id="staticBackdropLabel"
                                      >
                                        Candidate Details
                                      </h5>
                                      <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      />
                                    </div>
                                    <div className="modal-body">
                                      <p></p>
                                      <table className="table table-striped mb-0">
                                        <tbody>
                                          <tr>
                                            <td style={{ width: "32%" }}>ID</td>
                                            <td>RZG000091</td>
                                          </tr>
                                          <tr>
                                            <td>Name</td>
                                            <td>Satya Prakash</td>
                                          </tr>
                                          <tr>
                                            <td>Skills</td>
                                            <td>PHP, Lamp, Java, GCP</td>
                                          </tr>
                                          <tr>
                                            <td>Certification</td>
                                            <td>GCP, CSM</td>
                                          </tr>
                                          <tr>
                                            <td>Email</td>
                                            <td>satyaprakash@gmail.co</td>
                                          </tr>
                                          <tr>
                                            <td>Phone No.</td>
                                            <td>99902434443</td>
                                          </tr>
                                          <tr>
                                            <td>Current Organization</td>
                                            <td>Mount Talent</td>
                                          </tr>
                                          <tr>
                                            <td>Notice Period</td>
                                            <td>Immediate Joiners</td>
                                          </tr>
                                          <tr>
                                            <td>Address</td>
                                            <td>H - 12, GNA2, Noida Extension</td>
                                          </tr>
                                          <tr>
                                            <td>Featured Profile Subscription</td>
                                            <td>No</td>
                                          </tr>
                                          <tr>
                                            <td>Profile Status</td>
                                            <td>
                                              <span className="badge rounded-pill bg-success">
                                                LIVE
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <p />
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-light"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* MODEL CLOSED */}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <button
                          type="button"
                          className="btn btn-primary waves-effect btn-label waves-light"
                        >
                          <i className="bx bxs-right-arrow-square label-icon" />{" "}
                          View All Candidates
                        </button>
                      </div>
                    </div>
                    {/* end table-responsive */}
                  </div>
                </div>
              </div>
            </div>
            {/* end row */}
            {/* end row */}
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title mb-4">Latest Employers</h4>
                    <div className="table-responsive">
                      <table className="table align-middle table-nowrap table-hover">
                        <thead className="table-light">
                          <tr>
                            <th scope="col" style={{ width: 70 }}>
                              ID
                            </th>
                            <th scope="col">Employer Information</th>
                            <th scope="col">Rozgar Stats</th>
                            <th scope="col">Profile Status</th>
                            <th scope="col">Other Information </th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td
                              style={{
                                color: "#ff8000",
                                fontSize: 15,
                                fontFamily: "nunito"
                              }}
                            >
                              RZG0000112
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-1">
                                <a href="profile.php" className="text-dark">
                                  Mount Talent Consulting
                                </a>
                              </h5>
                              <p
                                className="text-muted mb-0"
                                style={{ color: "#00add2 !important" }}
                              >
                                Consultant &amp; Recruiter{" "}
                                <span className="badge border border-light rounded-circle bg-success p-1">
                                  <span className="visually-hidden">
                                    Consultant &amp; Recruiter
                                  </span>
                                </span>
                              </p>
                              <p
                                className="text-muted mb-0"
                                style={{ color: "#0080ff !important" }}
                              >
                                <i className="bx bx-user font-size-16 align-middle me-1" />{" "}
                                Sushma Sharma
                              </p>
                              <p className="text-muted mb-0">susma@gmail.com</p>
                              <p className="text-muted mb-0">99986785343</p>
                              <p className="text-muted mb-0">
                                <span style={{ color: "#f46a6a" }}>
                                  Member Since
                                </span>{" "}
                                | 01-01-2021{" "}
                              </p>
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-1">
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  Jobs Posted (12)
                                </a>
                              </h5>
                              <p className="text-muted mb-0">
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#dd006f" }}>
                                    Featured Jobs (12){" "}
                                  </span>
                                </a>{" "}
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#8000ff" }}>
                                    Premium Jobs (12)
                                  </span>
                                </a>{" "}
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#008040" }}>
                                    Shortlisted (2)
                                  </span>
                                </a>
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#009999" }}>
                                    Rejected (5){" "}
                                  </span>
                                </a>
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#ff00ff" }}>
                                    Saved Candidates (23)
                                  </span>
                                </a>
                              </p>
                            </td>
                            <td>
                              Completeness{" "}
                              <span className="badge rounded-pill bg-success">
                                90%
                              </span>
                              <br />
                              <a href="javascript:void(0);" className="text-dark">
                                <span style={{ color: "#008040" }}>
                                  Candidate Message (3){" "}
                                </span>
                              </a>{" "}
                              <br />
                              <a href="javascript:void(0);" className="text-dark">
                                <span style={{ color: "#808040" }}>
                                  Subscription (4)
                                </span>
                              </a>
                              <br />
                              <a href="javascript:void(0);" className="text-dark">
                                <span style={{ color: "#444444" }}>
                                  Transaction History (5){" "}
                                </span>
                              </a>{" "}
                              <br />{" "}
                              <a href="javascript:void(0);" className="text-dark">
                                <span style={{ color: "#c80064" }}>
                                  Reviews(3){" "}
                                </span>
                              </a>
                            </td>
                            <td>
                              <button
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop4"
                                className="btn btn-info waves-effect btn-label waves-light"
                              >
                                <i className="bx bx-street-view label-icon " />{" "}
                                View Details{" "}
                                {/* <span class="badge rounded-pill bg-danger">20</span> */}
                              </button>
                              {/* STATIC BACKDROP MODAL */}
                              <div
                                className="modal fade"
                                id="staticBackdrop4"
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="staticBackdropLabel"
                                aria-hidden="true"
                              >
                                <div
                                  className="modal-dialog modal-dialog-centered modal-lg"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5
                                        className="modal-title"
                                        id="staticBackdropLabel"
                                      >
                                        Mount Talent Consulting - Information
                                      </h5>
                                      <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      />
                                    </div>
                                    <div className="modal-body">
                                      <p></p>
                                      <table className="table table-striped mb-0">
                                        <tbody>
                                          <tr>
                                            <td>Year Established</td>
                                            <td>2010</td>
                                          </tr>
                                          <tr>
                                            <td>Certifications</td>
                                            <td>Google Certified</td>
                                          </tr>
                                          <tr>
                                            <td>Location</td>
                                            <td>A - 51, Sector 10, Noida</td>
                                          </tr>
                                          <tr>
                                            <td>Logo</td>
                                            <td>
                                              <img
                                                src="https://www.mounttalent.com/wp-content/uploads/2022/03/cropped-mount-talent-1.png"
                                                width="100px"
                                              />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <p />
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-light"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* MODEL CLOSED */}
                            </td>
                            <td>
                              <ul className="list-inline font-size-20 contact-links mb-0">
                                <li className="list-inline-item px-2">
                                  <a
                                    href="javascript: void(0);"
                                    title="View Client"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop11"
                                  >
                                    <i className="bx bxs-zoom-in" />
                                  </a>
                                </li>
                                <li className="list-inline-item px-2">
                                  <a
                                    href="javascript: void(0);"
                                    title="Edit User"
                                  >
                                    <i className="bx bx-edit" />
                                  </a>
                                </li>
                                <li className="list-inline-item px-2">
                                  <a
                                    href="javascript: void(0);"
                                    style={{ color: "red" }}
                                    title="Delete User"
                                  >
                                    <i className="bx bx-trash" />
                                  </a>
                                </li>
                              </ul>
                              {/* STATIC BACKDROP MODAL */}
                              <div
                                className="modal fade"
                                id="staticBackdrop11"
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="staticBackdropLabel"
                                aria-hidden="true"
                              >
                                <div
                                  className="modal-dialog modal-dialog-centered modal-lg"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5
                                        className="modal-title"
                                        id="staticBackdropLabel"
                                      >
                                        Employer Details - Mount Talent Consulting
                                      </h5>
                                      <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      />
                                    </div>
                                    <div className="modal-body">
                                      <p></p>
                                      <table className="table table-striped mb-0">
                                        <tbody>
                                          <tr>
                                            <td style={{ width: "32%" }}>ID</td>
                                            <td>RZG0000112</td>
                                          </tr>
                                          <tr>
                                            <td>Companny</td>
                                            <td>Mount Talent Consulting</td>
                                          </tr>
                                          <tr>
                                            <td>Industry</td>
                                            <td>Consultant &amp; Recruiter</td>
                                          </tr>
                                          <tr>
                                            <td>Contact Person</td>
                                            <td>Sushma Sharma</td>
                                          </tr>
                                          <tr>
                                            <td>Email</td>
                                            <td>susma@gmail.com</td>
                                          </tr>
                                          <tr>
                                            <td>Phone No.</td>
                                            <td>99902434443</td>
                                          </tr>
                                          <tr>
                                            <td>Member Since</td>
                                            <td>01-01-2021</td>
                                          </tr>
                                          <tr>
                                            <td>Year Established</td>
                                            <td>2010</td>
                                          </tr>
                                          <tr>
                                            <td>Address</td>
                                            <td>A - 51, Sector 10, Noida</td>
                                          </tr>
                                          <tr>
                                            <td>Certifications</td>
                                            <td>Google Certified</td>
                                          </tr>
                                          <tr>
                                            <td>Logo</td>
                                            <td>
                                              <img
                                                src="https://www.mounttalent.com/wp-content/uploads/2022/03/cropped-mount-talent-1.png"
                                                width="100px"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>Profile Status</td>
                                            <td>
                                              <span className="badge rounded-pill bg-success">
                                                LIVE
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <p />
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-light"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* MODEL CLOSED */}
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                color: "#ff8000",
                                fontSize: 15,
                                fontFamily: "nunito"
                              }}
                            >
                              RZG0000112
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-1">
                                <a href="profile.php" className="text-dark">
                                  Mount Talent Consulting
                                </a>
                              </h5>
                              <p
                                className="text-muted mb-0"
                                style={{ color: "#00add2 !important" }}
                              >
                                Consultant &amp; Recruiter{" "}
                                <span className="badge border border-light rounded-circle bg-success p-1">
                                  <span className="visually-hidden">
                                    Consultant &amp; Recruiter
                                  </span>
                                </span>
                              </p>
                              <p
                                className="text-muted mb-0"
                                style={{ color: "#0080ff !important" }}
                              >
                                <i className="bx bx-user font-size-16 align-middle me-1" />{" "}
                                Sushma Sharma
                              </p>
                              <p className="text-muted mb-0">susma@gmail.com</p>
                              <p className="text-muted mb-0">99986785343</p>
                              <p className="text-muted mb-0">
                                <span style={{ color: "#f46a6a" }}>
                                  Member Since
                                </span>{" "}
                                | 01-01-2021{" "}
                              </p>
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-1">
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  Jobs Posted (12)
                                </a>
                              </h5>
                              <p className="text-muted mb-0">
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#dd006f" }}>
                                    Featured Jobs (12){" "}
                                  </span>
                                </a>{" "}
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#8000ff" }}>
                                    Premium Jobs (12)
                                  </span>
                                </a>{" "}
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#008040" }}>
                                    Shortlisted (2)
                                  </span>
                                </a>
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#009999" }}>
                                    Rejected (5){" "}
                                  </span>
                                </a>
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#ff00ff" }}>
                                    Saved Candidates (23)
                                  </span>
                                </a>
                              </p>
                            </td>
                            <td>
                              Completeness{" "}
                              <span className="badge rounded-pill bg-success">
                                90%
                              </span>
                              <br />
                              <a href="javascript:void(0);" className="text-dark">
                                <span style={{ color: "#008040" }}>
                                  Candidate Message (3){" "}
                                </span>
                              </a>{" "}
                              <br />
                              <a href="javascript:void(0);" className="text-dark">
                                <span style={{ color: "#808040" }}>
                                  Subscription (4)
                                </span>
                              </a>
                              <br />
                              <a href="javascript:void(0);" className="text-dark">
                                <span style={{ color: "#444444" }}>
                                  Transaction History (5){" "}
                                </span>
                              </a>{" "}
                              <br />{" "}
                              <a href="javascript:void(0);" className="text-dark">
                                <span style={{ color: "#c80064" }}>
                                  Reviews(3){" "}
                                </span>
                              </a>
                            </td>
                            <td>
                              <button
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop4"
                                className="btn btn-info waves-effect btn-label waves-light"
                              >
                                <i className="bx bx-street-view label-icon " />{" "}
                                View Details{" "}
                                {/* <span class="badge rounded-pill bg-danger">20</span> */}
                              </button>
                              {/* STATIC BACKDROP MODAL */}
                              <div
                                className="modal fade"
                                id="staticBackdrop4"
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="staticBackdropLabel"
                                aria-hidden="true"
                              >
                                <div
                                  className="modal-dialog modal-dialog-centered modal-lg"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5
                                        className="modal-title"
                                        id="staticBackdropLabel"
                                      >
                                        Mount Talent Consulting - Information
                                      </h5>
                                      <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      />
                                    </div>
                                    <div className="modal-body">
                                      <p></p>
                                      <table className="table table-striped mb-0">
                                        <tbody>
                                          <tr>
                                            <td>Year Established</td>
                                            <td>2010</td>
                                          </tr>
                                          <tr>
                                            <td>Certifications</td>
                                            <td>Google Certified</td>
                                          </tr>
                                          <tr>
                                            <td>Location</td>
                                            <td>A - 51, Sector 10, Noida</td>
                                          </tr>
                                          <tr>
                                            <td>Logo</td>
                                            <td>
                                              <img
                                                src="https://www.mounttalent.com/wp-content/uploads/2022/03/cropped-mount-talent-1.png"
                                                width="100px"
                                              />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <p />
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-light"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* MODEL CLOSED */}
                            </td>
                            <td>
                              <ul className="list-inline font-size-20 contact-links mb-0">
                                <li className="list-inline-item px-2">
                                  <a
                                    href="javascript: void(0);"
                                    title="View Client"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop11"
                                  >
                                    <i className="bx bxs-zoom-in" />
                                  </a>
                                </li>
                                <li className="list-inline-item px-2">
                                  <a
                                    href="javascript: void(0);"
                                    title="Edit User"
                                  >
                                    <i className="bx bx-edit" />
                                  </a>
                                </li>
                                <li className="list-inline-item px-2">
                                  <a
                                    href="javascript: void(0);"
                                    style={{ color: "red" }}
                                    title="Delete User"
                                  >
                                    <i className="bx bx-trash" />
                                  </a>
                                </li>
                              </ul>
                              {/* STATIC BACKDROP MODAL */}
                              <div
                                className="modal fade"
                                id="staticBackdrop11"
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="staticBackdropLabel"
                                aria-hidden="true"
                              >
                                <div
                                  className="modal-dialog modal-dialog-centered modal-lg"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5
                                        className="modal-title"
                                        id="staticBackdropLabel"
                                      >
                                        Employer Details - Mount Talent Consulting
                                      </h5>
                                      <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      />
                                    </div>
                                    <div className="modal-body">
                                      <p></p>
                                      <table className="table table-striped mb-0">
                                        <tbody>
                                          <tr>
                                            <td style={{ width: "32%" }}>ID</td>
                                            <td>RZG0000112</td>
                                          </tr>
                                          <tr>
                                            <td>Companny</td>
                                            <td>Mount Talent Consulting</td>
                                          </tr>
                                          <tr>
                                            <td>Industry</td>
                                            <td>Consultant &amp; Recruiter</td>
                                          </tr>
                                          <tr>
                                            <td>Contact Person</td>
                                            <td>Sushma Sharma</td>
                                          </tr>
                                          <tr>
                                            <td>Email</td>
                                            <td>susma@gmail.com</td>
                                          </tr>
                                          <tr>
                                            <td>Phone No.</td>
                                            <td>99902434443</td>
                                          </tr>
                                          <tr>
                                            <td>Member Since</td>
                                            <td>01-01-2021</td>
                                          </tr>
                                          <tr>
                                            <td>Year Established</td>
                                            <td>2010</td>
                                          </tr>
                                          <tr>
                                            <td>Address</td>
                                            <td>A - 51, Sector 10, Noida</td>
                                          </tr>
                                          <tr>
                                            <td>Certifications</td>
                                            <td>Google Certified</td>
                                          </tr>
                                          <tr>
                                            <td>Logo</td>
                                            <td>
                                              <img
                                                src="https://www.mounttalent.com/wp-content/uploads/2022/03/cropped-mount-talent-1.png"
                                                width="100px"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>Profile Status</td>
                                            <td>
                                              <span className="badge rounded-pill bg-success">
                                                LIVE
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <p />
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-light"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* MODEL CLOSED */}
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                color: "#ff8000",
                                fontSize: 15,
                                fontFamily: "nunito"
                              }}
                            >
                              RZG0000112
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-1">
                                <a href="profile.php" className="text-dark">
                                  Mount Talent Consulting
                                </a>
                              </h5>
                              <p
                                className="text-muted mb-0"
                                style={{ color: "#00add2 !important" }}
                              >
                                Consultant &amp; Recruiter{" "}
                                <span className="badge border border-light rounded-circle bg-success p-1">
                                  <span className="visually-hidden">
                                    Consultant &amp; Recruiter
                                  </span>
                                </span>
                              </p>
                              <p
                                className="text-muted mb-0"
                                style={{ color: "#0080ff !important" }}
                              >
                                <i className="bx bx-user font-size-16 align-middle me-1" />{" "}
                                Sushma Sharma
                              </p>
                              <p className="text-muted mb-0">susma@gmail.com</p>
                              <p className="text-muted mb-0">99986785343</p>
                              <p className="text-muted mb-0">
                                <span style={{ color: "#f46a6a" }}>
                                  Member Since
                                </span>{" "}
                                | 01-01-2021{" "}
                              </p>
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-1">
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  Jobs Posted (12)
                                </a>
                              </h5>
                              <p className="text-muted mb-0">
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#dd006f" }}>
                                    Featured Jobs (12){" "}
                                  </span>
                                </a>{" "}
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#8000ff" }}>
                                    Premium Jobs (12)
                                  </span>
                                </a>{" "}
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#008040" }}>
                                    Shortlisted (2)
                                  </span>
                                </a>
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#009999" }}>
                                    Rejected (5){" "}
                                  </span>
                                </a>
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#ff00ff" }}>
                                    Saved Candidates (23)
                                  </span>
                                </a>
                              </p>
                            </td>
                            <td>
                              Completeness{" "}
                              <span className="badge rounded-pill bg-success">
                                90%
                              </span>
                              <br />
                              <a href="javascript:void(0);" className="text-dark">
                                <span style={{ color: "#008040" }}>
                                  Candidate Message (3){" "}
                                </span>
                              </a>{" "}
                              <br />
                              <a href="javascript:void(0);" className="text-dark">
                                <span style={{ color: "#808040" }}>
                                  Subscription (4)
                                </span>
                              </a>
                              <br />
                              <a href="javascript:void(0);" className="text-dark">
                                <span style={{ color: "#444444" }}>
                                  Transaction History (5){" "}
                                </span>
                              </a>{" "}
                              <br />{" "}
                              <a href="javascript:void(0);" className="text-dark">
                                <span style={{ color: "#c80064" }}>
                                  Reviews(3){" "}
                                </span>
                              </a>
                            </td>
                            <td>
                              <button
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop4"
                                className="btn btn-info waves-effect btn-label waves-light"
                              >
                                <i className="bx bx-street-view label-icon " />{" "}
                                View Details{" "}
                                {/* <span class="badge rounded-pill bg-danger">20</span> */}
                              </button>
                              {/* STATIC BACKDROP MODAL */}
                              <div
                                className="modal fade"
                                id="staticBackdrop4"
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="staticBackdropLabel"
                                aria-hidden="true"
                              >
                                <div
                                  className="modal-dialog modal-dialog-centered modal-lg"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5
                                        className="modal-title"
                                        id="staticBackdropLabel"
                                      >
                                        Mount Talent Consulting - Information
                                      </h5>
                                      <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      />
                                    </div>
                                    <div className="modal-body">
                                      <p></p>
                                      <table className="table table-striped mb-0">
                                        <tbody>
                                          <tr>
                                            <td>Year Established</td>
                                            <td>2010</td>
                                          </tr>
                                          <tr>
                                            <td>Certifications</td>
                                            <td>Google Certified</td>
                                          </tr>
                                          <tr>
                                            <td>Location</td>
                                            <td>A - 51, Sector 10, Noida</td>
                                          </tr>
                                          <tr>
                                            <td>Logo</td>
                                            <td>
                                              <img
                                                src="https://www.mounttalent.com/wp-content/uploads/2022/03/cropped-mount-talent-1.png"
                                                width="100px"
                                              />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <p />
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-light"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* MODEL CLOSED */}
                            </td>
                            <td>
                              <ul className="list-inline font-size-20 contact-links mb-0">
                                <li className="list-inline-item px-2">
                                  <a
                                    href="javascript: void(0);"
                                    title="View Client"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop11"
                                  >
                                    <i className="bx bxs-zoom-in" />
                                  </a>
                                </li>
                                <li className="list-inline-item px-2">
                                  <a
                                    href="javascript: void(0);"
                                    title="Edit User"
                                  >
                                    <i className="bx bx-edit" />
                                  </a>
                                </li>
                                <li className="list-inline-item px-2">
                                  <a
                                    href="javascript: void(0);"
                                    style={{ color: "red" }}
                                    title="Delete User"
                                  >
                                    <i className="bx bx-trash" />
                                  </a>
                                </li>
                              </ul>
                              {/* STATIC BACKDROP MODAL */}
                              <div
                                className="modal fade"
                                id="staticBackdrop11"
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="staticBackdropLabel"
                                aria-hidden="true"
                              >
                                <div
                                  className="modal-dialog modal-dialog-centered modal-lg"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5
                                        className="modal-title"
                                        id="staticBackdropLabel"
                                      >
                                        Employer Details - Mount Talent Consulting
                                      </h5>
                                      <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      />
                                    </div>
                                    <div className="modal-body">
                                      <p></p>
                                      <table className="table table-striped mb-0">
                                        <tbody>
                                          <tr>
                                            <td style={{ width: "32%" }}>ID</td>
                                            <td>RZG0000112</td>
                                          </tr>
                                          <tr>
                                            <td>Companny</td>
                                            <td>Mount Talent Consulting</td>
                                          </tr>
                                          <tr>
                                            <td>Industry</td>
                                            <td>Consultant &amp; Recruiter</td>
                                          </tr>
                                          <tr>
                                            <td>Contact Person</td>
                                            <td>Sushma Sharma</td>
                                          </tr>
                                          <tr>
                                            <td>Email</td>
                                            <td>susma@gmail.com</td>
                                          </tr>
                                          <tr>
                                            <td>Phone No.</td>
                                            <td>99902434443</td>
                                          </tr>
                                          <tr>
                                            <td>Member Since</td>
                                            <td>01-01-2021</td>
                                          </tr>
                                          <tr>
                                            <td>Year Established</td>
                                            <td>2010</td>
                                          </tr>
                                          <tr>
                                            <td>Address</td>
                                            <td>A - 51, Sector 10, Noida</td>
                                          </tr>
                                          <tr>
                                            <td>Certifications</td>
                                            <td>Google Certified</td>
                                          </tr>
                                          <tr>
                                            <td>Logo</td>
                                            <td>
                                              <img
                                                src="https://www.mounttalent.com/wp-content/uploads/2022/03/cropped-mount-talent-1.png"
                                                width="100px"
                                              />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>Profile Status</td>
                                            <td>
                                              <span className="badge rounded-pill bg-success">
                                                LIVE
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <p />
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-light"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* MODEL CLOSED */}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <button
                          type="button"
                          className="btn btn-primary waves-effect btn-label waves-light"
                        >
                          <i className="bx bxs-right-arrow-square label-icon" />{" "}
                          View All Employers
                        </button>
                      </div>
                    </div>
                    {/* end table-responsive */}
                  </div>
                </div>
              </div>
            </div>
            {/* end row */}
            {/* end row */}
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title mb-4">Latest Jobs</h4>
                    <div className="table-responsive">
                      <table className="table align-middle table-nowrap table-hover">
                        <thead className="table-light">
                          <tr>
                            <th scope="col" style={{ width: 70 }}>
                              ID
                            </th>
                            <th scope="col">Job Information</th>
                            <th scope="col">Rozgar Stats</th>
                            <th scope="col">Employer Details</th>
                            <th scope="col">Other Information </th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td
                              style={{
                                color: "#ff8000",
                                fontSize: 15,
                                fontFamily: "nunito"
                              }}
                            >
                              RZG0000113
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-1">
                                <a href="#" className="text-dark">
                                  PHP Laravel Developer
                                </a>
                              </h5>
                              <p
                                className="text-muted mb-0"
                                style={{
                                  color: "#dd006f !important",
                                  fontSize: 12
                                }}
                              >
                                Premium Job
                              </p>
                              <p
                                className="text-muted mb-0"
                                style={{ color: "#00add2 !important" }}
                              >
                                ₹ 4,25,000 - 9,00,000 P.A.
                              </p>
                              <p
                                className="text-muted mb-0"
                                style={{ color: "#0080ff !important" }}
                              >
                                <i className="bx bx-street-view  font-size-16 align-middle me-1" />{" "}
                                Noida( Sector-16A Noida )
                              </p>
                              <p className="text-muted mb-0">
                                <span style={{ color: "#f46a6a" }}>Posted </span>{" "}
                                14 days ago{" "}
                              </p>
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-1">
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  Candidates Applied (13)
                                </a>
                              </h5>
                              <p className="text-muted mb-0">
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#009999" }}>
                                    Rejected (12){" "}
                                  </span>
                                </a>{" "}
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#008040" }}>
                                    Shortlisted (2)
                                  </span>
                                </a>
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#ff00ff" }}>
                                    Candidates Hold (23)
                                  </span>
                                </a>
                              </p>
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-1">
                                <a href="#" className="text-dark">
                                  Gyanwave
                                </a>
                              </h5>
                              <p
                                className="text-muted mb-0"
                                style={{ color: "#804000 !important" }}
                              >
                                GYANWAVE TECHNOLOGY PRIVATE LIMITED
                              </p>
                              <p
                                className="text-muted mb-0"
                                style={{ color: "#0080ff !important" }}
                              >
                                {" "}
                                Website : https://gyanwave.com
                              </p>
                            </td>
                            <td>
                              <button
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop41"
                                className="btn btn-info waves-effect btn-label waves-light"
                              >
                                <i className="bx bx-street-view label-icon " />{" "}
                                View Details{" "}
                                {/* <span class="badge rounded-pill bg-danger">20</span> */}
                              </button>
                              {/* STATIC BACKDROP MODAL */}
                              <div
                                className="modal fade"
                                id="staticBackdrop41"
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="staticBackdropLabel"
                                aria-hidden="true"
                              >
                                <div
                                  className="modal-dialog modal-dialog-centered modal-lg"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5
                                        className="modal-title"
                                        id="staticBackdropLabel"
                                      >
                                        Job Information
                                      </h5>
                                      <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      />
                                    </div>
                                    <div className="modal-body">
                                      <p></p>
                                      <table className="table table-striped mb-0">
                                        <tbody>
                                          <tr>
                                            <td>Job description</td>
                                            <td>
                                              Understand requirements &amp;
                                              functional specifications
                                              <br />
                                              Develop web applications,
                                              dashboards,APIs
                                              <br />
                                              Troubleshoot, test, maintain code
                                              &amp; its document
                                              <br />
                                              Analyse, design, code, debug, test,
                                              document &amp; deploy changes
                                              <br />
                                              Ensure foolproof performance of
                                              deliverable
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>Required Candidate profile</td>
                                            <td>
                                              Degree in B.TECH, BCA or equivalent
                                              <br />
                                              Excellent command on PHP/MySQL with
                                              Laravel Framework
                                              <br />
                                              Experienced in Vue, Laravel, Jquery
                                              &amp; AJAX
                                              <br />
                                              Good OOP knowledge
                                              <br />
                                              API based development knowledge is
                                              must
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>Role</td>
                                            <td>Software Development - Other</td>
                                          </tr>
                                          <tr>
                                            <td>Industry Type</td>
                                            <td>Advertising &amp; Marketing</td>
                                          </tr>
                                          <tr>
                                            <td>Functional Area</td>
                                            <td>Engineering - Software</td>
                                          </tr>
                                          <tr>
                                            <td>Employment Type</td>
                                            <td>Full Time, Permanent</td>
                                          </tr>
                                          <tr>
                                            <td>Role Category</td>
                                            <td>Software Development</td>
                                          </tr>
                                          <tr>
                                            <td>Education</td>
                                            <td>
                                              UG : BCA in Any Specialization,
                                              B.Tech/B.E. in Any Specialization,
                                              Other Graduate
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>Key Skills</td>
                                            <td>
                                              Mysql Database, Web Application
                                              Development, JQuery
                                              <br /> Laravel, Laravel Php, Vue.Js,
                                              Laravel, Php
                                              <br /> Framework, MySQL, Javascript,
                                              PHP Vue Framework, API
                                              <br /> Web Development, Ajax
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <p />
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-light"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* MODEL CLOSED */}
                            </td>
                            <td>
                              <ul className="list-inline font-size-20 contact-links mb-0">
                                {/* <li class="list-inline-item px-2">
                                                                <a href="javascript: void(0);" title="View Client"  data-bs-toggle="modal" data-bs-target="#staticBackdrop111"><i class="bx bxs-zoom-in"></i></a>
                                                            </li> */}
                                <li className="list-inline-item px-2">
                                  <a
                                    href="javascript: void(0);"
                                    title="Edit User"
                                  >
                                    <i className="bx bx-edit" />
                                  </a>
                                </li>
                                <li className="list-inline-item px-2">
                                  <a
                                    href="javascript: void(0);"
                                    style={{ color: "red" }}
                                    title="Delete User"
                                  >
                                    <i className="bx bx-trash" />
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                color: "#ff8000",
                                fontSize: 15,
                                fontFamily: "nunito"
                              }}
                            >
                              RZG0000113
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-1">
                                <a href="#" className="text-dark">
                                  PHP Laravel Developer
                                </a>
                              </h5>
                              <p
                                className="text-muted mb-0"
                                style={{
                                  color: "#dd006f !important",
                                  fontSize: 12
                                }}
                              >
                                Premium Job
                              </p>
                              <p
                                className="text-muted mb-0"
                                style={{ color: "#00add2 !important" }}
                              >
                                ₹ 4,25,000 - 9,00,000 P.A.
                              </p>
                              <p
                                className="text-muted mb-0"
                                style={{ color: "#0080ff !important" }}
                              >
                                <i className="bx bx-street-view  font-size-16 align-middle me-1" />{" "}
                                Noida( Sector-16A Noida )
                              </p>
                              <p className="text-muted mb-0">
                                <span style={{ color: "#f46a6a" }}>Posted </span>{" "}
                                14 days ago{" "}
                              </p>
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-1">
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  Candidates Applied (13)
                                </a>
                              </h5>
                              <p className="text-muted mb-0">
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#009999" }}>
                                    Rejected (12){" "}
                                  </span>
                                </a>{" "}
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#008040" }}>
                                    Shortlisted (2)
                                  </span>
                                </a>
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#ff00ff" }}>
                                    Candidates Hold (23)
                                  </span>
                                </a>
                              </p>
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-1">
                                <a href="#" className="text-dark">
                                  Gyanwave
                                </a>
                              </h5>
                              <p
                                className="text-muted mb-0"
                                style={{ color: "#804000 !important" }}
                              >
                                GYANWAVE TECHNOLOGY PRIVATE LIMITED
                              </p>
                              <p
                                className="text-muted mb-0"
                                style={{ color: "#0080ff !important" }}
                              >
                                {" "}
                                Website : https://gyanwave.com
                              </p>
                            </td>
                            <td>
                              <button
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop41"
                                className="btn btn-info waves-effect btn-label waves-light"
                              >
                                <i className="bx bx-street-view label-icon " />{" "}
                                View Details{" "}
                                {/* <span class="badge rounded-pill bg-danger">20</span> */}
                              </button>
                              {/* STATIC BACKDROP MODAL */}
                              <div
                                className="modal fade"
                                id="staticBackdrop41"
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="staticBackdropLabel"
                                aria-hidden="true"
                              >
                                <div
                                  className="modal-dialog modal-dialog-centered modal-lg"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5
                                        className="modal-title"
                                        id="staticBackdropLabel"
                                      >
                                        Job Information
                                      </h5>
                                      <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      />
                                    </div>
                                    <div className="modal-body">
                                      <p></p>
                                      <table className="table table-striped mb-0">
                                        <tbody>
                                          <tr>
                                            <td>Job description</td>
                                            <td>
                                              Understand requirements &amp;
                                              functional specifications
                                              <br />
                                              Develop web applications,
                                              dashboards,APIs
                                              <br />
                                              Troubleshoot, test, maintain code
                                              &amp; its document
                                              <br />
                                              Analyse, design, code, debug, test,
                                              document &amp; deploy changes
                                              <br />
                                              Ensure foolproof performance of
                                              deliverable
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>Required Candidate profile</td>
                                            <td>
                                              Degree in B.TECH, BCA or equivalent
                                              <br />
                                              Excellent command on PHP/MySQL with
                                              Laravel Framework
                                              <br />
                                              Experienced in Vue, Laravel, Jquery
                                              &amp; AJAX
                                              <br />
                                              Good OOP knowledge
                                              <br />
                                              API based development knowledge is
                                              must
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>Role</td>
                                            <td>Software Development - Other</td>
                                          </tr>
                                          <tr>
                                            <td>Industry Type</td>
                                            <td>Advertising &amp; Marketing</td>
                                          </tr>
                                          <tr>
                                            <td>Functional Area</td>
                                            <td>Engineering - Software</td>
                                          </tr>
                                          <tr>
                                            <td>Employment Type</td>
                                            <td>Full Time, Permanent</td>
                                          </tr>
                                          <tr>
                                            <td>Role Category</td>
                                            <td>Software Development</td>
                                          </tr>
                                          <tr>
                                            <td>Education</td>
                                            <td>
                                              UG : BCA in Any Specialization,
                                              B.Tech/B.E. in Any Specialization,
                                              Other Graduate
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>Key Skills</td>
                                            <td>
                                              Mysql Database, Web Application
                                              Development, JQuery
                                              <br /> Laravel, Laravel Php, Vue.Js,
                                              Laravel, Php
                                              <br /> Framework, MySQL, Javascript,
                                              PHP Vue Framework, API
                                              <br /> Web Development, Ajax
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <p />
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-light"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* MODEL CLOSED */}
                            </td>
                            <td>
                              <ul className="list-inline font-size-20 contact-links mb-0">
                                {/* <li class="list-inline-item px-2">
                                                                <a href="javascript: void(0);" title="View Client"  data-bs-toggle="modal" data-bs-target="#staticBackdrop111"><i class="bx bxs-zoom-in"></i></a>
                                                            </li> */}
                                <li className="list-inline-item px-2">
                                  <a
                                    href="javascript: void(0);"
                                    title="Edit User"
                                  >
                                    <i className="bx bx-edit" />
                                  </a>
                                </li>
                                <li className="list-inline-item px-2">
                                  <a
                                    href="javascript: void(0);"
                                    style={{ color: "red" }}
                                    title="Delete User"
                                  >
                                    <i className="bx bx-trash" />
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                color: "#ff8000",
                                fontSize: 15,
                                fontFamily: "nunito"
                              }}
                            >
                              RZG0000113
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-1">
                                <a href="#" className="text-dark">
                                  PHP Laravel Developer
                                </a>
                              </h5>
                              <p
                                className="text-muted mb-0"
                                style={{
                                  color: "#dd006f !important",
                                  fontSize: 12
                                }}
                              >
                                Premium Job
                              </p>
                              <p
                                className="text-muted mb-0"
                                style={{ color: "#00add2 !important" }}
                              >
                                ₹ 4,25,000 - 9,00,000 P.A.
                              </p>
                              <p
                                className="text-muted mb-0"
                                style={{ color: "#0080ff !important" }}
                              >
                                <i className="bx bx-street-view  font-size-16 align-middle me-1" />{" "}
                                Noida( Sector-16A Noida )
                              </p>
                              <p className="text-muted mb-0">
                                <span style={{ color: "#f46a6a" }}>Posted </span>{" "}
                                14 days ago{" "}
                              </p>
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-1">
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  Candidates Applied (13)
                                </a>
                              </h5>
                              <p className="text-muted mb-0">
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#009999" }}>
                                    Rejected (12){" "}
                                  </span>
                                </a>{" "}
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#008040" }}>
                                    Shortlisted (2)
                                  </span>
                                </a>
                                <br />
                                <a
                                  href="javascript:void(0);"
                                  className="text-dark"
                                >
                                  <span style={{ color: "#ff00ff" }}>
                                    Candidates Hold (23)
                                  </span>
                                </a>
                              </p>
                            </td>
                            <td>
                              <h5 className="font-size-14 mb-1">
                                <a href="#" className="text-dark">
                                  Gyanwave
                                </a>
                              </h5>
                              <p
                                className="text-muted mb-0"
                                style={{ color: "#804000 !important" }}
                              >
                                GYANWAVE TECHNOLOGY PRIVATE LIMITED
                              </p>
                              <p
                                className="text-muted mb-0"
                                style={{ color: "#0080ff !important" }}
                              >
                                {" "}
                                Website : https://gyanwave.com
                              </p>
                            </td>
                            <td>
                              <button
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop41"
                                className="btn btn-info waves-effect btn-label waves-light"
                              >
                                <i className="bx bx-street-view label-icon " />{" "}
                                View Details{" "}
                                {/* <span class="badge rounded-pill bg-danger">20</span> */}
                              </button>
                              {/* STATIC BACKDROP MODAL */}
                              <div
                                className="modal fade"
                                id="staticBackdrop41"
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="staticBackdropLabel"
                                aria-hidden="true"
                              >
                                <div
                                  className="modal-dialog modal-dialog-centered modal-lg"
                                  role="document"
                                >
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5
                                        className="modal-title"
                                        id="staticBackdropLabel"
                                      >
                                        Job Information
                                      </h5>
                                      <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      />
                                    </div>
                                    <div className="modal-body">
                                      <p></p>
                                      <table className="table table-striped mb-0">
                                        <tbody>
                                          <tr>
                                            <td>Job description</td>
                                            <td>
                                              Understand requirements &amp;
                                              functional specifications
                                              <br />
                                              Develop web applications,
                                              dashboards,APIs
                                              <br />
                                              Troubleshoot, test, maintain code
                                              &amp; its document
                                              <br />
                                              Analyse, design, code, debug, test,
                                              document &amp; deploy changes
                                              <br />
                                              Ensure foolproof performance of
                                              deliverable
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>Required Candidate profile</td>
                                            <td>
                                              Degree in B.TECH, BCA or equivalent
                                              <br />
                                              Excellent command on PHP/MySQL with
                                              Laravel Framework
                                              <br />
                                              Experienced in Vue, Laravel, Jquery
                                              &amp; AJAX
                                              <br />
                                              Good OOP knowledge
                                              <br />
                                              API based development knowledge is
                                              must
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>Role</td>
                                            <td>Software Development - Other</td>
                                          </tr>
                                          <tr>
                                            <td>Industry Type</td>
                                            <td>Advertising &amp; Marketing</td>
                                          </tr>
                                          <tr>
                                            <td>Functional Area</td>
                                            <td>Engineering - Software</td>
                                          </tr>
                                          <tr>
                                            <td>Employment Type</td>
                                            <td>Full Time, Permanent</td>
                                          </tr>
                                          <tr>
                                            <td>Role Category</td>
                                            <td>Software Development</td>
                                          </tr>
                                          <tr>
                                            <td>Education</td>
                                            <td>
                                              UG : BCA in Any Specialization,
                                              B.Tech/B.E. in Any Specialization,
                                              Other Graduate
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>Key Skills</td>
                                            <td>
                                              Mysql Database, Web Application
                                              Development, JQuery
                                              <br /> Laravel, Laravel Php, Vue.Js,
                                              Laravel, Php
                                              <br /> Framework, MySQL, Javascript,
                                              PHP Vue Framework, API
                                              <br /> Web Development, Ajax
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <p />
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-light"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* MODEL CLOSED */}
                            </td>
                            <td>
                              <ul className="list-inline font-size-20 contact-links mb-0">
                                {/* <li class="list-inline-item px-2">
                                                                <a href="javascript: void(0);" title="View Client"  data-bs-toggle="modal" data-bs-target="#staticBackdrop111"><i class="bx bxs-zoom-in"></i></a>
                                                            </li> */}
                                <li className="list-inline-item px-2">
                                  <a
                                    href="javascript: void(0);"
                                    title="Edit User"
                                  >
                                    <i className="bx bx-edit" />
                                  </a>
                                </li>
                                <li className="list-inline-item px-2">
                                  <a
                                    href="javascript: void(0);"
                                    style={{ color: "red" }}
                                    title="Delete User"
                                  >
                                    <i className="bx bx-trash" />
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <button
                          type="button"
                          className="btn btn-primary waves-effect btn-label waves-light"
                        >
                          <i className="bx bxs-right-arrow-square label-icon" />{" "}
                          View All Jobs
                        </button>
                      </div>
                    </div>
                    {/* end table-responsive */}
                  </div>
                </div>
              </div>
            </div>
            {/* end row */}
          </div>{" "}
          {/* container-fluid */}
        </div>
        {/* End Page-content */}
        {/* Modal */}
        <div
          className="modal fade transaction-detailModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="transaction-detailModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="transaction-detailModalLabel">
                  Order Details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <p className="mb-2">
                  Product id: <span className="text-primary">#SK2540</span>
                </p>
                <p className="mb-4">
                  Billing Name:{" "}
                  <span className="text-primary">Neal Matthews</span>
                </p>
                <div className="table-responsive">
                  <table className="table align-middle table-nowrap">
                    <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <div>
                            <img
                              src="assets/images/product/img-7.png"
                              alt=""
                              className="avatar-sm"
                            />
                          </div>
                        </th>
                        <td>
                          <div>
                            <h5 className="text-truncate font-size-14">
                              Wireless Headphone (Black)
                            </h5>
                            <p className="text-muted mb-0">$ 225 x 1</p>
                          </div>
                        </td>
                        <td>$ 255</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div>
                            <img
                              src="assets/images/product/img-4.png"
                              alt=""
                              className="avatar-sm"
                            />
                          </div>
                        </th>
                        <td>
                          <div>
                            <h5 className="text-truncate font-size-14">
                              Phone patterned cases
                            </h5>
                            <p className="text-muted mb-0">$ 145 x 1</p>
                          </div>
                        </td>
                        <td>$ 145</td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <h6 className="m-0 text-right">Sub Total:</h6>
                        </td>
                        <td>$ 400</td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <h6 className="m-0 text-right">Shipping:</h6>
                        </td>
                        <td>Free</td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <h6 className="m-0 text-right">Total:</h6>
                        </td>
                        <td>$ 400</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end modal */}
        {/*?php
                      include('footer.php');
                  ?*/}
      </div>
      {/* end main content*/}
    </div>
    {/* END layout-wrapper */}
    {/* Right Sidebar */}
    <div className="right-bar">
      <div data-simplebar="" className="h-100">
        <div className="rightbar-title d-flex align-items-center px-3 py-4">
          <h5 className="m-0 me-2">Settings</h5>
          <a href="javascript:void(0);" className="right-bar-toggle ms-auto">
            <i className="mdi mdi-close noti-icon" />
          </a>
        </div>
        {/* Settings */}
        <hr className="mt-0" />
        <h6 className="text-center mb-0">Choose Layouts</h6>
        <div className="p-4">
          <div className="mb-2">
            <img
              src="assets/images/layouts/layout-1.jpg"
              className="img-thumbnail"
              alt="layout images"
            />
          </div>
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input theme-choice"
              type="checkbox"
              id="light-mode-switch"
              defaultChecked=""
            />
            <label className="form-check-label" htmlFor="light-mode-switch">
              Light Mode
            </label>
          </div>
          <div className="mb-2">
            <img
              src="assets/images/layouts/layout-2.jpg"
              className="img-thumbnail"
              alt="layout images"
            />
          </div>
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input theme-choice"
              type="checkbox"
              id="dark-mode-switch"
            />
            <label className="form-check-label" htmlFor="dark-mode-switch">
              Dark Mode
            </label>
          </div>
          <div className="mb-2">
            <img
              src="assets/images/layouts/layout-3.jpg"
              className="img-thumbnail"
              alt="layout images"
            />
          </div>
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input theme-choice"
              type="checkbox"
              id="rtl-mode-switch"
            />
            <label className="form-check-label" htmlFor="rtl-mode-switch">
              RTL Mode
            </label>
          </div>
          <div className="mb-2">
            <img
              src="assets/images/layouts/layout-4.jpg"
              className="img-thumbnail"
              alt="layout images"
            />
          </div>
          <div className="form-check form-switch mb-5">
            <input
              className="form-check-input theme-choice"
              type="checkbox"
              id="dark-rtl-mode-switch"
            />
            <label className="form-check-label" htmlFor="dark-rtl-mode-switch">
              Dark RTL Mode
            </label>
          </div>
        </div>
      </div>{" "}
      {/* end slimscroll-menu*/}
    </div>
    {/* /Right-bar */}
    {/* Right bar overlay*/}
    <div className="rightbar-overlay" />
  </>
  

  );
}

export default Dashboard;
