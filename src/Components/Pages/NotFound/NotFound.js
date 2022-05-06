import React from 'react';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
    return (
        <div className='container my-4' style={{height:"100vh"}}>
             <Helmet>
            <title className='text-capitalize'>404 Not found </title>
          </Helmet>
            <img className='w-100 h-100 rounded-lg' src="https://i.ibb.co/MsynYKt/error-404.png" alt="" />
            
        </div>
    );
};

export default NotFound;