import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { Card } from 'primereact/card';
import { Ripple } from 'primereact/ripple';

let Home = () => {
    interface Product {
        id: string;
        code: string;
        name: string;
        description: string;
        image: string;
        price: number;
        category: string;
        quantity: number;
        inventoryStatus: string;
        rating: number;
    }

    const [products, setProducts] = useState<Product[]>([]);
    const responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1400px',
            numVisible: 2,
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

    const getSeverity = (product: Product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    useEffect(() => {
        setProducts([{
            id: 'id',
            code: 'code',
            name: 'zapas',
            description: 'description',
            image: 'image',
            price: 4,
            category: 'category',
            quantity: 4,
            inventoryStatus: 'inventoryStatus',
            rating: 4,
        }])
        
    }, []);

    const productTemplate = (product: Product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} className="w-6 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" className="p-button p-button-rounded" />
                        <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div style={{ backgroundColor: '#EEEEEE'}} className='p-5'>
            <Card className="px-5 border-round-2xl h-10rem" style={{
                backgroundImage: 'url(background.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }}>
            </Card>

            <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
            autoplayInterval={3000} itemTemplate={productTemplate} />

            <Card title="Categorias" className="p-card-title px-5 border-round-2xl align-items-start" style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                <div style={{ display: 'flex' }} className='p-0'>
                    <div className="text-white flex select-none justify-content-start align-items-start shadow-2 border-round-2xl p-6 w-10 font-bold p-ripple" style={{ backgroundColor: '#176B87'}}>
                        Autos clasicos
                        <Ripple />
                    </div>
                    <div className="text-white flex select-none justify-content-start align-items-start shadow-2 border-round-2xl p-6 w-10 font-bold p-ripple" style={{ backgroundColor: '#176B87'}}>
                        Antiguedades
                        <Ripple />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Home;