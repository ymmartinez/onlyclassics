import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import './index.css';

interface BannerProps {
    images: string[];
}

const Banner: React.FC<BannerProps> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Cambia de imagen cada 3 segundos
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="banner-container">
            <div className="banner-image-wrapper">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className={`banner-image ${index === currentImageIndex ? 'active' : ''}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;