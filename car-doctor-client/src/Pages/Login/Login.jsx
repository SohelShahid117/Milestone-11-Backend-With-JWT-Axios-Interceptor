import React, { useContext } from "react";
import loginImg from "../../assets/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e);
    const form = e.target;
    // const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // createUser(email, password);
    signIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 lg:text-left pr-10">
          <img src={loginImg} alt="" srcset="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl text-center mt-10 font-bold">Login</h1>
          <form className="card-body" onSubmit={handleLogin}>
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
                placeholder="password"
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
                value="Login"
              />
            </div>
          </form>
          <p className="p-10">
            New to Car Doctors?Go to
            <Link className="text-orange-600 font-semibold" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
