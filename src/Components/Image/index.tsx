import React from 'react';
import { Carousel } from 'primereact/carousel';
import './index.css';

interface ImageItem {
    id: string;
    src: string;
    alt: string;
}

const images: ImageItem[] = [
    { id: '1', src: 'image1.jpeg', alt: 'Image 1' },
    { id: '2', src: 'images.jpeg', alt: 'Image 2' },
    { id: '3', src: 'image4.jpg', alt: 'Image 3' },
];

const Image = () => {
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

    const imageTemplate = (image: ImageItem) => {
        return (
            <div className="image-item">
                <img src={image.src} alt={image.alt} className="carousel-image" />
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

export default Image;