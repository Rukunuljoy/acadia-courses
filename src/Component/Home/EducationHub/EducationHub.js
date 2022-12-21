import React from "react";
import person1 from "../../../image/image/Eduimage1.jpg";
import person2 from "../../../image/image/Eduimage2.webp";

const EducationHub = () => {
  return (
    <div className="hero mt-24">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative w-1/2">
          <img src={person2} alt="" className="w-3/4  rounded-t-full shadow-2xl" />
          <img
            src={person1}
            alt=""
            className="absolute w-2/3 mt-20 right-5 top-1/2 border-8 duration-500 hover:scale-105 rounded-lg shadow-2xl"
          />
         </div>
        <div className="w-1/2 mb-16 text-start">
          <p className="text-2xl font-bold text-orange-600">Welcome to</p>
          <h1 className="text-5xl font-bold my-5">
          Acadu Education Hub.
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <hr className="w-full"/><br/>
          <div className="flex">
            <div>
                <h3 className="text-2xl font-bold">Undergraduate Education</h3>
                <p className="text-lg">With flexible courses</p>
            </div>
            <div className="ml-12">
                <h2 className="text-2xl font-bold">Postgraduate Education</h2>
                <p className="text-lg">Study flexibly online</p>
            </div>
          </div>
          <hr className="mt-10"/>
          <div className="mt-10">
                <p className="font-semibold mb-2">* Our unique learning environment sparks physical growth</p>
                <p className="font-semibold">* Discovery while our creative curriculum which combines</p>
          </div><br/>
          <button className="btn border-none bg-orange-600">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default EducationHub;
