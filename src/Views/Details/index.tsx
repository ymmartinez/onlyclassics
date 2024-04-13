import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const Details = () => {
    const [visible, setVisible] = useState(false);

    const onHide = () => {
        setVisible(false);
    };
    const activitiesData = [
        { id: 1, activity: 'Nombre completo:'},
        {id: 1, activity: 'Direccion:'},
        { id: 1, activity: 'Pais:'},
        { id: 1, activity: 'Celular:'},
        ];
        

    return (
        <div style={{ backgroundColor: '#EEEEEE'}} className="h-screen flex justify-content-center align-content-center align-items-center">
        <Card className="p-card-title" style={{
                width:'500px',
                textAlign: 'center',
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '10px',
            }}>
    <div>
            <DataTable value={activitiesData} >
                    <Column field="activity" header="Datos Personales" />
            </DataTable>
    </div>
<Button label="Editar" icon="pi pi-pencil" onClick={() => setVisible(true)} />
<Dialog
                visible={visible}
                modal
                onHide={() => setVisible(false)}
                content={({ hide }) => (
                    <div className="flex flex-column px-8 py-5 gap-4" style={{ borderRadius: '12px', backgroundImage: 'radial-gradient(circle at left top, var(--primary-400), var(--primary-700))' }}>
                    <div>
            <h2>Editar datos personales</h2>
            <div>
                <label>Nombre:</label>
                <InputText name="name"/>
            </div>
            <div>
                <label>Correo Electrónico:</label>
                <InputText name="email" />
            </div>
            <Button label="Guardar"  />
        </div>
                        <div className="flex align-items-center gap-2">
                            <Button label="Atras" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                            <Button label="Listo" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                        </div>
                    </div>
                )}
            ></Dialog>
            </Card>
        </div>
    )
};

export default Details;