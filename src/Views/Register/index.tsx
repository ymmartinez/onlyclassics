import React, { useRef, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Checkbox, CheckboxChangeEvent } from 'primereact/checkbox';
import axios from 'axios';
import { Toast } from 'primereact/toast';
import { useNavigate } from 'react-router-dom';

type Severity = 'success' | 'info' | 'warn' | 'error';

const Register = () => {
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);
    const [termsVisible, setTermsVisible] = useState<boolean>(false);
    const toast = useRef<Toast>(null);
    const navigate = useNavigate();

    const showToast = (severity: Severity, summary: string, detail: string) => {
        toast.current?.show({ severity: severity, summary: summary, detail: detail });
    };

    const handleRegister = () => {
        if (!acceptedTerms) {
            showToast('warn', 'Aviso', 'Debe aceptar los términos y condiciones');
            return;
        }

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
    };

    const toggleTermsVisibility = () => {
        setTermsVisible(!termsVisible);
    };

    const header = (
        <>
            <div className='text-left'>
                <Button onClick={() => navigate('/')} icon="pi pi-arrow-left" className="p-button-text" />
            </div>
            <div>
                <i className="pi pi-user" style={{ fontSize: '2.5rem' }}></i>
            </div>
        </>
    );

    const footer = (
        <div className="flex flex-wrap justify-content-end">
            <Button className='border-round-xl' label="Continuar" onClick={handleRegister} severity="success" raised style={{ width: '19vh', backgroundColor: '#279EFF' }} disabled={!acceptedTerms} />
        </div>
    );

    return (
        <div className="flex justify-content-center align-content-center align-items-center" style={{ minHeight: "calc(100vh - 4rem)" }}>
            <Toast ref={toast} />
            <Card
                footer={footer}
                header={header}
                title="Crear cuenta"
                className='text-center p-4 bg-white border-round-xl'
            >
                <div className="p-inputgroup flex mt-4">
                    <span className="p-float-label">
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

                <div className="p-inputgroup flex mt-4">
                    <span className="p-float-label">
                        <InputText
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    (document.getElementById('email') as HTMLInputElement).focus();
                                }
                            }}
                        />
                        <label htmlFor="lastName">Apellido</label>
                    </span>
                </div>

                <div className="p-inputgroup flex mt-4">
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
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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

                <div className="card flex justify-content-center align-items-center mt-4">
                    <Checkbox
                        inputId="acceptTerms"
                        checked={acceptedTerms}
                        onChange={(e: CheckboxChangeEvent) => setAcceptedTerms(e.checked ?? false)}
                    />
                    <label htmlFor="acceptTerms" className="ml-2">
                        He leído y acepto los <a className="p-link" onClick={() =>navigate('/terms')}><b>términos y condiciones</b></a>
                    </label>
                </div>
            </Card>
        </div>
    );
};

export default Register;