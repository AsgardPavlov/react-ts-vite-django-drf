import React from 'react';

import ErrorBoundary from 'components/ErrorBoundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomePage from 'routes/public/WelcomePage';
import LoadingPage from 'routes/shared/LoadingPage';

import PublicLayout from './layouts/PublicLayout';

interface IRoutes {
  [key: string]: JSX.Element;
}

const Router = (): JSX.Element => {
  const publicRoutes: IRoutes = {
    '/': <WelcomePage />,
  };

  return (
    <ErrorBoundary errorMessage={<div>Error</div>}>
      <React.Suspense fallback={<LoadingPage />}>
        <PublicLayout>
          <BrowserRouter>
            <Routes>
              {Object.keys(publicRoutes).map(path => (
                <Route key={path} path={path} element={publicRoutes[path]} />
              ))}
            </Routes>
          </BrowserRouter>
        </PublicLayout>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default Router;
