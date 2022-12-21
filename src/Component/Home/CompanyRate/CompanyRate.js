import React from "react";
import rate from "../../../image/image/rate2.jpg";

const CompanyRate = () => {
  return (
    <div className="hero mt-24">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative w-1/2">
          <img src={rate} alt="" className="w-full rounded-lg shadow-2xl" />
          <div className="card duration-500 hover:scale-105 w-72 -mt-20 bg-base-100 shadow-xl">
            <div className="card-body">
            <h2 className="text-2xl font-bold">Total Students</h2>
              <div className="avatar-group -space-x-6">
                <div className="avatar ">
               
                  <div className="w-12">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral-focus text-neutral-content">
                    <span>+99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 ml-5 text-start">
          <p className="text-2xl font-bold text-orange-600">
            What People Think
          </p>
          <h1 className="text-5xl font-bold my-5">About Acadu Company</h1>
          <p className="py-6">
            Synergistically visualize alternative content before cross
            functional core Rapidiously administra standardized value via
            focused benefits. Rapidiously redefine highly efficient niche
            markets with plug-and-play materials professionally seize client
            centric solutions
          </p>
          <div className="flex">
            <div>
              <h3 className="text-2xl font-bold">Competitive Rates</h3>
              <p className="text-lg">
                Seamlessly envisioneer tactical data through services.
              </p>
            </div>
            <div className="ml-12">
              <h2 className="text-2xl font-bold">Online Certificates</h2>
              <p className="text-lg">
                Seamlessly envisioneer tactical data through services.
              </p>
            </div>
          </div>
          <button className="btn border-none mt-10 hover:bg-slate-800 bg-orange-600">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyRate;
