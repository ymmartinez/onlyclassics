import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

const Structure = () => {
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'User',
            icon: 'pi pi-star'
        },
    ]

    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
    const end = (
        <div className="flex align-items-center gap-2 ">
            <i className="pi pi-search"></i>
            <InputText placeholder="Search" height="60" type="text" className="w-30rem sm:w-auto p-inputtext-lg" />
        </div>
    );

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
    )
}

export default Structure;