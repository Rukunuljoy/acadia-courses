import React from "react";
import img1 from '../../../image/cardImage/img2.jpg'
import img2 from '../../../image/cardImage/img4.jpg'

const Blogs = () => {
  return (
    <div className="mb-20">
        <div>
            <h4 className="text-xl mb-5 text-blue-600 font-semibold">OUR BLOG POSTS</h4>
            <h2 className="text-4xl text-gray-900 mb-16 font-bold">Latest News <span className="text-blue-600">Update</span></h2>
        </div>
     <div className="flex">
     <div className="w-1/2 mt-20">
        <div
          className="hero duration-500 hover:scale-105 rounded-xl p-10"
          style={{
            backgroundImage: `url("https://placeimg.com/1000/800/arch")`,
          }}
        >
          <div className="hero-overlay bg-opacity-200"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">get started React Js Tutorial for beginning</h1>
              <div className='flex'>
          <p className="text-gray-900 text-lg font-semibold">03 Aug, 2022</p>
            <p className="text-gray-900 text-lg font-semibold">Acadu</p>
          
          </div>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
      <div className="card border mt-5 card-side bg-base-100">
        <figure><img src={img1} className='w-96 rounded-xl duration-500 hover:scale-105' alt="Movie"/></figure>
        <div className="card-body">
           <div className='flex'>
           <div className="card-actions mt-2 justify-center items-center">
            <button className="btn hover:bg-gray-700 rounded-lg border text-black btn-outline">Learn Music</button>
          </div>
           
           </div>
          <h2 className="card-title text-gray-900 text-start">Get Start PHP JS Tutorial For Adance Guy</h2>
          <div className='flex'>
          <p className="text-white font-semibold">03 Aug, 2022</p>
            <p className="text-white  font-semibold">Acadu</p>
          
          </div>
        </div>
      </div>
      <div className="card border mt-5 card-side bg-base-100">
        <figure><img src={img2} className='w-96 duration-500 hover:scale-105 rounded-xl' alt="Movie"/></figure>
        <div className="card-body">
           <div className='flex'>
           <div className="card-actions mt-2 justify-center items-center">
            <button className="btn hover:bg-gray-700 rounded-lg border text-black btn-outline">Learn Music</button>
          </div>
           
           </div>
          <h2 className="card-title text-gray-900 text-start">Get Start PHP JS Tutorial For Adance Guy</h2>
          <div className='flex'>
          <p className="text-gray-900 text-lg font-semibold">03 Aug, 2022</p>
            <p className="text-gray-900 text-lg font-semibold">Acadu</p>
          
          </div>
        </div>
      </div>
      </div>
     </div>
    </div>
  );
};

export default Blogs;
