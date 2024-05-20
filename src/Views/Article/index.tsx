import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Questions from '../../Components/Questions';
import { Sidebar } from 'primereact/sidebar';
import Image from '../../Components/Image';
import Advertisingg from '../../Components/Advertisingg';
import { Dialog } from 'primereact/dialog';

interface Article {
    title: string;
    description: string;
    price: number;
    model: string;
    brand: string;
    year: number;
    location: string;
    currency: string;
}

const Article = () => {
    const[article,setArticle]= useState<Article>({
        title : "Titulo de prueba",
        description : "hola",
        price : 300,
        model: "honda",
        brand: "hola",
        year: 1890,
        location:"uruguay",
        currency: 'USD'
    });

    const navigate = useNavigate();
    const [showImagesDialog, setShowImagesDialog] = useState<boolean>(false);

    const showImages = () => {
        setShowImagesDialog(true);
    };

    const onHideImagesDialog = () => {
        setShowImagesDialog(false);
    };

    return(
        <div className="grid py-4">
            <div className='col-6'>
                <Card className="border-round-xl" title='Fotos del producto'>
                    <Image/>
                    <div className="">
                        <Button label="Ver Imágenes expandidas" icon="pi pi-image" onClick={showImages} className="p-button-text p-button-plain" />
                    </div>
                    <Dialog header="Fotos del producto" visible={showImagesDialog} onHide={onHideImagesDialog}>
                        <div className="">
                            <Image />
                        </div>
                    </Dialog>
                </Card>
            </div>
            <div className='col-6'>
                <Card className="border-round-xl" title={article.title} subTitle={article.currency + ' ' + article.price}>
                    <Divider align="left">
                        <div className="flex align-items-start">
                            <b>Descripcion</b>
                        </div>
                    </Divider>
                    <p>{article.description}</p>
                    <Divider align="left">
                        <div className="flex justify-content-start">
                            <b>Modelo</b>
                        </div>
                    </Divider>
                    <p>{article.model}</p>
                    <Divider align="left">
                        <div className="flex justify-content-start">
                            <b>Marca</b>
                        </div>
                    </Divider>
                    <p>{article.brand}</p>
                    <Divider align="left">
                        <div className="flex justify-content-start">
                            <b>Año</b>
                        </div>
                        <p>{article.year}</p>
                    </Divider>
                    <Divider align="left">
                        <div className="flex align-items-start">
                            <b>Ubicacion</b>
                        </div>
                    </Divider>
                    <p>{article.location}</p>
                </Card>
                <div className='flex justify-content-end'>
                <Button className='border-round-xl mt-4' onClick={() =>navigate('/buyproduct')} label="Comprar articulo" icon="pi pi-shopping-cart" />
                </div>
            </div>
            <div className='col-12'>
                <Questions articleId={10}></Questions>
            </div>
            <div className='col-12'>
                <Advertisingg></Advertisingg>
            </div>
``        </div>
    )
}

export default Article;