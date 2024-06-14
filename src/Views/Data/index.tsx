import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Divider } from 'primereact/divider';

const Data = () => {
    const navigate = useNavigate();
    const [name, setName] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [mail, setMail] = useState<string>('');

    const getData = () => {
        axios.get('http://localhost:3000/auth/profile', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then((response) => {
            setName(response.data.first_name + ' ' + response.data.last_name);
            setAddress(response.data.address);
            setCountry(response.data.country);
            setPhone(response.data.phone);
            setMail(response.data.email);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    const header = (
        <>
            <div className='text-left'>
                <Button onClick={() =>navigate('/')} icon="pi pi-arrow-left" className="p-button-text " />
            </div>
            <div>
                <i className="pi pi-id-card" style={{ fontSize: '2.5rem' }}></i>
            </div>
        </>
    );

    return (
        <div className="flex justify-content-center align-content-center align-items-center" style={{ minHeight: "calc(100vh - 4rem)"}}>
            <Card header={header} title="Datos Personales" className='text-center p-4 bg-white border-round-xl'>
                <div className='flex justify-content-between align-content-center align-items-center'>
                    <h3 className='p-0 m-0'>Nombre: </h3><h4 className='p-0 m-0 pl-4'>{name}</h4>
                </div>
                <Divider />
                <div className='flex justify-content-between align-content-center align-items-center'>
                    <h3 className='p-0 m-0'>Email: </h3><h4 className='p-0 m-0 pl-4'>{mail}</h4>
                </div>
                <Divider />
                <div className='flex justify-content-between align-content-center align-items-center'>
                    <h3 className='p-0 m-0'>Direccion: </h3><h4 className='p-0 m-0 pl-4'>{address}</h4>
                </div>
                <Divider />
                <div className='flex justify-content-between align-content-center align-items-center'>
                    <h3 className='p-0 m-0'>Pais: </h3><h4 className='p-0 m-0 pl-4'>{country}</h4>
                </div>
                <Divider />
                <div className='flex justify-content-between align-content-center align-items-center'>
                    <h3 className='p-0 m-0'>Celular: </h3><h4 className='p-0 m-0 pl-4'>{phone}</h4>
                </div>
            </Card>
        </div>
    )
};

export default Data;