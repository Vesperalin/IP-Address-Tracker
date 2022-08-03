import { store } from 'context';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { theme } from 'theme/theme';
import App from './App';
import './assets/styles/index.css';

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={client}>
          <App />
        </QueryClientProvider>
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
);
