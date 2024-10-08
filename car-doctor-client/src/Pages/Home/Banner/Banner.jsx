import React from "react";
import img1 from "../../../assets/banner/1.jpg";
import img2 from "../../../assets/banner/2.jpg";
import img3 from "../../../assets/banner/3.jpg";
import img4 from "../../../assets/banner/4.jpg";
import img5 from "../../../assets/banner/5.jpg";
import img6 from "../../../assets/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full mt-10">
      <div id="slide1" className="carousel-item relative w-full h-[600px]">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute left-0 right-5 flex transform justify-start rounded-xl">
          <div className="text-white w-1/3 bg-gradient-to-r from-gray-900 py-[111px] rounded-xl">
            <h2 className="text-6xl font-bold  ml-10">
              Affordable Price For Car Servicing
            </h2>
            <p className="my-10  ml-10">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="ml-10">
              <button className="btn bg-orange-600 border-orange-600 text-white text-lg hover:bg-orange-700 mr-10">
                Discover More
              </button>
              <button className="btn btn-outline border-white text-white text-lg hover:bg-transparent hover:border-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-[80%] flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide6"
            className="btn btn-circle mr-5 hover:bg-orange-600 hover:text-white"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle hover:bg-orange-600 hover:text-white"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-[600px]">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute left-0 right-5 flex transform justify-start rounded-xl">
          <div className="text-white w-1/3 bg-gradient-to-r from-gray-900 py-[111px] rounded-xl">
            <h2 className="text-6xl font-bold  ml-10">
              Affordable Price For Car Servicing
            </h2>
            <p className="my-10  ml-10">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className=" ml-10">
              <button className="btn bg-orange-600 border-orange-600 text-white text-lg hover:bg-orange-700 mr-10">
                Discover More
              </button>
              <button className="btn btn-outline border-white text-white text-lg hover:bg-transparent hover:border-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-[80%] flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide1"
            className="btn btn-circle mr-5 hover:bg-orange-600 hover:text-white"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle hover:bg-orange-600 hover:text-white"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-[600px]">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute left-0 right-5 flex transform justify-start rounded-xl">
          <div className="text-white w-1/3 bg-gradient-to-r from-gray-900 py-[111px] rounded-xl">
            <h2 className="text-6xl font-bold  ml-10">
              Affordable Price For Car Servicing
            </h2>
            <p className="my-10  ml-10">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className=" ml-10">
              <button className="btn bg-orange-600 border-orange-600 text-white text-lg hover:bg-orange-700 mr-10">
                Discover More
              </button>
              <button className="btn btn-outline border-white text-white text-lg hover:bg-transparent hover:border-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-[80%] flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide2"
            className="btn btn-circle mr-5 hover:bg-orange-600 hover:text-white"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle hover:bg-orange-600 hover:text-white"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-[600px]">
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute left-0 right-5 flex transform justify-start rounded-xl">
          <div className="text-white w-1/3 bg-gradient-to-r from-gray-900 py-[111px] rounded-xl">
            <h2 className="text-6xl font-bold  ml-10">
              Affordable Price For Car Servicing
            </h2>
            <p className="my-10  ml-10">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className=" ml-10">
              <button className="btn bg-orange-600 border-orange-600 text-white text-lg hover:bg-orange-700 mr-10">
                Discover More
              </button>
              <button className="btn btn-outline border-white text-white text-lg hover:bg-transparent hover:border-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-[80%] flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide3"
            className="btn btn-circle mr-5 hover:bg-orange-600 hover:text-white"
          >
            ❮
          </a>
          <a
            href="#slide5"
            className="btn btn-circle hover:bg-orange-600 hover:text-white"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full h-[600px]">
        <img src={img5} className="w-full rounded-xl" />
        <div className="absolute left-0 right-5 flex transform justify-start rounded-xl">
          <div className="text-white w-1/3 bg-gradient-to-r from-gray-900 py-[111px] rounded-xl">
            <h2 className="text-6xl font-bold  ml-10">
              Affordable Price For Car Servicing
            </h2>
            <p className="my-10  ml-10">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className=" ml-10">
              <button className="btn bg-orange-600 border-orange-600 text-white text-lg hover:bg-orange-700 mr-10">
                Discover More
              </button>
              <button className="btn btn-outline border-white text-white text-lg hover:bg-transparent hover:border-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-[80%] flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide4"
            className="btn btn-circle mr-5 hover:bg-orange-600 hover:text-white"
          >
            ❮
          </a>
          <a
            href="#slide6"
            className="btn btn-circle hover:bg-orange-600 hover:text-white"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full h-[600px]">
        <img src={img6} className="w-full rounded-xl" />
        <div className="absolute left-0 right-5 flex transform justify-start rounded-xl">
          <div className="text-white w-1/3 bg-gradient-to-r from-gray-900 py-[111px] rounded-xl">
            <h2 className="text-6xl font-bold  ml-10">
              Affordable Price For Car Servicing
            </h2>
            <p className="my-10  ml-10">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className=" ml-10">
              <button className="btn bg-orange-600 border-orange-600 text-white text-lg hover:bg-orange-700 mr-10">
                Discover More
              </button>
              <button className="btn btn-outline border-white text-white text-lg hover:bg-transparent hover:border-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-[80%] flex -translate-y-1/2 transform justify-end">
          <a
            href="#slide5"
            className="btn btn-circle mr-5 hover:bg-orange-600 hover:text-white"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle hover:bg-orange-600 hover:text-white"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
