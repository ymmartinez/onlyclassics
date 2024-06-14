import React, { useState, useEffect } from 'react';
import CarouselArticle from "../../Components/CarouselArticle";
import { CarouselResponsiveOption } from 'primereact/carousel';
import { Card } from 'primereact/card';
import { Ripple } from 'primereact/ripple';
import axios from 'axios';
import './index.css';
import { Image } from 'primereact/image';
import { useNavigate } from 'react-router-dom';
import { Galleria } from 'primereact/galleria';

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
    const [banners, setBanners] = useState<Banner[]>([]);
    const navigate = useNavigate();

    const responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1400px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const getBanners = () => {
        setBanners([
            {src: 'prop.png'},
            {src: 'modoo.png'}
        ]);
    }

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
        getBanners();
    }, []);

    const itemTemplate = (banner : Banner) => {
        return <div style={{ width: '100%', overflow: 'hidden' }}>
                <Image
                    src={banner.src}
                    imageClassName='border-round-xl'
                    imageStyle={{ width: '100%', height: '200px', objectFit: 'cover'}}
                />
            </div>
    }

    return (
        <div className='py-4'>
            <Galleria
                className='border-round-xl'
                value={banners}
                responsiveOptions={responsiveOptions}
                item={itemTemplate}
                circular
                autoPlay
                transitionInterval={3000}
                showThumbnails={false}
                showIndicators
            />

            <CarouselArticle articles={articles} />

            <Card title="¿Qué Buscás?" className="p-card-title border-round-xl" style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                <div className='grid'>
                    <div className='col-12 sm:col-12 md:col-3 lg:col-3 xl:col-3'>
                        <div className='text-black p-ripple cursor-pointer border-round-xl' style={{backgroundColor: '#67C6E3'}} onClick={() => navigate('/search/-/1')}>
                            <h3 className='pl-2 pt-2 m-0'>Autos Clasicos</h3>
                            <div className='flex justify-content-end pr-2 pb-2'>
                                <Image imageClassName="border-round-xl h-5rem" src='cars-classics.png'/>
                            </div>
                            <Ripple />
                        </div>
                    </div>
                    <div className='col-12 sm:col-12 md:col-3 lg:col-3 xl:col-3'>
                        <div className='text-black p-ripple cursor-pointer border-round-xl' style={{backgroundColor: '#67C6E3'}} onClick={() => navigate('/search/-/1')}>
                            <h3 className='pl-2 pt-2 m-0'>Antiguedades</h3>
                            <div className='flex justify-content-end pr-2 pb-2'>
                                <Image imageClassName="border-round-xl h-5rem" src='antiques.png'/>
                            </div>
                            <Ripple />
                        </div>
                    </div>
                    <div className='col-12 sm:col-12 md:col-3 lg:col-3 xl:col-3'>
                        <div className='text-black p-ripple cursor-pointer border-round-xl' style={{backgroundColor: '#67C6E3'}} onClick={() => navigate('/search/-/1')}>
                            <h3 className='pl-2 pt-2 m-0'>Objetos Misticos</h3>
                            <div className='flex justify-content-end pr-2 pb-2'>
                                <Image imageClassName="border-round-xl h-5rem" src='objectmistic.png'/>
                            </div>
                            <Ripple />
                        </div>
                        </div>
                    <div className='col-12 sm:col-12 md:col-3 lg:col-3 xl:col-3'>
                        <div className='text-black p-ripple cursor-pointer border-round-xl' style={{backgroundColor: '#67C6E3'}} onClick={() => navigate('/search/-/1')}>
                            <h3 className='pl-2 pt-2 m-0'>Otros</h3>
                            <div className='flex justify-content-end pr-2 pb-2'>
                                <Image imageClassName="border-round-xl h-5rem" src='cars-classics.png'/>
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