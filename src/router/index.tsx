import { Outlet, useRoutes } from "react-router-dom";
import Login from '../Views/Login';
import Register from '../Views/Register';
import User from '../Views/User';
import Home from '../Views/Home';
import Structure from '../Views/Structure';
import Activity from '../Views/Activity';
import Articles from '../Views/Articles';
import Data from '../Views/Data';
import Search from '../Views/Search'; 
import EditPassword from "../Views/EditPassword";
import Setting from "../Views/Setting";
import EditMail from "../Views/EditMail";
import Help from "../Views/Help";

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
                    <div style={{ backgroundColor: '#EEEEEE'}} className='p-5'>
                        <Outlet/>
                    </div>
                </>
            ),
            children: [
                {
                    path: '',
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
                    path: 'data',
                    element: <Data/>
                },
                {
                    path: 'search',
                    element: <Search/>
                },
                {
                    path: 'editpassword',
                    element: <EditPassword/>
                },
                {
                    path: 'setting',
                    element: <Setting/>
                },
                {
                    path: 'editmail',
                    element: <EditMail/>
                },
                {
                    path: 'help',
                    element: <Help/>
                },
            ]
        },
    ])

    return routes;
}

export default AppRoutes;