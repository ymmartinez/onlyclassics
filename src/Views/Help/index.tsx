import React, { useState } from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Dialog } from "primereact/dialog";
import { InputTextarea } from "primereact/inputtextarea";

const Help = () => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const [value, setValue] = useState<string>('');
    const header = (
        <>
            <div className='text-left'>
                <Button onClick={() => navigate('/')} icon="pi pi-arrow-left" className="p-button-text " />
            </div>
            <div>
                <i className="pi pi-info-circle" style={{ fontSize: '2.5rem' }}></i>
            </div>
        </>
    );
    const headerElement = (
        <div className="align-items-start justify-content-start flex ">
            <p>Envíenos su consulta.</p>
        </div>
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
                        <Button label="Contactar al Soporte" onClick={() => setVisible(!visible)} icon="pi pi-envelope" className='mt-3 border-round-xl' style={{ backgroundColor: '#279EFF' }} />
                        <Dialog style={{
                            width:'500px',
                            textAlign: 'center',
                            backgroundColor: 'white',
                            padding: '10px',
                            borderRadius: '10px',
                        }} 
                        visible={visible} 
                        header={headerElement}
                        modal onHide={() => setVisible(false)}>
                        <div className="card flex justify-content-center">
                    <InputTextarea autoResize value={value} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)} rows={8} cols={90} />
                    </div>
                    <div className="flex justify-content-end mt-3">
                        <Button label="Enviar" className='border-round-xl' style={{ backgroundColor:'#176B87'}}/>
                        </div>
                        </Dialog>
                    </div>
                    <div className="p-field">
                        <Button label="Preguntas Frecuentes (FAQ)" onClick={() => navigate('/frecuentquestions')} icon="pi pi-question-circle" className='mt-3 border-round-xl' style={{ backgroundColor: '#279EFF' }} />
                    </div>
                    <div className="p-field">
                        <Button label="Terminos y Condiciones" onClick={() => navigate('/terms')} icon="pi pi-file" className='mt-3 border-round-xl' style={{ backgroundColor: '#279EFF' }} />
                    </div>
                </div>
            </Card>
    </div >
);
};

export default Help;