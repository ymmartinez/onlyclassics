import React, { useState, useEffect } from 'react';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import { Card } from 'primereact/card';
import { Ripple } from 'primereact/ripple';
import axios from 'axios';
import './index.css';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Divider } from 'primereact/divider';   
interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    currency: string;
}

let Home = () => {
    const navigate = useNavigate();
    const handlePublic = () => {
        navigate('/publicarticle');
    }
    const { search } = useParams();
    const [products, setProducts] = useState<Product[]>([]);
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

    const getArticles = () => {
        axios.get(`http://localhost:3000/articles`)
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getArticles();
    }, []);

    const header = (
        <Image alt="Card" imageClassName="border-round-xl" src={`http://localhost:3000/articles/file`}/>
    );

    const productTemplate = (product: Product) => {
        return (
            <div className='p-2'>
                <Card title={product.title} subTitle={product.currency + ' ' + product.price} header={header}
                    className="p-card-title border-round-xl p-2">
                </Card>
            </div>
        );
    };

    

    return (
        <div className='py-4'>
            <Card className="px-5 border-round-xl h-10rem"style={{
                backgroundImage: 'url(background.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }}> 
            </Card>
            <div className="flex border-round-xl justify-content-end mt-4 full">
            <Button onClick={handlePublic} className="w-20rem" label="Publicar Articulo" raised />
            </div>

            <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel pt-4" circular
            autoplayInterval={3000} itemTemplate={productTemplate}/>

            <Card title="¿Qué Buscás?" className="p-card-title border-round-xl" style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                <div className='grid'>
                    <div className='col-12 sm:col-12 md:col-6 lg:col-6 xl:col-6'>
                        <div className='text-black p-ripple border-round-xl' style={{backgroundColor: '#DFF6FF'}}>
                            <h3 className='pl-2 pt-2 m-0'>Autos Clasicos</h3>
                            <div className='flex justify-content-end pr-2 pb-2'>
                                <Image imageClassName="border-round-xl h-5rem" src='cars-classics.png'/>
                            </div>
                            <Ripple />
                        </div>
                    </div>
                    <div className='col-12 sm:col-12 md:col-6 lg:col-6 xl:col-6'>
                        <div className='text-black p-ripple border-round-xl' style={{backgroundColor: '#DFF6FF'}}>
                            <h3 className='pl-2 pt-2 m-0'>Objetos Misticos</h3>
                            <div className='flex justify-content-end pr-2 pb-2'>
                                <Image imageClassName="border-round-xl h-5rem" src='cars-classics.png'/>
                            </div>
                            <Ripple />
                        </div>
                        </div>
                        <div className='col-12 sm:col-12 md:col-6 lg:col-6 xl:col-6'>
                        <div className='text-black p-ripple border-round-xl' style={{backgroundColor: '#DFF6FF'}}>
                            <h3 className='pl-2 pt-2 m-0'>Otros</h3>
                            <div className='flex justify-content-end pr-2 pb-2'>
                                <Image imageClassName="border-round-xl h-5rem" src='cars-classics.png'/>
                            </div>
                            <Ripple />
                        </div>
                        </div>
                    <div className='col-12 sm:col-12 md:col-6 lg:col-6 xl:col-6'>
                        <div className='text-black p-ripple border-round-xl' style={{backgroundColor: '#DFF6FF'}}>
                            <h3 className='pl-2 pt-2 m-0'>Antiguedades</h3>
                            <div className='flex justify-content-end pr-2 pb-2'>
                                <Image imageClassName="border-round-xl h-5rem" src='antiques.png'/>
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