import React, {useEffect, useRef, useState} from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';


const SignOff = ({isProtected = false}) => {
    const [visible, setVisible] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setVisible(isProtected && !localStorage.getItem('access_token'));
    }, [isProtected]);

    const footerDialog = (
        <>
            <Button label="Iniciar Sesion" icon="pi pi-check" style={{ backgroundColor:'#176B87'}} onClick={() => navigate('/login')} />
        </>
    );

    return (
        <Dialog
                header="No has iniciado sesion"
                visible={visible}
                onHide={() => navigate('/')}
                footer={footerDialog}
            >
            Para acceder a esta seccion debes iniciar sesion
        </Dialog>
    );
};

export default SignOff;