import React from 'react';

import Welcome from 'pages/public/Welcome';
import { Route, Routes } from 'react-router-dom';
import PublicLayout from 'routes/layouts/PublicLayout';

interface IRouteMap {
  [route: string]: JSX.Element;
}

export const unauthenticatedRoutes: IRouteMap = {
  '/': <Welcome />,
};

const Unauthenticated = (): JSX.Element => {
  return (
    <PublicLayout>
      <Routes>
        {Object.keys(unauthenticatedRoutes).map(path => (
          <Route key={path} path={path} element={unauthenticatedRoutes[path]} />
        ))}
      </Routes>
    </PublicLayout>
  );
};

export default Unauthenticated;
