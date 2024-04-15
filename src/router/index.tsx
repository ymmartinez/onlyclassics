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
import FrequentQuestions from "../Views/FrequentQuestions";

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
                    <div style={{ backgroundColor: '#EEEEEE'}} className='px-4 h-full'>
                        <Structure />
                        <div style={{ height: "calc(100vh - 4rem)"}}>
                            <Outlet/>
                        </div>
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
                {
                    path: 'frecuentquestions',
                    element: <FrequentQuestions/>
                },
            ]
        },
    ])

    return routes;
}

export default AppRoutes;