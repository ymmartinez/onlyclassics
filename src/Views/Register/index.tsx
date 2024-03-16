import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';

let Register = () =>{
    const [nombre, setNombre] = useState<string>('');
    const [apellido, setApellido] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [contraseña, setContraseña] = useState<string>('');
    const [confirmar, setConfirmar] = useState<string>('');

return(
        <div className="h-screen flex justify-content-center align-content-center align-items-center">
            <Card title="Crear cuenta" className="p-card-title" style={{
                textAlign: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
            }}>
                <div className="card flex justify-content-center py-4 ">
                    <span className="p-float-label ">
                        <InputText id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} style={{ width: '40vh' }}/>
                        <label htmlFor="nombre">Nombre completo</label>
                    </span>
                </div>
                <div className="card flex justify-content-center ">
                    <span className="p-float-label">
                        <InputText id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} style={{ width: '40vh' }} />
                        <label htmlFor="name">Apellido</label>
                    </span>
                </div>
                <div className="card flex justify-content-center py-4">
                    <span className="p-float-label">
                        <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '40vh' }} />
                        <label htmlFor="email">Email</label>
                    </span>
                </div>
                <div className="p-inputgroup flex-1 ">
                    <span className="p-float-label">
                            <Password
                                inputId="contraseña"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContraseña(e.target.value)}
                                toggleMask
                                value={contraseña} />
                            <label htmlFor="contraseña">Contraseña</label>
                        </span>
                </div>
                <div className="p-inputgroup flex-1 py-4">
                    <span className="p-float-label">
                            <Password
                                inputId="confirmar"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmar(e.target.value)}
                                toggleMask
                                value={confirmar} />
                            <label htmlFor="confirmar">Confirmar contraseña</label>
                        </span>
                </div>
        <div className="card flex flex-wrap justify-content-center gap-3">
                <Button label="Volver atrás" severity="info" raised style={{ width: '19vh' }}/>
                <Button label="Continuar" severity="success" raised style={{ width: '19vh' }} />
        </div>
            </Card>
        </div>
    )}

export default Register;