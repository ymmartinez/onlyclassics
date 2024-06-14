import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import axios from 'axios';
import CarouselArticle from '../CarouselArticle';
import { Divider } from 'primereact/divider';

const Footer = () => {
    return (
        <Card className="border-round-xl" style={{backgroundColor: '#0E46A3'}}>
            <div className="divider-container">
                <div className="logo-container">
                    <Image alt="Logo" className="logo" />
                </div>
                <Divider layout="vertical" />
                <div className="text-container">
                    <p></p>
                </div>
            </div>
        </Card>
    );
};

export default Footer;
