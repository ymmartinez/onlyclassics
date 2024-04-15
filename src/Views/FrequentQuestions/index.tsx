import React from "react";
import { Accordion, AccordionTab } from 'primereact/accordion';

const FrequentQuestions = () => {
    return (
        <div className="h-full p-grid p-justify-center">
            <div className="p-col-8">
                <Accordion>
                    <AccordionTab header="Pregunta 1">
                        <p>Respuesta a la pregunta 1.</p>
                    </AccordionTab>
                    <AccordionTab header="Pregunta 2">
                        <p>Respuesta a la pregunta 2.</p>
                    </AccordionTab>
                    <AccordionTab header="Pregunta 3">
                        <p>Respuesta a la pregunta 3.</p>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    );
};

export default FrequentQuestions;