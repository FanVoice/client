import { createHashRouter } from 'react-router-dom';
import { Root } from '../pages/Root';
import { Error } from '../pages/Error';
import { Main } from '../pages/Main';
import { RootForm } from '../pages/Forms/RootForm';
import { VideoChatForm } from '../pages/Forms/VideoChatForm';

export const router = createHashRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '',
                element: <Main />,
            },
            {
                path: '/all',
                element: <h1>Все товары</h1>,
            },
            {
                path: '/categories',
                element: <h1>Категории</h1>,
            },
            {
                path: '/categories/sport',
                element: <h1>Категория спорта</h1>,
            },
            {
                path: '/categories/sport/:slug',
                element: <h1>Страница определенного спорта</h1>,
            },
            {
                path: '/categories/clubs',
                element: <h1>Спортивные клубы</h1>,
            },
            {
                path: '/categories/clubs:slug',
                element: <h1>Страница спортивного клуба</h1>,
            },
            {
                path: '/forms',
                element: <RootForm />,
                children: [    {
                    path: '/forms/video-chat',
                    element: <VideoChatForm />,
                }]
                // {
                //     path: '/categories/clubs:slug',
                //     element: <h1>Страница спортивного клуба</h1>,
                // },],
            },

            /** Ну и так далее */
        ],
    },
]);
