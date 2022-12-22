import React from 'react';

import useBem from 'hooks/useBem';

import PublicHeader from './components/PublicHeader';

const PublicLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const { bem, bemBlock } = useBem('PublicLayout');
  return (
    <div className={bem(bemBlock(), 'px-8')}>
      <PublicHeader />
      {children}
    </div>
  );
};

export default PublicLayout;
