import React from 'react';

const EventDetails = ({card}) => {
    const {location, time, title, button, avatarImg,avatarName, image} = card;
    return (
        <div className="card border rounded-lg mt-5 card-side bg-base-100">
        <figure><img src={image} className='w-56 duration-500 rounded-xl hover:scale-105' alt="Movie"/></figure>
        <div className="card-body">
           <div className='flex'>
           <p>{location}</p>
            <p>{time}</p>
           </div>
          <h2 className="card-title">{title}</h2>
          <div className='flex'>
          <div className="card-actions mt-2 justify-start">
            <button className="btn hover:bg-gray-700 rounded-lg border-none text-white btn-primary">{button}</button>
          </div>
          <div className='flex ml-10'>
            <div className='mr-3'>
            <img src={avatarImg} className='w-24 rounded-full avatar' alt="Movie"/>
            </div>
            <div className='mt-3'>
                <p className='font-semibold'>{avatarName}</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
};

export default EventDetails;