import React from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Activity = () => {
    const activitiesData = [
        { id: 1, activity: 'Actividad 1', date: '01/01/2023', hour:"hora", description: 'Descripción de la actividad 1' },
        { id: 2, activity: 'Actividad 2', date: '02/01/2023', hour:"hora", description: 'Descripción de la actividad 2' },
        { id: 3, activity: 'Actividad 3', date: '03/01/2023', hour:"hora", description: 'Descripción de la actividad 3' },
        { id: 1, activity: 'Actividad 1', date: '01/01/2023', hour:"hora", description: 'Descripción de la actividad 1' },
        { id: 2, activity: 'Actividad 2', date: '02/01/2023', hour:"hora", description: 'Descripción de la actividad 2' },
        { id: 3, activity: 'Actividad 3', date: '03/01/2023', hour:"hora", description: 'Descripción de la actividad 3' },
        { id: 1, activity: 'Actividad 1', date: '01/01/2023', hour:"hora", description: 'Descripción de la actividad 1' },
        { id: 2, activity: 'Actividad 2', date: '02/01/2023', hour:"hora", description: 'Descripción de la actividad 2' },
        { id: 3, activity: 'Actividad 3', date: '03/01/2023', hour:"hora", description: 'Descripción de la actividad 3' },
        ];
    return (
        <div style={{ backgroundColor: '#EEEEEE'}} className="card px-5 border-round-2xl h-50rem">
            <div>
                <h1> <i className="pi pi-bars"></i> Actividad</h1>
                <DataTable value={activitiesData} scrollable scrollHeight="480px">
                    <Column field="activity" header="Actividad" />
                    <Column field="date" header="Fecha" />
                    <Column field="hour" header="Hora" />
                    <Column field="description" header="Descripción" />
                </DataTable>
            </div>
        </div>
    )
}

export default Activity;