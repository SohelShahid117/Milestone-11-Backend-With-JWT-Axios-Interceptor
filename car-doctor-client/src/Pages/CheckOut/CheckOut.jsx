import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { service_id, title, price } = service;
  //   console.log(service);
  return (
    <div className="hero mt-10 bg-base-100">
      <div className="card w-full">
        <h2 className="text-3xl text-center">Book Service is : {title}</h2>
        <form className="card-body grid">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Phone</span>
              </label>
              <input
                type="number"
                placeholder="Your Phone"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Message</span>
            </label>
            <input
              type="textarea"
              placeholder="Your Message"
              className="input input-bordered h-40"
              required
            />
          </div>

          {/* <button className="btn btn-block bg-orange-600 text-white hover:bg-orange-700 my-5">
            Order Confirm
          </button> */}
          <input
            className="btn btn-block bg-orange-600 text-white hover:bg-orange-700 my-5"
            type="button"
            value="Order Confirm"
          />
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
