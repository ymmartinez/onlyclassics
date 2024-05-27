import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import { Galleria } from 'primereact/galleria';
import axios from 'axios';

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

const Advertisingg = () => {
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

    const [banners, setBanners] = useState<Banner[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const productTemplate = (product: Product) => {
        return (
            <Card
                className="border-round-xl max-w-15rem min-h-20rem"
                title={<span className="single-line-title">{product.title}</span>}
                subTitle={product.currency + ' ' + product.price}
                header={header(product.image)}>
            </Card>
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
    const header = ( path: string ) => (
        <Image
            alt="Card"
            imageClassName="border-round-xl"
            src={`http://localhost:3000/articles/file?path=${path}`}
            height='150rem'
            />
    );
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
    }, []);


    return (
        <div className="grid">
            <div className="col-3">
                <Card className='border-round-xl'>
                    <div className='propaganda'>
                        <Image src="path/to/your/advertisement-image.jpg" />
                        <div>
                            <h4>¡No te pierdas nuestros productos especiales!</h4>
                            <p>Descubre articulos exclusivos.</p>
                            <Button label="Ver más" icon="pi pi-arrow-right" className="p-button-text" />
                        </div>
                    </div>
                </Card>
            </div>
            <div className="col-9">
                <Galleria
                    className='pt-4'
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
                    value={products}
                    responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate}
                    circular
                    autoplayInterval={3000}
                    numVisible={3}
                />
            </div>
        </div>
    );
};

export default Advertisingg;
