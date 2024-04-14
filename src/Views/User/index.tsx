import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button'
import { Avatar } from 'primereact/avatar';
import { useNavigate } from 'react-router-dom';

let User = () => {
    const [image] = useState('default-avatar.jpg');
    const navigate = useNavigate();

    const navigateRoute = (route: string) => {
        navigate(route)
    }

    const header = (
        <>
            <div className='text-left'>
                <Button onClick={() =>navigate('/user')} icon="pi pi-arrow-left" className="p-button-text " />
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
                <Button label="Datos Personales" onClick={() => navigateRoute('/data')} icon="pi pi-id-card" className='border-round-xl'style={{ backgroundColor:'#7FC7D9'}}/>
                <Button label="Configuracion" onClick={() => navigateRoute('/setting')} icon="pi pi-cog" className='border-round-xl'style={{backgroundColor:'#7FC7D9'}}/>
                <Button label="Ayuda"   onClick={() => navigateRoute('/')} icon="pi pi-info-circle" className='border-round-xl'style={{backgroundColor:'#7FC7D9'}}/>
                <Button label="Cerrar Sesion"  onClick={() => navigateRoute('/data')} icon="pi pi-sign-out" className='border-round-xl'style={{backgroundColor:'#7FC7D9'}}/>
            </div>
        </>
    );
    return(
        <div style={{ backgroundColor: '#EEEEEE'}} className="h-screen flex justify-content-center align-content-center align-items-center">
            <Card footer={footer} header={header} title="Nombre" className="p-card-title"
                style={{
                width:'500px',
                textAlign: 'center',
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '10px',
            }}>
            </Card>
        </div>
    )
}


export default User;