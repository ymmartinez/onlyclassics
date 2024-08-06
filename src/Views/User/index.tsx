import React, { useEffect, useRef, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button'
import { Avatar } from 'primereact/avatar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

type Severity = 'success' | 'info' | 'warn' | 'error';

const User = () => {
    const [name, setName] = useState<string>('');
    const [image] = useState('boy-front-premium.png');
    const navigate = useNavigate();

    useEffect(() => {
        getNameUser();
    }, []);

    const getNameUser = () => {
        axios.get('http://localhost:3000/auth/profile', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        })
            .then((response) => {
                setName(response.data.first_name);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const navigateRoute = (route: string) => {
        navigate(route)
    }

    const handleLogout = () => {
        navigate('/login');
    };

    const header = (
        <>
            <div className='text-left'>
                <Button onClick={() =>navigate('/')} icon="pi pi-arrow-left" className="p-button-text " />
            </div>
            <div>
                <Avatar
                    image={image}
                    shape="circle"
                    size="xlarge"
                />
            </div>
        </>
    );

    const footer = (
        <>
            <div className="card flex flex-column md:flex-col gap-3">
                <Button label="Datos Personales" onClick={() => navigateRoute('/data')} icon="pi pi-id-card" className='border-round-xl'style={{ backgroundColor:'#176B87'}}/>
                <Button label="Configuracion" onClick={() => navigateRoute('/setting')} icon="pi pi-cog" className='border-round-xl'style={{backgroundColor:'#176B87'}}/>
                <Button label="Ayuda" onClick={() => navigateRoute('/help')} icon="pi pi-info-circle" className='border-round-xl'style={{backgroundColor:'#176B87'}}/>
                <Button label="Cerrar Sesion"  onClick={handleLogout} icon="pi pi-sign-out" className='border-round-xl' severity="danger"/>
            </div>
        </>
    );

    return(
        <div className="flex justify-content-center align-content-center align-items-center" style={{ minHeight: "calc(100vh - 4rem)"}}>
            <Card footer={footer} header={header} title={name} className="p-card-title"
                style={{
                    width:'500px',
                    textAlign: 'center',
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '10px',
                }}
            ></Card>
        </div>
    )
}


export default User;