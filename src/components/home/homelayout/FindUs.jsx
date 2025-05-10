import React from 'react';
import { FaFacebookF, FaInstagram,  FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className='mb-5 font-bold mt-5'>find us on</h2>
            <div>
            <div className="join join-vertical w-full">
  <button className="btn join-item bg-base-100 justify-start "><p className='bg-base-300 rounded-full p-2'><FaFacebookF className='text-blue-600 ' /></p>
  Facebook</button>
  <button className="btn bg-base-100 join-item justify-start"><p className='bg-base-300 rounded-full p-2'><FaTwitter className='text-blue-600 '/></p> Twitter</button>
  <button className="btn join-item bg-base-100 justify-start"><p className='bg-base-300 rounded-full p-2'><FaInstagram className='text-orange-400'/></p> instagram</button>
</div>
            </div>
        </div>
    );
};

export default FindUs;