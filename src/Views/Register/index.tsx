import React, { useRef, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import axios from 'axios';
import { Toast } from 'primereact/toast';
import { useNavigate } from 'react-router-dom';

let Register = () => {
    type Severity = 'success' | 'info' | 'warn' | 'error';
    const [name, setName] = useState<string>('');
    const [lastName, setApellido] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setContraseña] = useState<string>('');
    const [confirmar, setConfirmar] = useState<string>('');
    const toast = useRef<Toast>(null);
    const navigate = useNavigate();

    const showToast = (severity: Severity, summary: string, detail: string) => {
        toast.current?.show({ severity: severity, summary: summary, detail: detail });
    }

    const handleRegister = () => {
        axios.post('http://localhost:3000/users', {
            first_name: name,
            last_name: lastName,
            email: email,
            password: password
        }).then((response) => {
            showToast('success', 'Usuario creado', 'Por favor confirme su email');
            navigate('/login');
        }).catch((error) => {
            showToast('error', 'No se pudo crear el usuario', 'Verifique los mensajes en la pantalla');
        });
    }

    const handleBack = () => {
        navigate('/home');
    }
        const header = (
        <i className="pi pi-user" style={{ fontSize: '2.5rem' }}></i>
    );
    const footer = (
        <>
        <div className="card flex flex-wrap justify-content-center gap-3">
        <Button label="Volver atrás" onClick={handleBack} severity="info" raised style={{ width: '19vh', backgroundColor: '#176B87' }} />
        <Button label="Continuar" onClick={handleRegister} severity="success" raised style={{ width: '19vh', backgroundColor: '#64CCC5' }} />
        </div>
        </>
    );

    return (
        <div style={{ backgroundColor: '#EEEEEE' }} className="h-screen flex justify-content-center align-content-center align-items-center">
            <Toast ref={toast} />
            <Card footer={footer} header={header} title="Crear cuenta" className="p-card-title" style={{
                textAlign: 'center',
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
            }}>
                <div className="card flex justify-content-center py-4 ">
                    <span className="p-float-label ">
                        <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '40vh' }} />
                        <label htmlFor="name">Nombre completo</label>
                    </span>
                </div>
                <div className="card flex justify-content-center ">
                    <span className="p-float-label">
                        <InputText id="lastName" value={lastName} onChange={(e) => setApellido(e.target.value)} style={{ width: '40vh' }} />
                        <label htmlFor="name">Apellido</label>
                    </span>
                </div>
                <div className="card flex justify-content-center py-4">
                    <span className="p-float-label">
                        <InputText id="email"
                            value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '40vh' }} />
                        <label htmlFor="email">Email</label>
                    </span>
                </div>
                <div className="p-inputgroup flex-1 ">
                    <span className="p-float-label">
                        <Password
                            inputId="password"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContraseña(e.target.value)}
                            toggleMask
                            value={password} />
                        <label htmlFor="password">Contraseña</label>
                    </span>
                </div>
                <div className="p-inputgroup flex-1 py-4">
                    <span className="p-float-label">
                        <Password
                            inputId="confirmar"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmar(e.target.value)}
                            toggleMask
                            value={confirmar} />
                        <label htmlFor="confirmar">Confirmar password</label>
                    </span>
                </div>
            </Card>
        </div>
    )
}

export default Register;