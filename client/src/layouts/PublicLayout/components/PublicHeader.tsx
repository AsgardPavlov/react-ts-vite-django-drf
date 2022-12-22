import React from 'react';

import { motion } from 'framer-motion';

import './PublicHeader.scss';

const PublicHeader = (): JSX.Element => {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: 'rgba(255, 255, 255, 0)',
    },
    visible: {
      pathLength: 1,
      fill: 'rgba(255, 255, 255, 1)',
    },
  };

  return (
    <div
      className='sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50
    lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='relative flex items-center'>
          <div className='py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0'>
            <a className='mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto' href='/'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 100 100'
                className='text-slate-900 dark:text-white w-auto h-10'
              >
                <motion.path
                  d='M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z'
                  variants={icon}
                  initial='hidden'
                  animate='visible'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicHeader;
