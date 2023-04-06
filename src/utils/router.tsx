import { createHashRouter } from 'react-router-dom';
import { Root } from '../pages/Root';
import { Error } from '../pages/Error';
import { Main } from '../pages/Main/Main';
import { RootForm } from '../pages/forms/RootForm';
import { VideoChatForm } from '../pages/forms/VideoChatForm';
import { ConferenceForm } from '../pages/forms/ConferenceForm';
import { OfflineEventForm } from '../pages/forms/OfflineEventForm';

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
            // Роуты все товары и категории убрала, так как реализовала
            //все на одной странице ('/') через Tabs
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
