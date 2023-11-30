import {Dev} from '@/constants';
import {queryClient} from '@/hooks';
import {router} from '@/router';
import {GlobalStyles, theme} from '@/styles';
import {GoogleOAuthProvider} from '@react-oauth/google';
import {QueryClientProvider} from '@tanstack/react-query';
import {Toaster} from 'react-hot-toast';
import {RouterProvider} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {worker} from '@/mocks/browser';
import '@/styles/fonts/font.css';

function App() {
    if (Dev) {
        worker.start();
    }
    return (
        <QueryClientProvider client={queryClient}>
            <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
                <GlobalStyles/>
                <ThemeProvider theme={theme}>
                    <Toaster position={'top-center'}/>
                    <RouterProvider router={router}/>
                </ThemeProvider>
            </GoogleOAuthProvider>
        </QueryClientProvider>
    );
}

export default App;