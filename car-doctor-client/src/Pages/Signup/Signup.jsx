import React from "react";
import { Link } from "react-router-dom";
import loginImg from "../../assets/login/login.svg";

const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 lg:text-left pr-10">
          <img src={loginImg} alt="" srcset="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl text-center mt-10 font-bold">Signup</h1>
          <form className="card-body" onSubmit={handleSignup}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="username"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="confirm password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              {/* <button className="btn bg-orange-600 text-white hover:btn-warning">
                  Login
                </button> */}
              <input
                className="btn bg-orange-600 text-white hover:btn-warning"
                type="submit"
                value="Signup"
              />
            </div>
          </form>
          <p className="p-10">
            Already have an account?Go to
            <Link className="text-orange-600 font-semibold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
