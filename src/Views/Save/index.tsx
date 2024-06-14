import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Menubar } from 'primereact/menubar';
import './index.css';
import { Navigate, useNavigate } from 'react-router-dom';

interface Article {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

const initialSave: Article[] = [
    {
        id: 1,
        title: 'Objeto místico',
        description: 'Objeto místico para hacer magia',
        imageUrl: 'https://via.placeholder.com/150'
    },
    {
        id: 2,
        title: 'Ford',
        description: 'Auto clásico',
        imageUrl: 'https://via.placeholder.com/150'
    },
    {
        id: 3,
        title: 'Moto clásica',
        description: 'Moto año 1950',
        imageUrl: 'https://via.placeholder.com/150'
    },
    {
        id: 4,
        title: 'Piedra mística',
        description: 'Piedra del Himalaya',
        imageUrl: 'https://via.placeholder.com/150'
    },
    {
        id: 5,
        title: 'Lámpara antigua',
        description: 'Lámpara antigua',
        imageUrl: 'https://via.placeholder.com/150'
    },
    {
        id: 6,
        title: 'Auto clásico',
        description: 'Auto clásico',
        imageUrl: 'https://via.placeholder.com/150'
    },
];

const Save: React.FC = () => {
    const [savedArticles, setSavedArticles] = useState<Article[]>(initialSave);
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
    const [shareDialogVisible, setShareDialogVisible] = useState<boolean>(false);
    const [currentArticle, setCurrentArticle] = useState<Article | null>(null);

    const deleteArticle = (id: number) => {
        setSavedArticles(savedArticles.filter(article => article.id !== id));
    };

    const shareArticle = (article: Article, platform: string) => {
        const url = window.location.href;
        const text = `${article.title} - ${article.description}`;
        let shareUrl = '';

        switch (platform) {
            case 'whatsapp':
                shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
                break;
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(article.title)}&summary=${encodeURIComponent(article.description)}`;
                break;
            default:
                console.error('Unsupported platform:', platform);
                return;
        }

        window.open(shareUrl, '_blank');
    };

    const articleDialogFooter = (
        <div className="ui-dialog-buttonpane p-clearfix">
            <Button label="Cerrar" icon="pi pi-times" onClick={() => setSelectedArticle(null)} />
        </div>
    );

    const shareOptions = currentArticle ? [
        { label: 'WhatsApp', icon: 'pi pi-whatsapp', command: () => shareArticle(currentArticle, 'whatsapp') },
        { label: 'Twitter', icon: 'pi pi-twitter', command: () => shareArticle(currentArticle, 'twitter') },
        { label: 'Facebook', icon: 'pi pi-facebook', command: () => shareArticle(currentArticle, 'facebook') },
        { label: 'LinkedIn', icon: 'pi pi-linkedin', command: () => shareArticle(currentArticle, 'linkedin') },
    ] : [];

    const navigate = useNavigate();
    return (
        <div className="saved-articles-container">
            <div className="header">
                <Button 
                    onClick={() =>navigate('/')} 
                    icon="pi pi-arrow-left" 
                    className="p-button-text back-button"
                />
                <h2 className="title">Articulos Guardados</h2>
            </div>
            <div className="articles-grid">
                {savedArticles.map((article) => (
                    <Card key={article.id} title={article.title} className="article-card">
                        <img src={article.imageUrl} alt={article.title} className="article-image" onClick={() => setSelectedArticle(article)} />
                        <div className="article-description">{article.description}</div>
                        <div className="article-actions">
                            <Button icon="pi pi-share-alt" className="border-round-xl" onClick={() => { setCurrentArticle(article); setShareDialogVisible(true); }} />
                            <Button icon="pi pi-trash" className="border-round-xl" onClick={() => deleteArticle(article.id)} />
                        </div>
                    </Card>
                ))}
            </div>
            <Dialog header={selectedArticle?.title} visible={!!selectedArticle} style={{ width: '50vw' }} footer={articleDialogFooter} onHide={() => setSelectedArticle(null)}>
                <div className="article-dialog-content">
                    <img src={selectedArticle?.imageUrl} alt={selectedArticle?.title} className="dialog-image" />
                    <p>{selectedArticle?.description}</p>
                </div>
            </Dialog>
            <Dialog header="Compartir Artículo" visible={shareDialogVisible} style={{ width: '30vw' }} onHide={() => setShareDialogVisible(false)}>
                <div className="share-options">
                    <Menubar model={shareOptions} />
                </div>
            </Dialog>
        </div>
    );
};

export default Save;