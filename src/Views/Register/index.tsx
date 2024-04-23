import React, { useRef, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import axios from 'axios';
import { Toast } from 'primereact/toast';
import { useNavigate } from 'react-router-dom';

type Severity = 'success' | 'info' | 'warn' | 'error';

let Register = () => {
    const [name, setName] = useState<string>('');
    const [lastName, setApellido] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setContraseña] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
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

        const header = (
            <>
                <div className='text-left'>
                    <Button onClick={() =>navigate('/')} icon="pi pi-arrow-left" className="p-button-text " />
                </div>
                <div>
                    <i className="pi pi-user" style={{ fontSize: '2.5rem' }}></i>
                </div>
            </>
        );
    const footer = (
        <div className="card flex flex-wrap justify-content-end">
            <Button label="Continuar" onClick={handleRegister} severity="success" raised style={{ width: '19vh', backgroundColor: '#176B87' }} />
        </div>
    );

    return (
        <div className="flex justify-content-center align-content-center align-items-center" style={{ minHeight: "calc(100vh - 4rem)"}}>
            <Toast ref={toast} />
            <Card
                footer={footer}
                header={header}
                title="Crear cuenta"
                className='text-center p-4 bg-white border-round-xl'
            >
                <div className="card flex justify-content-center mt-4 ">
                    <span className="p-float-label ">
                        <InputText
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                (document.getElementById('lastName') as HTMLInputElement).focus();
                            }
                        }}
                        />
                        <label htmlFor="name">Nombre completo</label>
                    </span>
                </div>
                <div className="card flex justify-content-center mt-4">
                    <span className="p-float-label">
                        <InputText
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setApellido(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    (document.getElementById('email') as HTMLInputElement).focus();
                                }
                            }}
                            />
                        <label htmlFor="name">Apellido</label>
                    </span>
                </div>
                <div className="card flex justify-content-center mt-4">
                    <span className="p-float-label">
                        <InputText
                        id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    (document.getElementById('password') as HTMLInputElement).focus();
                                }
                            }}
                            />
                        <label htmlFor="email">Email</label>
                    </span>
                </div>
                <div className="p-inputgroup flex-1 mt-4">
                    <span className="p-float-label">
                        <Password
                            inputId="password"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContraseña(e.target.value)}
                            toggleMask
                            value={password}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    (document.getElementById('confirmPassword') as HTMLInputElement).focus();
                                }
                            }}
                            />
                        <label htmlFor="password">Contraseña</label>
                    </span>
                </div>
                <div className="p-inputgroup flex-1 mt-4">
                    <span className="p-float-label">
                        <Password
                            inputId="confirmPassword"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                            toggleMask
                            value={confirmPassword}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleRegister();
                                }
                            }}
                            />
                        <label htmlFor="confirmPassword">Confirmar password</label>
                    </span>
                </div>
            </Card>
        </div>
    )
}

export default Register;