import { RouterProvider } from 'react-router-dom';
import router from '@router/Router';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/themes';
import GlobalStyles from '@styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
