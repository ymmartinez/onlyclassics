import React, { useState } from 'react';

function Send() {
    const [selectedOption, setSelectedOption] = useState('');
    const [showMeetingPoint, setShowMeetingPoint] = useState(false);
    const [meetingPoint, setMeetingPoint] = useState('');

    const handleOptionChange = (event:any) => {
        setSelectedOption(event.target.value);
        if (event.target.value === 'efectivo') {
        setShowMeetingPoint(true);
        } else {
        setShowMeetingPoint(false);
        }
    };

    const handleMeetingPointChange = (event:any) => {
        setMeetingPoint(event.target.value);
    };

    const handleSubmit = (event:any) => {
        event.preventDefault();
        console.log('Opción de envío seleccionada:', selectedOption);
        if (showMeetingPoint) {
        console.log('Punto de encuentro:', meetingPoint);
        }
        // Aquí podrías enviar la opción seleccionada y el punto de encuentro a tu servidor o hacer cualquier otra acción necesaria
    };

    return (
        <div>
        <h2>Selecciona tu método de envío:</h2>
        <form onSubmit={handleSubmit}>
            <label>
            Envío estándar:
            <input
                type="radio"
                value="estandar"
                checked={selectedOption === 'estandar'}
                onChange={handleOptionChange}
            />
            </label>
            <label>
            Envío rápido:
            <input
                type="radio"
                value="rapido"
                checked={selectedOption === 'rapido'}
                onChange={handleOptionChange}
            />
            </label>
            <label>
            Envío express:
            <input
                type="radio"
                value="express"
                checked={selectedOption === 'express'}
                onChange={handleOptionChange}
            />
            </label>
            <label>
            Pago en efectivo:
            <input
                type="radio"
                value="efectivo"
                checked={selectedOption === 'efectivo'}
                onChange={handleOptionChange}
            />
            </label>
            {showMeetingPoint && (
            <div>
                <label>
                Punto de encuentro:
                <input
                    type="text"
                    value={meetingPoint}
                    onChange={handleMeetingPointChange}
                />
                </label>
            </div>
            )}
            <button type="submit">Seleccionar</button>
        </form>
        </div>
    );
}

export default Send;