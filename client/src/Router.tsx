import React from 'react';

import ErrorBoundary from 'components/ErrorBoundary';
import Loading from 'pages/shared/Loading';

import Unauthenticated from './routes/Unauthenticated';

const Router = (): JSX.Element => {
  return (
    <ErrorBoundary errorMessage={<div>Error</div>}>
      <React.Suspense fallback={<Loading />}>
        <Unauthenticated />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default Router;
