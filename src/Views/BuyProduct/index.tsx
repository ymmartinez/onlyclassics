import React, { useState } from 'react';
import { Steps } from 'primereact/steps';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { Dialog } from 'primereact/dialog';
import { SelectButton } from 'primereact/selectbutton';
import Number from '../../Components/Number';
import Send from '../../Components/Send';
import PaymentModo from '../../Components/PaymentModo';

interface Tarjeta {
    numero: string;
    fechaVencimiento: string;
    cvv: string;
    tipo: string;
}

    const BuyProduct = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [visible, setVisible] = useState<boolean>(false);

    const steps = [
        { label: 'Datos personales' },
        { label: 'Retiro/Envio' },
        { label: 'Metodo de pago' }
    ];

    const handleNext = () => {
        setActiveIndex(activeIndex + 1);
    };

    const handlePrev = () => {
        setActiveIndex(activeIndex - 1);
    };
    const opcionesCardType = [
        { label: 'Tarjeta de Débito', value: 'debito' },
        { label: 'Tarjeta de Crédito', value: 'credito' },
        { label: 'Mercado Pago', value: 'mercadoPago' }
    ];

    const handleTipoTarjetaChange = (e: any) => {
        setCardType(e.value);
    };
    const [numeroTarjeta, setNumeroTarjeta] = useState<string>('');
        const [CardType, setCardType] = useState<string>('');

        const handleNumeroTarjetaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const numero = e.target.value.replace(/\D/g, ''); // Eliminar caracteres no numéricos
            setNumeroTarjeta(numero);
            // Adivinar el tipo de tarjeta
            if (/^4/.test(numero)) {
            setCardType('Visa');
            } else if (/^5[1-5]/.test(numero)) {
            setCardType('Mastercard');
            } else if (/^3[47]/.test(numero)) {
            setCardType('American Express');
            } else {
            setCardType('Desconocido');
            }
        };
        const showDialog = () => {
            setVisible(true);
            };

            const hideDialog = () => {
                setVisible(false);
            };
            const [option, setOption] = useState<string>('');

            const handleOptionChange = (e: { value: string }) => {
                setOption(e.value);
            };

    const step0 = (
        <div>
            <div className='formgrid grid'>
                <div className="field m-0 col-12 md:col-4 w-full">
                    <span className="p-float-label mt-4">
                        <InputText className='border-round-xl w-full' placeholder="Correo electrónico" />
                        <label htmlFor="email">Correo electrónico</label>
                    </span>
                </div>
                <div className="field m-0 col-12 md:4 w-6">
                    <span className="p-float-label mt-4">
                        <InputText className='border-round-xl w-full' placeholder="Nombre" />
                        <label htmlFor="name">Nombre</label>
                    </span>
                </div>
                <div className="field m-0 col-12 md:4 w-6">
                    <span className="p-float-label mt-4">
                        <InputText className='border-round-xl w-full' placeholder="Apellido" />
                        <label htmlFor="surname">Apellido</label>
                    </span>
                </div>
                <div className="field m-0 col-12 md:4 w-6">
                    <span className="p-float-label mt-4">
                        <InputText className='border-round-xl w-full' placeholder="DNI" />
                        <label htmlFor="dni">DNI</label>
                    </span>
                </div>
                <div className="field m-0 col-12 md:4 w-6">
                    <span className="p-float-label mt-4">
                        <InputText className='border-round-xl w-full' placeholder="Teléfono" />
                        <label htmlFor="phone">Teléfono</label>
                    </span>
                </div>
                <div className='flex justify-content-end col-12'>
                    <Button className='border-round-xl mt-4' label="Siguiente" icon="pi pi-chevron-right" onClick={handleNext} />
                </div>
            </div>
        </div>
    );

    const step1 = (
        <div className='m-5'>
            <SelectButton
                value={option}
                options={[
                    { label: 'Retiro', value: 'Retiro' },
                    { label: 'Envio', value: 'Envio' }
                ]}
                onChange={handleOptionChange}
            />
            {option === 'Retiro' && (
                <div>
                    {/* Aquí van las opciones de retiro */}
                    <p>Opciones de Retiro</p>
                    <Number></Number>
                </div>
            )}
            {option === 'Envio' && (
                <div>
                    {/* Aquí van las opciones de envío */}
                    <p>Opciones de envío</p>
                    <Send></Send>
                </div>
            )}
            <div className='flex justify-content-between col-12'>
                <Button className='border-round-xl mt-4' label="Anterior" icon="pi pi-chevron-left" onClick={handlePrev} />
                <Button className='border-round-xl mt-4' label="Siguiente" icon="pi pi-chevron-right" onClick={handleNext} />
            </div>
        </div>
    );
    return (
        <div className='py-4 grid m-0'>
        <div className="col-8">
            <Card className="border-round-xl">
            <Steps model={steps} activeIndex={activeIndex} readOnly={true} />
            {activeIndex === 0 && step0}
            {activeIndex === 1 && step1}
            {activeIndex === 2 && (
                <PaymentModo></PaymentModo>
        //     <div className="formgrid grid mt-6">
        //     <div className="field m-0 col-12 md:col-4">
        //         <span className="p-float-label">
        //             <InputText className='border-round-xl ' value={numeroTarjeta} onChange={handleNumeroTarjetaChange} />
        //             <label htmlFor="currency">Numero de tarjeta</label>
        //         </span>
        //         <div className={classNames({ 'p-error': CardType === 'Desconocido' })}>
        //             {CardType}
        //             </div>
        //     </div>
        //     <div className="field m-0 col-12 md:col-4">
        //         <span className="p-float-label">
        //         <InputText className='border-round-xl' />
        //             <label htmlFor="currency">CVV</label>
        //         </span>
        //         <div>
        // <span className="cvv-link" onClick={showDialog}>¿Dónde encontrar el CVV?</span>
        //     <Dialog header="¿Dónde encontrar el CVV?" visible={visible} style={{ width: '50vw' }} onHide={hideDialog}>
        //     <div>
        //     <p>
        //         El CVV (Card Verification Value) es un código de seguridad de tres o cuatro dígitos que se encuentra en tu tarjeta de crédito o débito.
        //         <br />
        //         Para la mayoría de las tarjetas Visa, Mastercard y Discover, el CVV se encuentra en la parte posterior de la tarjeta, en el área de firma.
        //         <br />
        //         Para las tarjetas American Express, el CVV se encuentra en la parte delantera de la tarjeta, justo por encima del número de la tarjeta.
        //     </p>
        //     </div>
        //     <div className="p-d-flex p-jc-end">
        //     </div>
        //     </Dialog>
        // </div>
        //     </div>
        //     <div className="field m-0 col-12 md:col-4">
        //         <span className="p-float-label">
        //         <InputText className='border-round-xl' />
        //             <label htmlFor="currency">Nombre del titular</label>
        //         </span>
        //     </div>

        //     <div className="field m-0 col-12 md:col-4 mt-5">
        //         <span className="p-float-label">
        //         <InputText className='border-round-xl' />
        //             <label htmlFor="currency">Fecha de vencimiento</label>
        //         </span>
        //         <div className='flex justify-between mt-4 border-round-xl'>
        //             <Button className='border-round-xl mt-4 mr-2' label="Anterior" icon="pi pi-chevron-left" onClick={handlePrev} />
        //             <Button className='border-round-xl mt-4' label="Siguiente" icon="pi pi-chevron-right" onClick={handleNext} />
        //         </div>
        //     </div>
        // </div>
            )}
            </Card>
        </div>
        <div className="col-4">
        <Card className="border-round-xl">
        <h2>Resumen de Compra</h2>
        <div className="p-grid p-justify-center">
                <img src="URL_DE_LA_IMAGEN" alt="Producto" />
                <div>
                <h4>Nombre del Producto</h4>
                <p>Descripción del Producto</p>
                <p>Precio: $XX.XX</p>
                </div>
        </div>
            </Card>
        </div>
        </div>
    );
};

export default BuyProduct;