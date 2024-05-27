import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import axios from 'axios';
import CarouselArticle from '../CarouselArticle';

interface Article {
    id: number;
    title: string;
    price: number;
    image: string;
    currency: string;
}

interface Banner {
    src: string
}

const Advertisingg = () => {
    const [banners, setBanners] = useState<Banner[]>([]);
    const [articles, setArticles] = useState<Article[]>([]);

    const getArticles = () => {
        axios.get(`http://localhost:3000/articles`)
        .then((response) => {
            setArticles(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getArticles();
    }, []);

    return (
        <div className="grid">
            <div className="col-12 mb-2">
                <Card className='border-round-xl'>
                    <div className="grid">
                        <div className="col-9">
                            <Image src="path/to/your/advertisement-image.jpg" />
                        </div>

                        <div className="col-3">
                            <h2>¡Descubre nuestras ofertas!</h2>
                            <p>Descubre los mejores productos a precios increibles.</p>
                            <Button label="Ver más" icon="pi pi-arrow-right" className="p-button-text" />
                        </div>
                    </div>
                </Card>
            </div>

            <div className="col-12">
                <Card title="Articulos destacados" className="border-round-xl mb-4"></Card>
                <CarouselArticle articles={articles} />
            </div>
        </div>
    );
};

export default Advertisingg;
