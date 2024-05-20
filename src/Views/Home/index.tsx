import React, { useState, useEffect } from 'react';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import { Card } from 'primereact/card';
import { Ripple } from 'primereact/ripple';
import axios from 'axios';
import './index.css';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Galleria } from 'primereact/galleria';


interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    currency: string;
}

interface Banner {
    src: string
}

let Home = () => {
    const [products, setProducts] = useState<Product[]>([]);
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
            {src: 'background.jpeg'},
            {src: 'h.gif'}
        ]);
    }

    useEffect(() => {
        const getArticles = () => {
            axios.get(`http://localhost:3000/articles`)
                .then((response) => {
                    setProducts(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }

        getArticles();
        getBanners();
    }, []);

    const header = ( path: string ) => (
        <Image alt="Card" imageClassName="border-round-xl" src={`http://localhost:3000/articles/file?path=${path}`} height='200px' />
    );

    const productTemplate = (product: Product) => {
        return (
            <div className='p-2'>
                <Card title={product.title} subTitle={product.currency + ' ' + product.price} header={header(product.image)}
                    className="p-card-title border-round-xl p-2">
                </Card>
            </div>
        );
    };

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
                transitionInterval={2000}
                showThumbnails={false}
                showIndicators
            />

            <Carousel
                className="pt-4"
                value={products}
                responsiveOptions={responsiveOptions}
                itemTemplate={productTemplate}
                circular
                autoplayInterval={3000}
                numVisible={3}
                numScroll={3}
            />

            <Card title="¿Qué Buscás?" className="p-card-title border-round-xl" style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                <div className='grid'>
                    <div className='col-12 sm:col-12 md:col-3 lg:col-3 xl:col-3'>
                        <div className='text-black p-ripple border-round-xl' style={{backgroundColor: '#DFF6FF'}} onClick={() => navigate('/search/-/1')}>
                            <h3 className='pl-2 pt-2 m-0'>Autos Clasicos</h3>
                            <div className='flex justify-content-end pr-2 pb-2'>
                                <Image imageClassName="border-round-xl h-5rem" src='cars-classics.png'/>
                            </div>
                            <Ripple />
                        </div>
                    </div>
                    <div className='col-12 sm:col-12 md:col-3 lg:col-3 xl:col-3'>
                        <div className='text-black p-ripple border-round-xl' style={{backgroundColor: '#DFF6FF'}}>
                            <h3 className='pl-2 pt-2 m-0'>Antiguedades</h3>
                            <div className='flex justify-content-end pr-2 pb-2'>
                                <Image imageClassName="border-round-xl h-5rem" src='antiques.png'/>
                            </div>
                            <Ripple />
                        </div>
                    </div>
                    <div className='col-12 sm:col-12 md:col-3 lg:col-3 xl:col-3'>
                        <div className='text-black p-ripple border-round-xl' style={{backgroundColor: '#DFF6FF'}}>
                            <h3 className='pl-2 pt-2 m-0'>Objetos Misticos</h3>
                            <div className='flex justify-content-end pr-2 pb-2'>
                                <Image imageClassName="border-round-xl h-5rem" src='objectmistic.png'/>
                            </div>
                            <Ripple />
                        </div>
                        </div>
                    <div className='col-12 sm:col-12 md:col-3 lg:col-3 xl:col-3'>
                        <div className='text-black p-ripple border-round-xl' style={{backgroundColor: '#DFF6FF'}}>
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