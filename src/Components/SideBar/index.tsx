import React, { useRef, useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import './index.css';

interface MenuItemWithSeparator extends MenuItem {
    separator?: boolean;
}

interface MenuItem {
    label: string;
    icon?: string;
    items?: MenuItem[];
}
const SideBar = () => {
    const [visible, setVisible] = React.useState(false);

    const items: MenuItem[] = [
        
        // {
        //     label: 'Inicio',
        //     icon: 'pi pi-fw pi-home'
        // },
        {
            label: 'Inicio',
            icon: 'pi pi-fw pi-briefcase',
            items: [
                { label: 'Perfil',
                icon: 'pi pi-user'},
                { label: 'Notificaciones',
                icon: 'pi pi-bell'},
                { label: 'Guardados',
                icon: 'pi pi-bookmark'},
                { label: 'Ayuda',
                icon: 'pi pi-question-circle'}
            ]
        },

        {
            label: 'Profile',
            items: [
        {
            label: 'Ajustes',
            icon: 'pi pi-cog'
        },
        {
            label: 'Cerrar sesion',
            icon: 'pi pi-sign-out'
        }
    ]
}
];

    const menu = <Menu model={items} />;

    return (
        <div style={{ margin: 0, padding: 0 }}>
        <Button icon="pi pi-bars" onClick={() => setVisible(true)} />
        <Sidebar visible={visible} onHide={() => setVisible(false)} style={{ padding: 0, border: 'none'}}>
            {menu}
        </Sidebar>
    </div>
    );
}

export default SideBar;