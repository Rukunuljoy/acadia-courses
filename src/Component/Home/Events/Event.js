import React from 'react';
import img1 from '../../../image/cardImage/img1.png'
import img2 from '../../../image/cardImage/img2.jpg'
import img3 from '../../../image/cardImage/img3.jpg'
import img4 from '../../../image/cardImage/img4.jpg'
import image from '../../../image/cardImage/avatarimg.jpg'
import EventDetails from './EventDetails';

const Event = () => {

    const cardItem = [
        { 
            id:1,
            location: '259 Hilton Street, NewYork',
            time : '08:00 am - 10:00 am',
            title: 'What Soul Can Tech Us About Web Design',
            button: 'view Event',
            avatarImg: image,
            avatarName: 'john key',
            image:img1,
        },
        {
            id:2,
            location: '259 Hilton Street, NewYork',
            time : '08:00 am - 10:00 am',
            title: 'What Soul Can Tech Us About Web Design',
            button: 'view Event',
            avatarImg: image,
            avatarName: 'john key',
            image:img2
        },
        {
            id:3,
            location: '259 Hilton Street, NewYork',
            time : '08:00 am - 10:00 am',
            title: 'What Soul Can Tech Us About Web Design',
            button: 'view Event',
            avatarImg: image,
            avatarName: 'john key',
            image:img3
        },
        {
            id:4,
            location: '259 Hilton Street, NewYork',
            time : '08:00 am - 10:00 am',
            title: 'What Soul Can Tech Us About Web Design',
            button: 'view Event',
            avatarImg: image,
            avatarName: 'john key',
            image:img4
        },
    ]
    return (
        <div className='mt-28'>
            <div>
                <h5 className='font-semibold text-blue-600 mb-6 text-lg'>FETAURED EVENTS</h5>
                <h1 className='text-4xl font-bold'>Upcoming <span className='text-blue-600'>Events</span></h1>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
                {
                    cardItem.map(card => <EventDetails
                    key={card.id}
                    card={card}
                    ></EventDetails>)
                }
            </div>
        </div>
    );
};

export default Event;