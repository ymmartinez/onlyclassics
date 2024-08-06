import React, { useState, useEffect } from 'react';
import CarouselArticle from "../../Components/CarouselArticle";
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import { Card } from 'primereact/card';
import { Ripple } from 'primereact/ripple';
import axios from 'axios';
import './index.css';
import { Image } from 'primereact/image';
import { useNavigate } from 'react-router-dom';
import Banner from "../../Components/Banner";

interface Article {
    id: number;
    title: string;
    price: number;
    currency: string;
    image: string;
}

interface Banner {
    src: string
}

let Home = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const navigate = useNavigate();


    useEffect(() => {
        const getArticles = () => {
            axios.get(`http://localhost:3000/articles`)
                .then((response) => {
                    setArticles(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }

        getArticles();
    }, []);

    const images = [
        'link.png',
        'hola.png',
    ];

    return (
        <div className=''>
            <div className="p-card-title border-round-xl banner-wrapper" >
            <Banner images={images} />
            </div>
            <CarouselArticle articles={articles} />

            <Card className="p-card-title border-round-xl" style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                    <div className='grid justify-content-end'>
                        <div className='col-12 sm:col-12 md:col-3 lg:col-3 xl:col-3'>
                            <div className='text-black p-ripple border-round-xl' style={{backgroundColor: '#67C6E3'}} onClick={() => navigate('/search/-/1')}>
                                <h3 className='pl-2 pt-2 m-0'>Autos Clasicos</h3>
                                <div className='flex justify-content-end pr-2 pb-2'>
                                    <Image imageClassName="border-round-xl h-5rem" src='cars-classics.png'/>
                                </div>
                                <Ripple />
                            </div>
                        </div>
                        <div className='col-12 sm:col-12 md:col-3 lg:col-3 xl:col-3'>
                            <div className='text-black p-ripple border-round-xl' style={{backgroundColor: '#67C6E3'}}>
                                <h3 className='pl-2 pt-2 m-0'>Antiguedades</h3>
                                <div className='flex justify-content-end pr-2 pb-2'>
                                    <Image imageClassName="border-round-xl h-5rem" src='antiques.png'/>
                                </div>
                                <Ripple />
                            </div>
                        </div>
                        <div className='col-12 sm:col-12 md:col-3 lg:col-3 xl:col-3'>
                            <div className='text-black p-ripple border-round-xl' style={{backgroundColor: '#67C6E3'}}>
                                <h3 className='pl-2 pt-2 m-0'>Otros</h3>
                                <div className='flex justify-content-end pr-2 pb-2'>
                                    <Image imageClassName="border-round-xl h-5rem" src='otro.png'/>
                                </div>
                                <Ripple />
                            </div>
                        </div>
                    </div>
            </Card>
        </div>
    )
}

export default Home;