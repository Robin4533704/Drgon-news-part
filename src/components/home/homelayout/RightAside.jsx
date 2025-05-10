import React from 'react';
import SocialLoging from '../../../layout/SocialLoging';
import FindUs from './FindUs';
import Quzon from './Quzon';

const RightAside = () => {
    return (
        <div className='space-y-10'>
           <SocialLoging/>
            <FindUs/>
            <Quzon/>
        </div>
    );
};

export default RightAside;