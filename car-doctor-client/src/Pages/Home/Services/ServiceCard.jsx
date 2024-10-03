import React from "react";

const ServiceCard = ({ service }) => {
  const { img, price, title } = service;
  return (
    <div className="card bg-base-100 w-96 shadow-xl h-90">
      <figure className="h-1/2">
        {/* <img src={service.img} alt="Shoes" /> */}
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body h-1/2">
        <h2 className="card-title text-3xl">{service.title}</h2>
        <div className="flex justify-between">
          <p className="text-lg font-bold text-orange-600">
            Price : ${service.price}
          </p>
          <a className="btn btn-circle text-orange-600 hover:bg-orange-700 hover:text-white -mt-3">
            ---❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
