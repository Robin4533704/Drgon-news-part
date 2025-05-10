import React from 'react';
import { FcGoogle } from "react-icons/fc";

import { FaGithub } from "react-icons/fa";
const SocialLoging = () => {
    return (
        <div>
            <h1 className='font-bold mb-5 '>Login with</h1>
            <div className='space-y-3'>
                <button className='btn btn-outline btn-info w-full'><FcGoogle size={24} />
                Login with Google</button>
                <button className='w-full btn btn-outline btn-success '><FaGithub size={24}/>
                Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLoging;