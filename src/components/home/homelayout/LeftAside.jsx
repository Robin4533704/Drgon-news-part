import React, { Suspense } from 'react';
import Catagories from '../../../pages/Catagories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                <Catagories></Catagories>
            </Suspense>
          
        </div>
    );
};

export default LeftAside;