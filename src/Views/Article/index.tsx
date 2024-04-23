import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import React, { useState } from 'react';

interface Article {
    title: string;
    description: string;
    price: number;
    model: string;
    brand: string;
    year: number;
    location: string;
}

const Article = () => {
    const[article,setArticle]= useState<Article>({
        title : "titulo de prueba",
        description : "hola",
        price : 300,
        model: "honda",
        brand: "hola",
        year: 1890,
        location:"uruguay",
    });

    return(
        <div className="flex justify-content-center align-content-center align-items-center h-full">
            <div className='col-5 '>
        <Card className="border-round-xl">
            <div>
            <h2>Imagen</h2>
            <img src="picture-front-premium.png" alt="" height={400} />
            </div>
            <div>
                <p>{article.price}</p>
            </div>
        </Card>
        </div>

        <div className='col-7'>
            <Card className="border-round-xl" title={article.title}>
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
        </div>
        </div>
    )
}

export default Article;