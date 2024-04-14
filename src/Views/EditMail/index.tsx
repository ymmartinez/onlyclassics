import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { useNavigate } from 'react-router-dom';
import { InputText } from "primereact/inputtext";

const EditMail= () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const navigate = useNavigate()

    const handleSave = () => {
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 3000);
    };
    const header = (
        <>
            <div className='text-left'>
                <Button onClick={() =>navigate('/user')} icon="pi pi-arrow-left" className="p-button-text " />
            </div>
            <div>
                <i className="pi pi-at" style={{ fontSize: '2.5rem' }}></i>
            </div>
        </>
    );
    const footer = (
        <>
        <div className="flex justify-content-end">
        <Button style={{ backgroundColor: '#7FC7D9'}} label="Guardar cambios" icon="pi pi-check" className="p-button-success border-round-xl" onClick={handleSave} />
        </div>
        </>
    );
    return (
    <div style={{ backgroundColor: '#EEEEEE'}} className="h-screen flex justify-content-center align-content-center align-items-center">
        <Card footer={footer} header={header} title='Cambio de Mail' className="p-card-title" style={{
            width:'500px',
            textAlign: 'center',
            backgroundColor: 'white',
            padding: '10px',
            borderRadius: '10px',
        }}>
            
                <div className="p-fluid mt-4">
                    <span className="p-float-label">
                        <InputText id="currentMail"/>
                        <label htmlFor="currentMail">Mail</label>
                    </span>
                </div>
                <div className="p-fluid mt-4">
                    <span className="p-float-label">
                        <InputText id="newMail" />
                        <label htmlFor="newMail">Nuevo Mail</label>
                    </span>
                </div>
        </Card>
    </div>
    );
};

export default EditMail;