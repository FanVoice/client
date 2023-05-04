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
import { Person } from '../pages/Person/Person';
import { People } from '../pages/People';
import { Club } from '../pages/Club/Club';

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
            {
                path: 'categories',
                element: <Main />,
            },
            {
                path: '/categories/sports',
                element: <Sports />,
            },
            {
                path: '/categories/sports/:slug',
                element: <h1>Страница определенного спорта</h1>,
            },
            {
                path: '/categories/athletes',
                element: <People type="athlete" />,
            },
            {
                path: '/categories/athletes:slug',
                element: <Person type="athlete" />,
            },
            {
                path: '/categories/clubs',
                element: <Clubs />,
            },
            {
                path: '/categories/clubs:slug',
                element: <Club />,
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
