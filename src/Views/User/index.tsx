import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button'
;import { Avatar } from 'primereact/avatar';


let User = () => {
    const [image] = useState('default-avatar.jpg');
    return(

        <div style={{ backgroundColor: '#EEEEEE'}} className="h-screen flex justify-content-center align-content-center align-items-center">
            <Card title="Nombre" className="p-card-title" style={{
                width:'500px',
                textAlign: 'center',
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '10px',
            }}>
                <div className="flex align-items-center flex-column">
                    <Avatar
                        image={image}
                        shape="circle"
                        size="xlarge"
                    />
            </div>
                <div className="card flex flex-column md:flex-col gap-3">
                <Button label="Datos Personales" className='border-round-2xl'style={{ backgroundColor:'#176B87'}}/>
                <Button label="Configuracion"  className='border-round-2xl'style={{backgroundColor:'#176B87'}}/>
                <Button label="Ayuda"  className='border-round-2xl'style={{backgroundColor:'#176B87'}}/>
                <Button label="Actividad"  className='border-round-2xl'style={{backgroundColor:'#176B87'}}/>
                <Button label="Cerrar Sesion"  className='border-round-2xl'style={{backgroundColor:'#176B87'}}/>
                <Button label="Dar de Baja Cuenta"  className='border-round-2xl' style={{ backgroundColor:'#176B87'}}/>
            </div>
            </Card>
        </div>
    )}


export default User;