import React from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const Help = () => {
const handleContactSupport = () => {
};

const handleFAQ = () => {
};

return (
    <div className="p-d-flex p-jc-center">
        <Card title="Ayuda" className="p-mt-4" style={{ width: '400px' }}>
            <div className="p-fluid">
                <div className="p-field">
                    <Button label="Contactar al Soporte" className="p-button-primary" onClick={handleContactSupport} />
                </div>
                <div className="p-field">
                    <Button label="Preguntas Frecuentes (FAQ)" className="p-button-secondary" onClick={handleFAQ} />
                </div>
            </div>
        </Card>
    </div>
);
};

export default Help;