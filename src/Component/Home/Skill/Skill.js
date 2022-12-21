import React from "react";
import study1 from '../../../image/image/study1.jpg'
import study4 from '../../../image/image/study4.jpg'
import study3 from '../../../image/image/study3.jpg'

const Skill = () => {
  return (
    <div className="mt-32">
      <div>
        <h4 className="text-lg font-semibold text-blue-600">
          WORKING STRATEGY
        </h4>
        <h1 className="text-4xl mt-5 text-gray-800 font-bold">
          Our Work<span className="text-blue-600 font-semibold">Process</span>
        </h1>
      </div>
      <div className="flex mt-10">
        <div className="card w-4/12	border-r bg-base-100 ">
          <figure>
            <img
              src={study1}
              alt="Shoes"
              className="rounded-full w-72 duration-500 hover:scale-105"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Get Edidence Of What <br /> You’ve Learned
            </h2>
            <p>
              Standards in leadership skills synergize <br/> optimal expertise rather
              than <br/>innovative leadership skills.
            </p>
          </div>
        </div>
        <div className="card w-4/12	border-r bg-base-100 ">
          <figure>
            <img
              src={study4}
              alt="Shoes"
              className="rounded-full w-72 duration-500 hover:scale-105"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Easily Share Your <br /> Achievements
            </h2>
            <p>
              Standards in leadership skills synergize <br/> optimal expertise rather
              than <br/>innovative leadership skills.
            </p>
          </div>
        </div>
        <div className="card w-4/12	border-r bg-base-100 ">
          <figure>
            <img
              src={study3}
              alt="Shoes"
              className="rounded-full w-72 duration-500 hover:scale-105"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Lead a Depending a <br /> Beautifull Life
            </h2>
            <p>
              Standards in leadership skills synergize <br/>optimal expertise rather
              than<br/> innovative leadership skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
