import React from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const Help = () => {
    const navigate = useNavigate();
    const handleContactSupport = () => {
    };

    const header = (
        <>
            <div className='text-left'>
                <Button onClick={() => navigate('/user')} icon="pi pi-arrow-left" className="p-button-text " />
            </div>
            <div>
                <i className="pi pi-info-circle" style={{ fontSize: '2.5rem' }}></i>
            </div>
        </>
    );

    return (
        <div className="flex justify-content-center align-content-center align-items-center" style={{ minHeight: " calc(100vh - 4rem)"}}>
            <Card header={header} title="Ayuda" className="p-mt-4" style={{
                width: '500px',
                textAlign: 'center',
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '10px',
            }}>
                <div className="p-fluid">
                    <div className="p-field">
                        <Button label="Contactar al Soporte" onClick={handleContactSupport} icon="pi pi-envelope" className='mt-3 border-round-xl' style={{ backgroundColor: '#176B87' }} />
                    </div>
                    <div className="p-field">
                        <Button label="Preguntas Frecuentes (FAQ)" onClick={() => navigate('/frecuentquestions')} icon="pi pi-question-circle" className='mt-3 border-round-xl' style={{ backgroundColor: '#176B87' }} />
                    </div>
                </div>
            </Card>
    </div >
);
};

export default Help;