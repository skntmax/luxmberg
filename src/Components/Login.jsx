import React from "react";

function Login() {
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
                          Username
                        </label>
                        <input
                          type="text"
                          className="form-control fs-14 shadow-none"
                          id="username"
                          placeholder="Enter username"
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
                          {/* <button
                            className="btn btn-light "
                            type="button"
                            id="password-addon"
                          >
                            <i className="mdi mdi-eye-outline"></i>
                          </button> */}
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
                          Log In
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <a href="" className="text-muted">
                          <i className="mdi mdi-lock me-1"></i> Forgot your
                          password?
                        </a>
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
}

export default Login;