import React, { useState } from 'react';

const Number= () => {
    const [showVendorCard, setShowVendorCard] = useState<boolean>(false);

    const handleDeliveryOptionChange = (option: string) => {
        if (option === 'punto_entrega') {
            setShowVendorCard(true);
        } else {
            setShowVendorCard(false);
        }
    };

    return (
        <div>
            <div>
                <label>
                    <input type="radio" name="deliveryOption" value="punto_entrega" onChange={() => handleDeliveryOptionChange('punto_entrega')} />
                    Punto de Entrega
                </label>
            </div>
            {showVendorCard && (
                <div className="card">
                    <h2>Número del Vendedor</h2>
                    <p>Por favor, coordina la entrega con el vendedor al siguiente número: +1234567890</p>
                </div>
            )}
        </div>
    );
};

export default Number;