import { useRoutes } from "react-router-dom";
import Login from '../Views/Login';
import Register from '../Views/Register';
import User from '../Views/User';
import Home from '../Views/Home';
import Structure from '../Views/Structure';

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
            element: <Structure/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: '/user',
                    element: <User/>
                }
            ]
        },
    ])

    return routes;
}

export default AppRoutes;