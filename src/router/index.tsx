import { useRoutes } from "react-router-dom";
import Login from '../Views/Login';
import Register from '../Views/Register';
import User from '../Views/User';
import Home from '../Views/Home';



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
            path: '/user',
            element: <User/>
        },
        {
            path: '/home',
            element: <Home/>
        },

    ])

    return routes;
}

export default AppRoutes;