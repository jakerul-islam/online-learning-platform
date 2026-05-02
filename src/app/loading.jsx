import React from 'react';
import { RotateLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='flex justify-center items-center h-screen text-purple-500'>
            <RotateLoader/>
        </div>
    );
};

export default loading;