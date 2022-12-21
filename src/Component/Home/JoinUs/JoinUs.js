import React from "react";
import img1 from "../../../image/image/student-1-353-removebg-preview.png";
import img2 from "../../../image/image/graduate2.png";

const JoinUs = () => {
  return (
    <div className="flex gap-2 mb-20 mt-20">
      
      <div className="hero w-1/2 border-r">
        <div className="hero-overlay rounded-lg  bg-blue-200"></div>
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="w-1/2">
            <img src={img1} alt="" className="-mb-5 w-screen" />
          </div>
          <div className="text-white text-gray-800 ml-10 text-start">
            <h2 className="font-semibold">POPULAR COURSES</h2>
            <h1 className="text-3xl font-bold">
              Get The Best Courses & Upgrade Your Skills
            </h1>
            <br />
            <button className="btn text-white btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="hero w-1/2">
        <div className="hero-overlay rounded-lg bg-opacity-60"></div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img2} alt="" className="-mb-4 w-40" />
          <div className="text-white  ml-10 text-start">
            <h2 className="font-semibold">POPULAR COURSES</h2>
            <h1 className="text-3xl font-bold">
              Get The Best Courses & Upgrade Your Skills
            </h1>
            <br></br>
            <button className="btn text-white btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
