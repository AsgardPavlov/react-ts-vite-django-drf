import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';

import Router from './Router';

import 'primereact/resources/themes/lara-light-indigo/theme.css'; // theme
import 'primereact/resources/primereact.min.css'; // core css
import 'primeicons/primeicons.css'; // icons
import 'primereact/resources/themes/lara-dark-teal/theme.css'; // dark Lara Teal

function App(): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
