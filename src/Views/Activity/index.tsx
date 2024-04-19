import React from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom';

const Activity = () => {
    let activitiesData: any[] = [];
    const navigate = useNavigate();

    const getActivities = () => {
        activitiesData = [
            { id: 1, activity: 'Actividad 1', date: '01/01/2023', hour: "hora", description: 'Descripción de la actividad 1' },
            { id: 2, activity: 'Actividad 2', date: '02/01/2023', hour: "hora", description: 'Descripción de la actividad 2' },
            { id: 3, activity: 'Actividad 3', date: '03/01/2023', hour: "hora", description: 'Descripción de la actividad 3' },
            { id: 1, activity: 'Actividad 1', date: '01/01/2023', hour: "hora", description: 'Descripción de la actividad 1' },
            { id: 2, activity: 'Actividad 2', date: '02/01/2023', hour: "hora", description: 'Descripción de la actividad 2' },
            { id: 3, activity: 'Actividad 3', date: '03/01/2023', hour: "hora", description: 'Descripción de la actividad 3' },
            { id: 1, activity: 'Actividad 1', date: '01/01/2023', hour: "hora", description: 'Descripción de la actividad 1' },
            { id: 2, activity: 'Actividad 2', date: '02/01/2023', hour: "hora", description: 'Descripción de la actividad 2' },
            { id: 3, activity: 'Actividad 3', date: '03/01/2023', hour: "hora", description: 'Descripción de la actividad 3' },
        ];
    }

    getActivities();

    const header = (
        <>
            <div className='text-left'>
                <Button onClick={() =>navigate('/user')} icon="pi pi-arrow-left" className="p-button-text " />
            </div>
            <div>
                <i className="pi pi-id-card" style={{ fontSize: '2.5rem' }}></i>
            </div>
        </>
    );
    return (
        <div className="flex justify-content-center align-content-center align-items-center py-4" style={{ minHeight: " calc(100vh - 4rem)"}}>
            <Card header={header} title="Actividad" className="text-center p-4 bg-white border-round-xl">
                <DataTable value={activitiesData} scrollable scrollHeight="20rem">
                    <Column field="activity" header="Actividad" />
                    <Column field="date" header="Fecha" />
                    <Column field="hour" header="Hora" />
                    <Column field="description" header="Descripción" />
                </DataTable>
            </Card>
        </div >
    )
}

export default Activity;