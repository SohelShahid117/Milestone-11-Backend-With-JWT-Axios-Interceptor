import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      //   .then((data) => console.log(data));
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div>
      <div className="text-center mx-auto">
        <h3 className="text-orange-600 text-xl font-bold">Service</h3>
        <h1 className="text-5xl font-semibold my-5">Our Service Area</h1>
        <p className="w-[50%] mx-auto my-5">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10 gap-5">
        {services.map((service) => (
          <ServiceCard service={service} key={service._id}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
