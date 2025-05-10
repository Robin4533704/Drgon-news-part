import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNewa = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200  p-5'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-2' pauseOnHover={true}>
              <p className='font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p className='font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p className='font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </Marquee>
           
        </div>
    );
};

export default LatestNewa;