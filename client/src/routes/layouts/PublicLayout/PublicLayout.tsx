import React from 'react';

import useBem from 'hooks/useBem';

import Header from './components/Header';

const PublicLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const { bem, bemBlock } = useBem('PublicLayout');
  return (
    <div className={bem(bemBlock(), 'px-8')}>
      <Header />
      {children}
    </div>
  );
};

export default PublicLayout;
