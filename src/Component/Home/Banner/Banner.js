import React from "react";
import img from "../../../image/image/banner-removebg-preview.png";
import img1 from "../../../image/Banner/banner.png";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={img} alt="" className="-mb-44" style={{ width: "200vw" }} />
        <div className="text-white  ml-10 text-start">
            <h2 className="mb-5 bg-blue-700 rounded-lg p-2">GET DISCOUNT 25% DURING COVID - 19R</h2>
          <h1 className="text-5xl font-bold">
            Classical Education
            <br />
            For The Future...
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
