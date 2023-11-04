import React from 'react'

function Header() {
  return (
    <header id="page-topbar">
  <div className="navbar-header">
    <div className="d-flex">
      {/* LOGO */}
      <div className="navbar-brand-box">
        <a href="<?=$URLadmin?>/dashboard.php" className="logo logo-dark">
          <span className="logo-sm">
            <img
              src="assets/images/rozgar.png"
              style={{ width: 112, marginBottom: 5, marginRight: 92 }}
            />
          </span>
          <span
            className="logo-lg"
            style={{ fontSize: 21, color: "#9ec035", fontFamily: "oswald" }}
          >
            <span
              href="dashboard.php"
              className=""
              style={{
                color: "#fefcac",
                fontFamily: "nunito",
                fontSize: 22,
                fontWeight: 700
              }}
            >
              <img
                src="assets/images/rozgar.png"
                style={{ width: 112, marginBottom: 5, marginRight: 92 }}
              />
            </span>
            {/* <img src="assets/images/logo-light.png" alt="" height="19"> */}
          </span>
        </a>
        <a href="<?=$URLadmin?>/dashboard.php" className="logo logo-light">
          <span className="logo-sm">
            <img src="assets/images/logo-light.svg" alt="" height={22} />
          </span>
          <span
            className="logo-lg"
            style={{ fontSize: 21, color: "#9ec035", fontFamily: "oswald" }}
          >
            <span
              href="dashboard.php"
              title="Rozgar"
              className=""
              style={{
                color: "#fefcac",
                fontFamily: "nunito",
                fontSize: 22,
                fontWeight: 700
              }}
            >
              <img
                src="assets/images/rozgar.png"
                style={{ width: 112, marginBottom: 5, marginRight: 92 }}
              />
            </span>
          </span>
        </a>
      </div>
      <button
        type="button"
        className="btn btn-sm px-3 font-size-16 header-item waves-effect"
        id="vertical-menu-btn"
      >
        <i className="fa fa-fw fa-bars" />
      </button>
      {/* App Search*/}
      <form className="app-search d-none d-lg-block">
        <div className="position-relative">
          <input type="text" className="form-control" placeholder="Search..." />
          <span className="bx bx-search-alt" />
        </div>
      </form>
    </div>
    <div className="d-flex">
      <div className="dropdown d-inline-block d-lg-none ms-2">
        <button
          type="button"
          className="btn header-item noti-icon waves-effect"
          id="page-header-search-dropdown"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="mdi mdi-magnify" />
        </button>
        <div
          className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
          aria-labelledby="page-header-search-dropdown"
        >
          <form className="p-3">
            <div className="form-group m-0">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search ..."
                  aria-label="Recipient's username"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">
                    <i className="mdi mdi-magnify" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="dropdown d-none d-lg-inline-block ms-1">
        <button
          type="button"
          className="btn header-item noti-icon waves-effect"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="bx bx-customize" />
        </button>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
          <div className="px-lg-2">
            <div className="row g-0">
              <div className="col">
                <a className="dropdown-icon-item" href="#">
                  <img src="assets/images/brands/github.png" alt="Clients" />
                  <span>Candidates</span>
                </a>
              </div>
              <div className="col">
                <a className="dropdown-icon-item" href="#">
                  <img
                    src="assets/images/brands/bitbucket.png"
                    alt="Employers"
                  />
                  <span>Employers</span>
                </a>
              </div>
              <div className="col">
                <a className="dropdown-icon-item" href="#">
                  <img src="assets/images/brands/dribbble.png" alt="Jobs" />
                  <span>Jobs</span>
                </a>
              </div>
            </div>
            <div className="row g-0">
              <div className="col">
                <a className="dropdown-icon-item" href="#">
                  <img src="assets/images/brands/dropbox.png" alt="Ads" />
                  <span>Active ds</span>
                </a>
              </div>
              <div className="col">
                <a className="dropdown-icon-item" href="admin-user-list.php">
                  <img
                    src="assets/images/brands/mail_chimp.png"
                    alt="Admin User"
                  />
                  <span>Admin User</span>
                </a>
              </div>
              <div className="col">
                <a className="dropdown-icon-item" href="#">
                  <img
                    src="assets/images/brands/slack.png"
                    alt="HRMS Subscriptions"
                  />
                  <span>HRMS Subscriptions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown d-none d-lg-inline-block ms-1">
        <button
          type="button"
          className="btn header-item noti-icon waves-effect"
          data-bs-toggle="fullscreen"
        >
          <i className="bx bx-fullscreen" />
        </button>
      </div>
      <div className="dropdown d-inline-block">
        <button
          type="button"
          className="btn header-item noti-icon waves-effect"
          id="page-header-notifications-dropdown"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="bx bx-bell bx-tada" />
          <span className="badge bg-danger rounded-pill">3</span>
        </button>
        <div
          className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
          aria-labelledby="page-header-notifications-dropdown"
        >
          <div className="p-3">
            <div className="row align-items-center">
              <div className="col">
                <h6 className="m-0" key="t-notifications">
                  {" "}
                  Notifications{" "}
                </h6>
              </div>
              <div className="col-auto">
                <a href="#!" className="small" key="t-view-all">
                  {" "}
                  View All
                </a>
              </div>
            </div>
          </div>
          <div data-simplebar="" style={{ maxHeight: 230 }}>
            <a
              href="javascript: void(0);"
              className="text-reset notification-item"
            >
              <div className="d-flex">
                <div className="avatar-xs me-3">
                  <span className="avatar-title bg-primary rounded-circle font-size-16">
                    <i className="bx bx-cart" />
                  </span>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1" key="t-your-order">
                    Your order is placed
                  </h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1" key="t-grammer">
                      If several languages coalesce the grammar
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-clock-outline" />{" "}
                      <span key="t-min-ago">3 min ago</span>
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="javascript: void(0);"
              className="text-reset notification-item"
            >
              <div className="d-flex">
                <img
                  src="assets/images/users/avatar-3.jpg"
                  className="me-3 rounded-circle avatar-xs"
                  alt="user-pic"
                />
                <div className="flex-grow-1">
                  <h6 className="mb-1">James Lemire</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1" key="t-simplified">
                      It will seem like simplified English.
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-clock-outline" />{" "}
                      <span key="t-hours-ago">1 hours ago</span>
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="javascript: void(0);"
              className="text-reset notification-item"
            >
              <div className="d-flex">
                <div className="avatar-xs me-3">
                  <span className="avatar-title bg-success rounded-circle font-size-16">
                    <i className="bx bx-badge-check" />
                  </span>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1" key="t-shipped">
                    Your item is shipped
                  </h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1" key="t-grammer">
                      If several languages coalesce the grammar
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-clock-outline" />{" "}
                      <span key="t-min-ago">3 min ago</span>
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="javascript: void(0);"
              className="text-reset notification-item"
            >
              <div className="d-flex">
                <img
                  src="assets/images/users/avatar-4.jpg"
                  className="me-3 rounded-circle avatar-xs"
                  alt="user-pic"
                />
                <div className="flex-grow-1">
                  <h6 className="mb-1">Salena Layfield</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1" key="t-occidental">
                      As a skeptical Cambridge friend of mine occidental.
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-clock-outline" />{" "}
                      <span key="t-hours-ago">1 hours ago</span>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="p-2 border-top d-grid">
            <a
              className="btn btn-sm btn-link font-size-14 text-center"
              href="javascript:void(0)"
            >
              <i className="mdi mdi-arrow-right-circle me-1" />{" "}
              <span key="t-view-more">View More..</span>
            </a>
          </div>
        </div>
      </div>
      <div className="dropdown d-inline-block">
        <button
          type="button"
          className="btn header-item waves-effect"
          id="page-header-user-dropdown"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            className="rounded-circle header-profile-user"
            src="assets/images/users/avatar-2.jpg"
            alt="Header Avatar"
          />
          <span className="d-none d-xl-inline-block ms-1" key="t-henry">
            Kunal Gupta
          </span>
          <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
        </button>
        <div className="dropdown-menu dropdown-menu-end">
          {/* item*/}
          <a className="dropdown-item" href="profile.php">
            <i className="bx bx-user font-size-16 align-middle me-1" />{" "}
            <span key="t-profile">Profile</span>
          </a>
          <a className="dropdown-item d-block" href="update-profile.php">
            <i className="bx bx-wrench font-size-16 align-middle me-1" />{" "}
            <span key="t-settings">Update Profile</span>
          </a>
          <a className="dropdown-item" href="auth-lock-screen.php">
            <i className="bx bx-lock-open font-size-16 align-middle me-1" />{" "}
            <span key="t-lock-screen">Lock screen</span>
          </a>
          <div className="dropdown-divider" />
          <a className="dropdown-item text-danger" href="#">
            <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />{" "}
            <span key="t-logout">Logout</span>
          </a>
        </div>
      </div>
      <div className="dropdown d-inline-block">
        <button
          type="button"
          className="btn header-item noti-icon waves-effect"
          onclick="javascript:document.location.href='update-profile.php';"
        >
          <i className="bx bx-cog bx-spin" />
        </button>
      </div>
    </div>
  </div>
</header>

  )
}

export default Header