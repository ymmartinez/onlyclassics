import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';


const Setting = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    const confirmDelete = () => {
        // Aquí iría tu lógica para eliminar la cuenta
        // Por ejemplo, una llamada a la API para eliminar la cuenta del usuario

        // Después de eliminar la cuenta, puedes redirigir a la página de inicio de sesión
        // history.push('/login');
    };

        const header = (
            <>
                <div className='text-left'>
                    <Button onClick={() =>navigate('/user')} icon="pi pi-arrow-left" className="p-button-text " />
                </div>
                <div>
                    <i className="pi pi-cog" style={{ fontSize: '2.5rem' }}></i>
                </div>
            </>
        );

    return (
        <div className="flex justify-content-center align-content-center align-items-center" style={{ minHeight: "calc(100vh - 4rem)"}}>
        <Card header={header} title='Configuracion'style={{
            width:'500px',
            textAlign: 'center',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
        }}>
                <div className="p-fluid">
                    <div className="p-field">
                        <Button label="Cambiar contraseña" className="mt-3 border-round-xl" icon="pi pi-lock" onClick={() => navigate('/editpassword')} style={{ backgroundColor: '#176B87'}}/>
                    </div>
                    <div className="p-field">
                        <Button label="Cambiar correo electrónico" className="mt-3 border-round-xl" icon="pi pi-envelope" onClick={() => navigate('/editmail')}style={{ backgroundColor: '#176B87'}}/>
                    </div>
                    <div className="p-field">
                        <Button label="Actividad" className="mt-3 border-round-xl" icon="pi pi-bars" onClick={() => navigate('/activity')} style={{ backgroundColor: '#176B87'}}/>
                    </div>
                    <div className="p-field">
                        <Button label="Eliminar cuenta" className=" mt-3 border-round-xl" icon="pi pi-trash" severity="danger" onClick={() => setVisible(true)} />
                        <Dialog style={{
                            width:'500px',
                            textAlign: 'center',
                            backgroundColor: 'white',
                            padding: '20px',
                            borderRadius: '10px',
                        }}
                            visible={visible}
                            onHide={() => setVisible(false)}
                            header="Confirmar eliminación de cuenta"
                            modal
                            footer={
                            <div>
                                <Button label="Cancelar" className="p-button-text" onClick={() => setVisible(false)} />
                                <Button label="Eliminar" className="p-button-danger" onClick={confirmDelete} />
                            </div>
                            }
                        >
                            <div>
                            ¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.
                            </div>
                        </Dialog>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Setting;