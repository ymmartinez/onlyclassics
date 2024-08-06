import React, { useEffect } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { useNavigate, useParams } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import SideBar from '../SideBar';
import './index.css';

const Bar = () => {
    const { search } = useParams();
    const [text, setText] = React.useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/search/${text}`);
    }

    useEffect(() => {
        if (search !== '-') {
            setText(search || '');
        }
    }, [search]);

    const startContent = (
        <React.Fragment>
            <img 
                src="logoo.png"
                alt="Logo" 
                width="60" 
                height="60" 
                onClick={() => navigate('/')}
                className='cursor-pointer'
            />
        </React.Fragment>
    );

    const centerContent = (
        <React.Fragment>
            <span className="p-input-icon-right w-30rem">
                <i className="pi pi-search cursor-pointer" onClick={handleSearch}></i>
                <InputText
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Buscar"
                    className='border-round-xl w-30rem'
                ></InputText>
            </span>
        </React.Fragment>
    );

    const endContent = (
        <React.Fragment>
            <Button onClick={()=>navigate('/postarticle')} className="border-round-xl m-2"label="Publicar Articulo" />
            <SideBar></SideBar>
        </React.Fragment>
    );

    return (
        <Toolbar
            start={startContent}
            center={centerContent}
            end={endContent}
            className="border-round-xl py-0 h-4rem toolBar"
        />
    );
};

export default Bar;
