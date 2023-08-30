import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/themes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
