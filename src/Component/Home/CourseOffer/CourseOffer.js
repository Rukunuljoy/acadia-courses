import React from 'react';

const CourseOffer = () => {
    return (
         <div className="hero min-h-screen mb-20 mt-20" style={{ backgroundImage: `url("https://dggzvb12b0xax.cloudfront.net/wp-content/uploads/sites/5/2020/10/StudentsStudying.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="text-white">
            <p className='text-xl font-semibold'>ARE YOU READY FOR THIS OFFER</p>
            <h1 className="mb-2 text-6xl font-bold">50% Offer For Very First 50</h1>
            <h2 className='text-5xl font-lg'>Student’s & Mentors</h2>
            
            <button className="btn mt-10 font-serif hover:bg-slate-800 border-none btn-primary mr-10">Get Started</button>
            <button className="btn font-serif hover:bg-slate-800 border-none btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default CourseOffer;