import React from "react";
import person from "../../../assets/about_us/person.jpg";
import parts from "../../../assets/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen flex">
      <div className="hero-content ">
        <div className="w-1/2 mt-2">
          <img
            src={person}
            className="max-w-sm rounded-lg shadow-2xl absolute w-[80%] h-[360px]"
          />
          <img
            src={parts}
            className="max-w-sm rounded-lg shadow-2xl relative w-[50%] ml-44 mt-[150px] h-[250px] border-[15px] border-white bg-zinc-900"
          />
        </div>
        <div className="w-1/2 -ml-5 mt-5">
          <p className=" text-lg font-bold mt-[20px] text-orange-600">
            About Us
          </p>
          <h1 className="text-5xl font-bold mb-5 w-[400px]">
            We are qualified & of experience in this field
          </h1>
          <p className="py-3 w-[500px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-3 w-[500px]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable
          </p>
          <button className="btn bg-orange-600 border-orange-600 text-white text-lg hover:bg-orange-700 mt-3">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
