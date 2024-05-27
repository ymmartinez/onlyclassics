import React from 'react';
import { Card } from 'primereact/card';
import './index.css';
import { useNavigate } from 'react-router-dom';

interface Article {
    id: number;
    title: string;
    price: number;
    currency: string;
    image: string;
}

const CardArticle = ({ article }: { article: Article }) => {
    const navigate = useNavigate();

    const header = ( path: string ) => (
        <div className="image-container border-round-xl p-2">
            <img
                className='cursor-pointer'
                src={`http://localhost:3000/articles/file?path=${path}`}
                alt="Image cover"
                onClick={() => { navigate(`/article/${article.id}`) }}
            />
        </div>
    );

    return (
        <div className="flex justify-content-center">
            <Card
                title={article.title}
                subTitle={article.currency + ' ' + article.price}
                header={header(article.image)}
                className="border-round-xl max-w-20rem"
            ></Card>
        </div>
    );
};

export default CardArticle;
