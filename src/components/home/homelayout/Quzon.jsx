import React from 'react';
import swimaingImage from "../../../assets/swimming.png"
import classes from "../../../assets/class.png"
import playGround from "../../../assets/playground.png"
const Quzon = () => {
    return (
        <div className='bg-base-200 p-3'>
           <h1 className='font-bold'>Q-zone</h1> 
           <div>
            <img src={swimaingImage} alt="" />
            <img src={classes} alt="" />
            <img src={ playGround } alt="" />
           </div>
        </div>
    );
};

export default Quzon;