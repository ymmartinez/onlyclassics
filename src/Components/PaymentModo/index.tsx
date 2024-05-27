import React, { useEffect } from 'react';
import { Card } from 'primereact/card';
import { Fieldset } from 'primereact/fieldset';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import axios from 'axios';
import 'https://ecommerce-modal.modo.com.ar/bundle.js';

const PaymentModo = () => {
    // const ModoSDK = window.ModoSDK;
    // const ModoSDK = window.ModoSDK;
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = "https://ecommerce-modal.modo.com.ar/bundle.js";
    //     script.async = true;
    //     document.body.appendChild(script);

    //     // Cleanup function to remove the script when the component unmounts
    //     return () => {
    //         document.body.removeChild(script);
    //     };
    // }, []);

    const createPaymentIntention = async () => {
        const res = await fetch(
            'https://backend-de-la-tienda.com/api/modo-checkout',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({price: 77 })
            }
        );

        const jsonRes = await res.json();
        return {
            checkoutId: jsonRes.id,
            qrString: jsonRes.qr,
            deeplink: jsonRes.deeplink,
        };
    }

    const showModal = async () => {
        const modalData = await createPaymentIntention();
        var modalObject = {
            qrString: modalData.qrString,
            checkoutId: modalData.checkoutId,
            deeplink:  {
                url: modalData.deeplink,
                callbackURL: 'https://tiendadeprueba.com/checkout',
                callbackURLSuccess: 'https://tiendadeprueba/thankyou'
            },
            callbackURL: 'https://tiendadeprueba/thankyou',
            refreshData: createPaymentIntention,
            onSuccess: function () { console.log('onSuccess') },
            onFailure: function () { console.log('onFailure') },
            onCancel: function () { console.log('onCancel') },
            onClose: function () { console.log('onClose') },
        }

        // ModoSDK.modoInitPayment(modalObject);
    }
    return (
        <Button label="Pagar" icon="pi pi-check" className="p-button-success" onClick={showModal} />
    );
}

export default PaymentModo;