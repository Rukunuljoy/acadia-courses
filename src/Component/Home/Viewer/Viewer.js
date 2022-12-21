import React from "react";
import footer from '../../../image/image/footer.png'

const Viewer = () => {
  return (
    <div  style={{
      background:`url(${footer})`,
  }} className="flex mt-20 mb-20">
        <div className="card p-12 w-full rounded-none border bg-blue-600">
      <div className="card-body text-white">
        <h2 className="card-title text-5xl font-bold justify-center">3526+</h2>
        <p className="text-xl font-bold">Successfully Trained</p>
      </div>
    </div>
    <div className="card p-12 w-full rounded-none border bg-blue-600">
      <div className="card-body text-white">
        <h2 className="card-title text-5xl font-bold justify-center ">12,360+</h2>
        <p className="text-xl font-bold">Classes Completed</p>
      </div>
    </div>
    <div className="card p-12 w-full rounded-none border bg-blue-600">
      <div className="card-body text-white">
        <h2 className="card-title text-5xl font-bold justify-center ">97.12+</h2>
        <p className="text-xl font-bold">Satisfaction Rate</p>
      </div>
    </div>
    <div className="card p-12 w-full rounded-none border bg-blue-600">
      <div className="card-body text-white">
        <h2 className="card-title text-5xl font-bold justify-center">96.22+</h2>
        <p className="text-xl font-bold">Success Rate</p>
      </div>
    </div>
    </div>
  );
};

export default Viewer;
