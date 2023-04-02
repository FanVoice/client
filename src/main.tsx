import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/router';
import { store } from './store/index';
import './index.css';
import { theme } from './utils/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <RouterProvider router={router} />
            </ChakraProvider>
        </Provider>
    </React.StrictMode>
);
