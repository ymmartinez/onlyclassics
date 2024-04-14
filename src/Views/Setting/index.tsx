import React from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const Setting = () => {
    const navigate = useNavigate();
        const handleChangePassword = () => {
        };
    
        const handleChangeEmail = () => {
        };
    
        const handleLogout = () => {
        };


        const header = (
            <>
                <div className='text-left'>
                    <Button onClick={() =>navigate('/user')} icon="pi pi-arrow-left" className="p-button-text " />
                </div>
                <div>
                    <i className="pi pi-cog" style={{ fontSize: '2.5rem' }}></i>
                </div>
            </>
        );

    return (
        <div style={{ backgroundColor: '#EEEEEE'}} className="h-screen flex justify-content-center align-content-center align-items-center">
        <Card header={header} title='Configuracion' className="p-card-title" style={{
            width:'500px',
            textAlign: 'center',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
        }}>
                <div className="p-fluid">
                    <div className="p-field">
                        <Button label="Cambiar contraseña" className="mt-3 border-round-xl" onClick={() => navigate('/editpassword')} style={{ backgroundColor: '#7FC7D9'}}/>
                    </div>
                    <div className="p-field">
                        <Button label="Cambiar correo electrónico" className="mt-3 border-round-xl" onClick={() => navigate('/editmail')}style={{ backgroundColor: '#7FC7D9'}}/>
                    </div>
                    <div className="p-field">
                        <Button label="Actividad" className="mt-3 border-round-xl" onClick={() => navigate('/activity')} style={{ backgroundColor: '#7FC7D9'}}/>
                    </div>
                    <div className="p-field">
                        <Button label="Dar de baja cuenta" className=" mt-3 border-round-xl" onClick={handleLogout} severity="danger"/>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Setting;