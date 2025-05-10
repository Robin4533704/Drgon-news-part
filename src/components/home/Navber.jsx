import React from 'react';
import { NavLink } from 'react-router';
import img from "../../assets/user.png"
const Navber = () => {
    return (
        <div className='flex items-center justify-between'>
           <div className=''></div>
           <div className='nav flex gap-5 text-accent'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Cereer</NavLink>
           </div>
           <div className='login-btn flex gap-3'>
            <img src={img} alt="" />
            <button className='btn bg-primary px-10 text-white'>Login</button>
           </div>
        </div>
    );
};

export default Navber;