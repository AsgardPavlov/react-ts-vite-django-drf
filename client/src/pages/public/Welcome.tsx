import React from 'react';

import { Link } from 'react-router-dom';

const Welcome = (): JSX.Element => {
  return (
    <div className='grid max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32'>
      <div className='justify-center'>
        <h1 className='text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
          <span className='text-transparent bg-gradient-to-r from-reactColor to-djangoColor bg-clip-text'>
            React TypeScript Vite + Django DRF
          </span>
        </h1>
        <p className='mt-6 text-2xl text-slate-600 text-center'>Boilerplate with authorization</p>
      </div>
      <div className='mt-6 sm:mt-10 flex justify-center space-x-6 text-sm'>
        <Link
          to='/login'
          className='hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400
          focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full
          flex items-center justify-center sm:w-auto bg-reactColor highlight-white/20'
        >
          Login
        </Link>
        <Link
          to='/register'
          className='hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400
          focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full
          flex items-center justify-center sm:w-auto bg-djangoColor highlight-white/20'
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
