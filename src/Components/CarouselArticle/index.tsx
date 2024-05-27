import React from 'react';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import CardArticle from "../CardArticle";

interface Article {
    id: number;
    title: string;
    price: number;
    currency: string;
    image: string;
}

const CarouselArticle = ({ articles }: { articles: Article[] }) => {
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

    const articleTemplate = (article: Article) => {
        return (
            <CardArticle article={article} />
        );
    };

    return (
        <Carousel
            className="custom-carousel"
            value={articles}
            responsiveOptions={responsiveOptions}
            itemTemplate={articleTemplate}
            numVisible={2}
            numScroll={1}
            circular
            autoplayInterval={3000}
        />
    );
};

export default CarouselArticle;
