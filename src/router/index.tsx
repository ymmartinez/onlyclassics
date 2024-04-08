import { Outlet, useRoutes } from "react-router-dom";
import Login from '../Views/Login';
import Register from '../Views/Register';
import User from '../Views/User';
import Home from '../Views/Home';
import Structure from '../Views/Structure';
import Activity from '../Views/Activity';
import Articles from '../Views/Articles';
import Details from '../Views/Details';
import Search from '../Views/Search';

const AppRoutes = () => {
    let routes = useRoutes([
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        },

        {
            path: '/',
            element: (
                <>
                    <Structure />
                    <Outlet/>
                </>
            ),
            children: [
                {
                    path: 'home',
                    element: <Home/>
                },
                {
                    path: 'activity',
                    element: <Activity/>
                },
                {
                    path: 'articles',
                    element: <Articles/>
                },
                {
                    path: 'user',
                    element: <User/>
                },
                {
                    path: 'details',
                    element: <Details/>
                },
                {
                    path: 'search',
                    element: <Search/>
                },
            ]
        },
    ])

    return routes;
}

export default AppRoutes;