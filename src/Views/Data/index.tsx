import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Data = () => {
    const navigate = useNavigate();
    const [data, setData] = useState();

    const activitiesData = [
        { id: 1, activity: 'Nombre completo:'},
        {id: 1, activity: 'Direccion:'},
        { id: 1, activity: 'Pais:'},
        { id: 1, activity: 'Celular:'},
        ];

        const getData = () => {
            // axios.get('http://localhost:3000/user/id')
            //     .then((response) => {
            //         console.log(response.data);
            //         setData(response.data);
            //     })
            }
    
        useEffect(() => {
            getData();
        }, []);

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
        <div style={{ backgroundColor: '#EEEEEE'}} className="h-screen flex justify-content-center align-content-center align-items-center">
            <Card header={header} className="p-card-title" style={{
                    width:'500px',
                    textAlign: 'center',
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '10px',
                }}>
                <DataTable value={activitiesData} className='pt-0 mt-0'>
                        <Column field="activity" header="Datos Personales" />
                </DataTable>
            </Card>
        </div>
    )
};

export default Data;