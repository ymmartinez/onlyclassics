import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { useNavigate } from 'react-router-dom';

const EditPassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const navigate = useNavigate()

    const handleSave = () => {
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 3000);
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
        <>
        <div className="flex justify-content-end">
        <Button style={{ backgroundColor: '#176B87'}} label="Guardar cambios" icon="pi pi-check" className="p-button-success border-round-xl" onClick={handleSave} />
        </div>
        </>
    );
    return (
    <div className="flex justify-content-center align-content-center align-items-center" style={{ minHeight: "calc(100vh - 4rem)"}}>
        <Card footer={footer} header={header} title='Cambio de contraseña' style={{
            width:'500px',
            textAlign: 'center',
            backgroundColor: 'white',
            padding: '10px',
            borderRadius: '10px',
        }}>
                <div className="p-fluid mt-4">
                    <span className="p-float-label">
                        <Password id="currentPassword" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)}  feedback={false} toggleMask/>
                        <label htmlFor="currentPassword">Contraseña actual</label>
                    </span>
                </div>
                <div className="p-fluid mt-4">
                    <span className="p-float-label">
                        <Password id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} toggleMask feedback={false} />
                        <label htmlFor="newPassword">Nueva contraseña</label>
                    </span>
                </div>
                <div className="p-fluid mt-4">
                    <span className="p-float-label">
                        <Password id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} toggleMask feedback={false}
                        inputId="password"/>
                        <label htmlFor="confirmPassword">Confirmar nueva contraseña</label>
                    </span>
                </div>
        </Card>
    </div>
    );
};

export default EditPassword;