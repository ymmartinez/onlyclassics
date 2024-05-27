import React, { useState, useRef } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import { Card } from 'primereact/card';
import { InputTextarea } from 'primereact/inputtextarea';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './index.css';

interface Message {
    id: number;
    buyer: string;
    subject: string;
    content: string;
    response?: string;
}

const Notifications = () => {
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
    const [visible, setVisible] = useState(false);
    const [response, setResponse] = useState('');
    const toast = useRef<Toast>(null);

    const messages: Message[] = [
        { id: 1, buyer: 'John Doe', subject: 'Consulta sobre el producto A', content: '¿Tiene más detalles sobre el producto A?' },
        { id: 2, buyer: 'Jane Smith', subject: 'Disponibilidad del producto B', content: '¿Está disponible el producto B en color azul?' },
        { id: 3, buyer: 'Alice Johnson', subject: 'Envío internacional', content: '¿Realizan envíos a otros países?' },
    ];

    const handleMessageClick = (message: Message) => {
        setSelectedMessage(message);
        setResponse(message.response || '');
        setVisible(true);
    };

    const handleRespond = () => {
        if (selectedMessage) {
            selectedMessage.response = response;
            toast.current?.show({ severity: 'success', summary: 'Respuesta enviada', detail: `Has respondido a: ${selectedMessage.subject}`, life: 3000 });
            setVisible(false);
            setSelectedMessage(null);
            setResponse('');
        }
    };

    return (
        <div className="buyer-messages">
            <Toast ref={toast} />
            <h2>Consultas de Compradores</h2>
            <div className="messages-container">
                {messages.map((message) => (
                    <Card
                        key={message.id}
                        title={message.subject}
                        subTitle={`De: ${message.buyer}`}
                        className="message-card"
                        onClick={() => handleMessageClick(message)}
                    >
                        <p>{message.content}</p>
                    </Card>
                ))}
            </div>
            <Dialog header="Responder a la consulta" visible={visible} modal onHide={() => setVisible(false)} className="response-dialog">
                {selectedMessage && (
                    <div className="dialog-content">
                        <p><strong>De:</strong> {selectedMessage.buyer}</p>
                        <p><strong>Asunto:</strong> {selectedMessage.subject}</p>
                        <p><strong>Consulta:</strong> {selectedMessage.content}</p>
                        <InputTextarea
                            value={response}
                            onChange={(e) => setResponse(e.target.value)}
                            rows={5}
                            cols={30}
                            placeholder="Escribe tu respuesta aquí..."
                            className="response-textarea"
                        />
                        <Button label="Enviar Respuesta" icon="pi pi-check" onClick={handleRespond} className="p-mt-3" />
                    </div>
                )}
            </Dialog>
        </div>
    );
};

export default Notifications;