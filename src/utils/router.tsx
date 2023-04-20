import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../pages/Root';
import { Error } from '../pages/Error';
import { Main } from '../pages/Main/Main';
import { Sports } from '../pages/Sports/Sports';
import { Clubs } from '../pages/Clubs/Clubs';
import { RootForm } from '../pages/Forms/RootForm';
import { VideoChatForm } from '../pages/Forms/VideoChatForm';
import { OfflineEventForm } from '../pages/Forms/OfflineEventForm';
import { ConferenceForm } from '../pages/Forms/ConferenceForm';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '',
                element: <Main />,
            },
            // Роуты все товары и категории убрала, так как реализовала
            //все на одной странице ('/') через Tabs
            {
                path: '/categories/sports',
                element: <Sports />,
            },
            {
                path: '/categories/sports/:slug',
                element: <h1>Страница определенного спорта</h1>,
            },
            {
                path: '/categories/clubs',
                element: <Clubs />,
            },
            {
                path: '/categories/clubs:slug',
                element: <h1>Страница спортивного клуба</h1>,
            },
            {
                path: '/categories/athletes',
                element: <h1>Спортсмены</h1>,
            },
            {
                path: '/categories/athletes:slug',
                element: <h1>Страница спортсмена</h1>,
            },
            {
                path: '/categories/bloggers',
                element: <h1>Блоггеры</h1>,
            },
            {
                path: '/categories/bloggers:slug',
                element: <h1>Страница блоггера</h1>,
            },
            {
                path: '/forms',
                element: <RootForm />,
                children: [
                    {
                        path: '/forms/video-chat',
                        element: <VideoChatForm />,
                    },
                    {
                        path: '/forms/online-conference',
                        element: <ConferenceForm />,
                    },
                    {
                        path: '/forms/offline-event',
                        element: <OfflineEventForm />,
                    },
                ],
            },
        ],
    },
]);
