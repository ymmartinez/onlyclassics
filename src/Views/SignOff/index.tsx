import React, {useRef, useState} from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';


const SignOff = () => {
    const [visible, setVisible] = useState(false);

    const showDialog = () => {
        setVisible(true);
    };

    const hideDialog = () => {
        setVisible(false);
    };

    const confirmDelete = () => {
        // Aquí debes implementar la lógica para eliminar la cuenta
        console.log('Cuenta eliminada');
        hideDialog();
    };

    return (
        <div>
            <Card>
            <Dialog header="Eliminar Cuenta" visible={visible} style={{ width: '450px' }} onHide={hideDialog}>
                <div>
                    <p>¿Estás seguro de que deseas eliminar tu cuenta?</p>
                    <div className="p-d-flex p-jc-between">
                        <Button label="Cancelar" className="p-button-secondary" onClick={hideDialog} />
                        <Button label="Eliminar" icon="pi pi-check" className="p-button-danger" onClick={confirmDelete} />
                    </div>
                </div>
            </Dialog>
            </Card>
        </div>
    );
};

export default SignOff;