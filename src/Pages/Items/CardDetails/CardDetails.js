import React from 'react';

const CardDetails = () => {
    return (
        <div className="card card-compact mb-10 w-96 bg-base-100 shadow-xl">
        <figure><img src="" alt="" /></figure>
        <div className="card-body">
            <h2 className="card-title"></h2>
            <p className='text-2xl text-orange-600 font-semibold'>Price:</p>
            <div className="card-actions justify-end">
                
                    <button className="btn btn-primary">Check Out</button>
        
            </div>
        </div>
    </div>
    );
};

export default CardDetails;