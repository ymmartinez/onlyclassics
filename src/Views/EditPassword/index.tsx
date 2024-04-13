import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Message } from 'primereact/message';

const EditPassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleSave = () => {
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 3000);
    };
    const header = (
        <i className="pi pi-lock" style={{ fontSize: '2.5rem' }}></i>
    );
    const footer = (
        <>
        <Button style={{ backgroundColor: '#64CCC5'}} label="Guardar cambios" icon="pi pi-check" className="p-button-success" onClick={handleSave} />
        <Button style={{ backgroundColor: '#64CCC5'}} label="Volver atras" icon="pi pi-check" className="p-button-success" onClick={handleSave} />
        </>
    );
    return (
    <div style={{ backgroundColor: '#EEEEEE'}} className="h-screen flex justify-content-center align-content-center align-items-center">
        <Card footer={footer} header={header} title='Cambio de contraseña' className="p-card-title" style={{
            width:'500px',
            textAlign: 'center',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
        }}>
            
                <div className="p-fluid m-4">
                    <span className="p-float-label">
                        <Password id="currentPassword" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} toggleMask feedback={false} />
                        <label htmlFor="currentPassword">Contraseña actual</label>
                    </span>
                </div>
                <div className="p-fluid m-4">
                    <span className="p-float-label">
                        <Password id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} toggleMask feedback={false} />
                        <label htmlFor="newPassword">Nueva contraseña</label>
                    </span>
                </div>
                <div className="p-fluid m-4">
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