import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import './index.css';
import { Divider } from 'primereact/divider';

const Assistant = () => {
    const [visible, setVisible] = useState(false);
    const [messages, setMessages] = useState<Array<{ text: string, user: boolean }>>([
        { text: "¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte?", user: false }
    ]);
    const [inputText, setInputText] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messages.length > 3) {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const showDialog = () => {
        setVisible(true);
    };

    const hideDialog = () => {
        setVisible(false);
    };

    const handleSendMessage = () => {
        if (inputText.trim() !== '') {
            const userMessage = { text: inputText.trim(), user: true };
            const botResponse = getBotResponse(userMessage.text);
            
            setMessages(prevMessages => [...prevMessages, userMessage, { text: botResponse, user: false }]);
            setInputText('');
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    const getBotResponse = (message: string): string => {
        if (message.toLowerCase().includes('hola')) {
            return '¡Hola! ¿Cómo puedo ayudarte?';
        } else if (message.toLowerCase().includes('adiós')) {
            return '¡Hasta luego!';
        } else {
            return 'Lo siento, no entiendo tu mensaje.';
        }
    };

    return (
        <div className="assistant-container ">
            <Button icon="pi pi-comment" onClick={showDialog} className="assistant-button" />
            <Dialog header="Asistente Virtual" visible={visible} onHide={hideDialog} className="assistant-dialog" modal draggable={false} position="bottom-right">
                <div className="assistant-messages">
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.user ? 'user-message' : 'bot-message'}`}>
                            {message.text}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <div className="assistant-input-wrapper">
                    <InputText 
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Escribe un mensaje..."
                        className="rounded-input border-round-xl"
                    />
                    <Button icon="pi pi-send" onClick={handleSendMessage} className="send-button-icon" />
                </div>
            </Dialog>
        </div>
    );
};

export default Assistant;