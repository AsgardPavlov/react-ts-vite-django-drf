import React from 'react';

import { ProgressSpinner } from 'primereact/progressspinner';

const Loading = (): JSX.Element => {
  return (
    <div
      className='flex align-items-center justify-content-center'
      // sx={{
      //   height: '100vh',
      //   display: 'flex',
      //   flexDirection: 'column',
      //   alignItems: 'center',
      //   justifyContent: 'center',
      // }}
    >
      <ProgressSpinner />
      {/* <Center data-testid='loading'> */}
      {/*  <Loader size='xl' variant='bars' /> */}
      {/* </Center> */}
    </div>
  );
};

export default Loading;
