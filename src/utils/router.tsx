import { createHashRouter } from 'react-router-dom';
import { Root } from '../pages/Root';
import { Error } from '../pages/Error';
import { Main } from '../pages/Main/Main';
import { RootForm } from '../pages/forms/RootForm';
import { VideoChatForm } from '../pages/forms/VideoChatForm';
import { People } from '../pages/People';
import { ConferenceForm } from '../pages/forms/ConferenceForm';
import { OfflineEventForm } from '../pages/forms/OfflineEventForm';
import { Sports } from '../pages/Sports/Sports';
import { Clubs } from '../pages/Clubs/Clubs';
import { Person } from '../pages/Person/Person';

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
                path: '/categories/sports',
                element: <Sports />,
            },
            {
                path: '/categories/sports/:slug',
                element: <h1>Страница определенного спорта</h1>,
            },
            {
                path: '/categories/authlets',
                element: <People type="authlet" />,
            },
            {
                path: '/categories/authlets:slug',
                element: <Person type="authlet" />,
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
                path: '/categories/bloggers',
                element: <People type="blogger" />,
            },
            {
                path: '/categories/bloggers:slug',
                element: <Person type="blogger" />,
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
