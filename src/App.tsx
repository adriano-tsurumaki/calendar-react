import React from 'react';
import { ThemeProvider } from 'styled-components';

import AppRoutes from './routes/app.routes';
import GlobalStyles from './styles/GlobalStyles';

import dark from './styles/themes/dark';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
