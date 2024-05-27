import React from 'react';
import { Carousel } from 'primereact/carousel';
import './index.css';
import { Image } from 'primereact/image';

const ImageProduct = ({images}: {images: string[]}) => {
    const icon = (<i className="pi pi-search"></i>);

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const imageTemplate = (src: string) => {
        return (
            <div className="image-item">
                <Image src={`http://localhost:3000/articles/file?path=${src}`} indicatorIcon={icon} alt="Image" preview width="250" />
            </div>
        );
    };

    return (
        <div className="carousel-demo">
            <Carousel
                value={images}
                numVisible={1}
                numScroll={1}
                responsiveOptions={responsiveOptions}
                itemTemplate={imageTemplate}
                circular
                autoplayInterval={0}
            />
        </div>
    );
};

export default ImageProduct;