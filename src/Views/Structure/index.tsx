import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import './style.css';
import SignOff from '../../Components/SignOff';
import Assistant from '../../Components/Assistant';
import Footer from '../../Components/Footer';
import Bar from '../../Components/Bar';

const Structure = () => {
    const location = useLocation();
    const [isProtected, setIsProtected] = React.useState(false);

    useEffect(() => {
        setIsProtected(!(
            location.pathname === '/' ||
            location.pathname.startsWith('/search') ||
            location.pathname.startsWith('/article')
        ));
    }, [location]);

    return (
        <div style={{ backgroundColor: '#EEEEEE'}} className='px-4 pb-4 min-h-full'>
            <SignOff isProtected={isProtected}/>
            <Bar/>
            <Outlet/>
            <Assistant></Assistant>
            <Footer></Footer>
        </div>
    );
}

export default Structure;