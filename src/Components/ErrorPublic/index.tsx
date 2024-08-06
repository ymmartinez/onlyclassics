import React, { useState } from 'react';
import { Button } from 'primereact/button'; 
import { Dialog } from 'primereact/dialog'; 
import './index.css'; 
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast'; 
import { useRef } from 'react';

const ErrorPublic: React.FC = () => {
    const [showNotification, setShowNotification] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false); 
    const [notificationMessage, setNotificationMessage] = useState('');
    const navigate = useNavigate();
    const toast = useRef<Toast>(null);

    const handlePostArticle = () => {
        if (!isSubscribed) {
            setNotificationMessage('No se pudo publicar porque no está suscripto.');
            setShowNotification(true);
            toast.current?.show({severity: 'warn', summary: 'Advertencia', detail: 'No está suscripto', life: 3000});
        } else {
            setNotificationMessage('Artículo publicado exitosamente.');
            setShowNotification(true);
            toast.current?.show({severity: 'success', summary: 'Éxito', detail: 'Artículo publicado', life: 3000});
            console.log("Artículo publicado"); 
        }
    };

    const hideNotification = () => {
        setShowNotification(false);
    };

    return (
        <div>
            <Button 
                label="Publicar" 
                onClick={handlePostArticle} 
                className='border-round-xl mt-3' 
            />

            <Toast ref={toast} position="top-right"/>

            <Dialog 
                header="Notificación"
                visible={showNotification} 
                style={{ width: '40vw' }} 
                onHide={hideNotification}
            >
                <div  className="flex justify-content-end">
                    <p>{notificationMessage}</p>
                    {!isSubscribed && (
                        <Button className="border-round-xl mt-6" label="Suscribirse" onClick={() => navigate('/Subscription')}/>
                    )}
                </div>
            </Dialog>
        </div>
    );
};

export default ErrorPublic;