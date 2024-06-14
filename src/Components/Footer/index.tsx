import { Card } from 'primereact/card';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { Divider } from 'primereact/divider';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <Card className="border-round-xl mt-4" style={{ backgroundColor: '#0E46A3' }}>
        <footer className="footer">
            <div className="footer-content">
                <div>
                    <img src="banner.png" 
                    width="200" 
                    height="80" 
                    alt="Logo" 
                    />
                </div>
                <Divider layout="vertical" />
                <div className='align-content-center'>
                    <div onClick={() => navigate('/terms')} style={{ cursor: 'pointer', textAlign: 'left' }}>
                        <b>Términos y Condiciones</b>
                    </div>
                    <div onClick={() => navigate('/help')} style={{ cursor: 'pointer', textAlign: 'left' }}>
                        <b>Ayuda</b>
                    </div>
                </div>
                <Divider layout="vertical" />
                <div className='align-content-center'>
                    <div onClick={() => navigate('/terms')} style={{ cursor: 'pointer', textAlign: 'left' }}>
                        <b>Contacto</b>
                    </div>
                    <div onClick={() => navigate('/frecuentquestions')} style={{ cursor: 'pointer', textAlign: 'left' }}>
                        <b>Preguntas frecuentes</b>
                    </div>
                </div>
                <Divider layout="vertical"/>
                <div className='align-content-center'>
                    <div onClick={() => navigate('/terms')} style={{ cursor: 'pointer', textAlign: 'left' }}>
                        <b>Redes sociales</b>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
        </footer>
    </Card>
    );
};

export default Footer;
