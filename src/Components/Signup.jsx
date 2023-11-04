import React from "react";

const Signup = () => {
  return (
    <div>
      <div className=" py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card border-0 bg-transparent shadow">
                <img
                  src="https://luxor.in/media/logo/stores/1/luxor-logo-pic.png"
                  alt="Logo"
                  className="img-fluid"
                />
                <div className="card-body mt-4">
                  <div className="p-2">
                    <form className="form-horizontal" action="" method="POST">
                      <div className="mb-3">
                        <label for="username" className="form-label fs-14">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control fs-14 shadow-none"
                          id="FullName"
                          placeholder="Enter Fullname"
                        />
                      </div>
                      <div className="mb-3">
                        <label for="email" className="form-label fs-14">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control fs-14 shadow-none"
                          id="Email"
                          placeholder="Enter email"
                        />
                      </div>
                      <div className="mb-3">
                        <label for="number" className="form-label fs-14">
                          Phone No
                        </label>
                        <input
                          type="number"
                          className="form-control fs-14 shadow-none"
                          id="Phone no"
                          placeholder="Enter Phone No"
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label fs-14">Password</label>
                        <div className="input-group">
                          <input
                            type="password"
                            className="form-control fs-14 shadow-none"
                            placeholder="Enter password"
                            aria-label="Password"
                            aria-describedby="password-addon"
                          />
                        </div>
                      </div>

                      <div className="form-check mb-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="remember-check"
                        />
                        <label
                          className="form-check-label"
                          for="remember-check"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-primary bg_lightred text-white fs-16"
                          type="submit"
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
