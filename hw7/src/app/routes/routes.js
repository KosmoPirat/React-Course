import Main from '../pages/Main';
import Users from '../pages/Users';
import User from '../pages/User';
import Posts from '../pages/Posts';
import PageNotFound from '../pages/PageNotFound';

export default [
    {
        path: '/',
        component: Main,
        exact: true
    },
    {
        path: '/users',
        component: Users,
        exact: true
    },
    {
        path: '/users/:userId',
        component: User,
        exact: true
    },
    {
        path: '/posts',
        component: Posts,
        exact: true
    },
    {
        path: '*',
        component: PageNotFound,
        exact: true
    },
];