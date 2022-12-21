import React from "react";
import img from '../../../image/cardImage/img1.png'
import img1 from '../../../image/cardImage/img2.jpg'
import img2 from '../../../image/cardImage/img3.jpg'
import img3 from '../../../image/cardImage/img4.jpg'
import img4 from '../../../image/cardImage/avatarimg.jpg'

const Feedback = () => {
  return (
    <div className="hero mt-20 mb-20  min-h-screen">
      <div className="hero-overlay rounded-xl bg-neutral"></div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-1/2">
        <div className="flex mb-20 ml-10">
          <div className="avatar ">
            <div className="w-24 mr-5 rounded-full">
              <img src={img} />
            </div>
          </div>
          <div className="avatar">
            <div className="w-24 mr-5 rounded-full">
              <img src={img1}/>
            </div>
          </div>
          <div className="avatar">
            <div className="w-24 mr-5 rounded-full">
              <img src={img2} />
            </div>
          </div>
          <div className="avatar">
            <div className="w-24 mr-5 rounded-full">
              <img src={img3} />
            </div>
          </div>
          <div className="avatar">
            <div className="w-24 mr-5 rounded-full">
              <img src={img4} />
            </div>
          </div>
        </div><hr className="mb-16"/>
        <div className="">
          <p className="text-white text-start ml-20">
            There are four stages that kids go through when learning to write:
            preliterate, emergent, transitional, and fluent. Knowing which stage
            your child is in – whether he's scribbling in the preliterate stage
            or using "dictionary-level" spelling in the fluent stage – can help
            you support his writing development.
          </p>
          <div className="mt-16 text-white text-start ml-12">
          <h2 className="text-xl">MD.Sadiqul Islam</h2>
          <h2 className="text-lg text-orange-500">General manager</h2>
          </div>
        </div>
        </div>
       
        <div className="text-white mr-20 text-start">
          <h2 className="text-xl rounded-lg p-2">HAPPY STUDENTS</h2>
          <h1 className="text-5xl font-bold">
            Our Student’s Says
            <br />
            About Our University
          </h1>
          <button className="btn text-white border hover:bg-gray-800 mt-20 btn-outline">
            Give FeedBack
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
