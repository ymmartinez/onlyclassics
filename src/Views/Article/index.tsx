import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { useNavigate, useParams } from 'react-router-dom';
import Questions from '../../Components/Questions';
import ImageProduct from '../../Components/ImageProduct';
import Advertisingg from '../../Components/Advertisingg';
import { Dialog } from 'primereact/dialog';
import axios from 'axios';

interface Article {
    id: number;
    title: string;
    description: string;
    price: number;
    model: string;
    brand: string;
    year: number;
    location: string;
    currency: string;
    images: string[];
}

const Article = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState<Article>({
        id: 0,
        title : "",
        description : "",
        price : 0,
        model: "",
        brand: "",
        year: 0,
        location: "",
        currency: "",
        images: []
    });

    const getArticle = async () => {
        await axios.get(`http://localhost:3000/articles/${id}`)
            .then((response) => {
                setArticle(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getArticle();
    }, []);

    return(
        <div className="grid py-4">
            <div className='col-6'>
                <Card className="border-round-xl" title='Fotos del producto'>
                    <ImageProduct images={article.images} />
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
                <Questions articleId={article.id}></Questions>
            </div>
            <div className='col-12'>
                <Advertisingg></Advertisingg>
            </div>
        </div>
    )
}

export default Article;