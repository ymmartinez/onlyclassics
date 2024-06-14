import React, { useRef, useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import './index.css';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const [visibleRight, setVisibleRight] = React.useState(false);
    const navigate = useNavigate();

    const navigateView = (route:string) => {
        navigate(route); 
        setVisibleRight(false);
    }

    const items = [
        
        {
            label: 'Inicio',
            icon: 'pi pi-fw pi-briefcase',
            items: [
                {
                    label: 'Perfil',
                    icon: 'pi pi-user',
                    command: () => {
                        navigateView('/data')
                    } 
                },
                {
                    label: 'Notificaciones',
                    icon: 'pi pi-bell',
                    command: () => {
                        navigateView('/notifications')
                    }
                },
                { label: 'Guardados',
                icon: 'pi pi-bookmark',
                command: () => {
                    navigateView('/save')
                    }
                },
                {
                    label: 'Ayuda',
                    icon: 'pi pi-question-circle',
                    command: () => {
                        navigateView('/help')
                    }
                } 
            ]
        },

        {
            label: 'Profile',
            items: [
        {
            label: 'Ajustes',
            icon: 'pi pi-cog',
            command: () => {
                navigateView('/setting')
            }
        },
        {
            label: 'Cerrar sesion',
            icon: 'pi pi-sign-out',
            command: () => {
            navigateView('/login')
            }
        }
    ]
}
];

    const menu = <Menu model={items} />;

    return (
        <div style={{ margin: 0, padding: 0}}>
        <Button icon="pi pi-bars" onClick={() => setVisibleRight(true)} />
        <Sidebar visible={visibleRight} position='right'onHide={() => setVisibleRight(false)} style={{width: '235px',padding: 0, border: 'none'}}>
            {menu}
        </Sidebar>
    </div>
    );
}

export default SideBar;