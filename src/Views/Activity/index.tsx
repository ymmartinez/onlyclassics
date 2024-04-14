import React from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';

const Activity = () => {
    let activitiesData : any[] = [];

    const getActivities = () => {
        activitiesData = [
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
    }

    getActivities();

    return (
        <div style={{ backgroundColor: '#EEEEEE'}}>
            <Card>
                <DataTable value={activitiesData} scrollable scrollHeight="480px">
                    <Column field="activity" header="Actividad" />
                    <Column field="date" header="Fecha" />
                    <Column field="hour" header="Hora" />
                    <Column field="description" header="Descripción" />
                </DataTable>
            </Card>
        </div>
    )
}

export default Activity;