import React, { useRef, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Toast } from 'primereact/toast';

type Severity = 'success' | 'info' | 'warn' | 'error';

const EditPassword = () => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate()
    const toast = useRef<Toast>(null);

    const showToast = (severity: Severity, summary: string, detail: string) => {
        toast.current?.show({ severity: severity, summary: summary, detail: detail });
    }

    const handleSave = async () => {
        await axios.patch('http://localhost:3000/users/change-password', {
            password,
            newPassword,
            confirmPassword
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        }).then(() => {
            showToast('success', 'Contraseña actualizada', 'Hemos enviado un correo a su dirección de email para confirmar el cambio de contraseña');
        }).catch((error) => {
            console.log(error);
            showToast('error', 'No se pudo actualizar la contraseña', 'Verifique los mensajes en la pantalla');
        });
    };

    const header = (
        <>
            <div className='text-left'>
                <Button onClick={() =>navigate('/setting')} icon="pi pi-arrow-left" className="p-button-text " />
            </div>
            <div>
                <i className="pi pi-lock" style={{ fontSize: '2.5rem' }}></i>
            </div>
        </>
    );
    const footer = (
        <div className="flex justify-content-end">
            <Button
                style={{ backgroundColor: '#176B87'}}
                label="Guardar"
                icon="pi pi-save"
                className="border-round-xl"
                onClick={handleSave}
            />
        </div>
    );
    return (
    <div className="flex justify-content-center align-content-center align-items-center" style={{ minHeight: "calc(100vh - 4rem)"}}>
        <Toast ref={toast} />
        <Card footer={footer} header={header} title='Cambio de contraseña' className='text-center p-4 bg-white border-round-xl'>
                <div className="p-fluid mt-4">
                    <span className="p-float-label">
                        <Password
                            id="currentPassword"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            toggleMask
                            feedback={false}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    (document.getElementById('newPassword') as HTMLInputElement).focus();
                                }
                            }}
                            />
                        <label htmlFor="currentPassword">Contraseña actual</label>
                    </span>
                </div>
                <div className="p-fluid mt-4">
                    <span className="p-float-label">
                        <Password
                            inputId="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            toggleMask
                            feedback={false}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    (document.getElementById('confirmPassword') as HTMLInputElement).focus();
                                }
                            }}
                            />
                        <label htmlFor="newPassword">Nueva contraseña</label>
                    </span>
                </div>
                <div className="p-fluid mt-4">
                    <span className="p-float-label">
                        <Password
                            inputId="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            toggleMask
                            feedback={false}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleSave();
                                }
                            }}
                            />
                        <label htmlFor="confirmPassword">Confirmar nueva contraseña</label>
                    </span>
                </div>
        </Card>
    </div>
    );
};

export default EditPassword;