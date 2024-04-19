import React from "react";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const FrequentQuestions = () => {
    const navigate = useNavigate();

    const header = (
        <>
            <div className='text-left'>
                <Button onClick={() =>navigate('/help')} icon="pi pi-arrow-left" className="p-button-text " />
            </div>
            <div>
                <i className="pi pi-question-circle" style={{ fontSize: '2.5rem' }}></i>
            </div>
        </>
    );

    return (
        <div className="flex justify-content-center align-content-center align-items-center" style={{ minHeight: "calc(100vh - 4rem)"}}>
            <Card header={header}title="Preguntas Frecuentes" style={{
            width:'700px',
            textAlign: 'center',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
        }}>
                <div className="h-full p-grid p-justify-center">
                    <div className="p-col-8">
                        <Accordion>
                            <AccordionTab header="¿Cómo puedo registrarme?">
                                <p>Puedes registrarte en la pagina de inicio completando el formulario de registro. 
                                    Solo necesitas proporcionar tu nombre, dirección de correo electrónico y una contraseña.</p>
                            </AccordionTab>
                            <AccordionTab header="¿Cómo puedo actualizar mi información de perfil?">
                                <p>Puedes actualizar tu información en cualquier momento accediendo a configuración desde allí,
                                    puedes editar tu dirección de correo electrónico, contraseña y otra información relevante.</p>
                            </AccordionTab>
                            <AccordionTab header="¿Cómo puedo contactar al soporte técnico si tengo problemas?">
                                <p>Si experimentas problemas con Only Classics, puedes ponerte en contacto con 
                                    nuestro equipo de soporte técnico enviando un correo electrónico a mail</p>
                            </AccordionTab>
                            <AccordionTab header="¿Cómo puedo eliminar mi cuenta?">
                                <p> Si decides eliminar tu cuenta en Only Classics, puedes hacerlo accediendo a configuración y
                                    seleccionando la opción de eliminar cuenta.
                                    Ten en cuenta que esta acción es irreversible y eliminará permanentemente todos tus datos de la pagina.</p>
                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>
            </Card>
        </div>
        );
    };

export default FrequentQuestions;