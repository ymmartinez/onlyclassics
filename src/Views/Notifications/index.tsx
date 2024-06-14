import React, { useState, useRef } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import { Card } from 'primereact/card';
import { InputTextarea } from 'primereact/inputtextarea';
import { useNavigate } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './index.css';
import Banner from "../../Components/Banner";

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
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, buyer: 'John Doe', subject: 'Consulta sobre el producto A', content: '¿Tiene más detalles sobre el producto A?' },
        { id: 2, buyer: 'Jane Smith', subject: 'Disponibilidad del producto B', content: '¿Está disponible el producto B en color azul?' },
        { id: 3, buyer: 'Alice Johnson', subject: 'Envío internacional', content: '¿Realizan envíos a otros países?' },
    ]);
    const toast = useRef<Toast>(null);
    const navigate = useNavigate();

    const handleSensitiveContent = (text: string): boolean => {
        const phoneRegex = /\b\d{10,11}\b/;
        const bankInfoRegex = /\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/;

        return phoneRegex.test(text) || bankInfoRegex.test(text);
    };

    const handleMessageClick = (message: Message) => {
        if (!message.response) { 
            setSelectedMessage(message);
            setResponse(message.response || '');
            setVisible(true);
        }
    };

    const handleRespond = () => {
        if (selectedMessage) {
            if (handleSensitiveContent(response)) {
                toast.current?.show({ severity: 'warn', summary: 'Contenido Restringido', detail: 'No se pueden enviar números de teléfono o datos bancarios.', life: 3000 });
                return;
            }
            const updatedMessage = { ...selectedMessage, response };
            setSelectedMessage(updatedMessage);

            const updatedMessages = messages.map(msg => msg.id === updatedMessage.id ? updatedMessage : msg);
            setMessages(updatedMessages);

            toast.current?.show({ severity: 'success', summary: 'Respuesta enviada', detail: `Has respondido a: ${selectedMessage.subject}`, life: 3000 });
            setVisible(false);
            setResponse('');
        }
    };
    const images = [
        'banner2.png',
        'hola.png',
    ];

    return (
        <div className="buyer-messages">
            <Toast ref={toast} />
            <div className="header">
                <Button 
                    onClick={() => navigate('/')} 
                    icon="pi pi-arrow-left" 
                    className="p-button-text back-button"
                />
                <h2 className="title">Consultas de compradores</h2>
            </div>
            <div className="messages-container">
                {messages.map((message) => (
                    <Card
                        key={message.id}
                        title={message.subject}
                        subTitle={`De: ${message.buyer}`}
                        className="message-card border-round-xl"
                        onClick={() => handleMessageClick(message)}
                    >
                        <p>{message.content}</p>
                        {message.response && (
                            <div className="response">
                                <strong>Respuesta:</strong>
                                <p>{message.response}</p>
                            </div>
                        )}
                    </Card>
                ))}
            </div>
            <Dialog
                style={{
                    width:'500px',
                    backgroundColor: 'white',
                    padding: '10px',
                    borderRadius: '10px',
                }}
                header="Responder a la consulta" 
                visible={visible} 
                modal 
                onHide={() => setVisible(false)} 
            >
                {selectedMessage && (
                    <div className="border-round-xl">
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
                        <Button label="Enviar Respuesta" icon="pi pi-check" onClick={handleRespond} className="p-mt-3" disabled={handleSensitiveContent(response)} />
                        {handleSensitiveContent(response) && <p className="p-error p-mt-2">No se pueden enviar números de teléfono o datos bancarios.</p>}
                    </div>
                )}
            </Dialog>
            <div>
                <Banner images={images} />
            </div>

        </div>
    );
};

export default Notifications;