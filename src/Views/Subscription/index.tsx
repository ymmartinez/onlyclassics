import React, { useState } from 'react';
import Plan from '../../Components/Plan';
import './index.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

interface Plan {
    name: string;
    price: number;
    features: string[];
    }

    const plans: Plan[] = [
    {
        name: 'Básico',
        price: 10,
        features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
        name: 'Estándar',
        price: 20,
        features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
        name: 'Premium',
        price: 30,
        features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    },
    ];

    const Subscription: React.FC = () => {
    const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
    const [showPayment, setShowPayment] = useState<boolean>(false);
    const [name, setName] = useState('');
    const [card, setCard] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');

    const handlePlanSelect = (plan: Plan) => {
        setSelectedPlan(plan);
        setShowPayment(false); // Resetea la sección de pago cuando se selecciona un nuevo plan
    };

    const handleSubmit = () => {
        if (selectedPlan) {
        setShowPayment(true); // Muestra la sección de pago
        }
    };

    const handlePayment = () => {
        if (selectedPlan) {
        alert(`Pago realizado para el plan ${selectedPlan.name}`);
        // Aquí puedes agregar la lógica para procesar el pago
        }
    };
    

    return (
        <div className="subscription-form">
        <h2>Selecciona el Plan de Subscripción</h2>
        <div className="plan-list">
            {plans.map((plan) => (
            <Plan
                key={plan.name}
                name={plan.name}
                price={plan.price}
                features={plan.features}
                onSelect={() => handlePlanSelect(plan)}
                selected={selectedPlan?.name === plan.name}
            />
            ))}
        </div>
        {selectedPlan && !showPayment && (
            <div className="selected-plan">
            <h3>Seleccionaste el Plan {selectedPlan.name}.</h3>
            <button onClick={handleSubmit}>Suscribirme</button>
            </div>
        )}
        {showPayment && selectedPlan && (
            <div >
            <h3>Detalles de Pago para el Plan {selectedPlan.name}</h3>
            <div >
                <div className="p-float-label">
                    <InputText id="name" value={name} onChange={(e) => setName(e.target.value)}  />
                    <label htmlFor="name">Nombre Completo</label>
                </div>
                <div className="p-float-label">
                    <InputText id="card" value={card} onChange={(e) => setCard(e.target.value)}  />
                    <label htmlFor="card">Número de Tarjeta</label>
                </div>
                <div className="p-float-label">
                    <InputText id="expiry" value={expiry} onChange={(e) => setExpiry(e.target.value)}  />
                    <label htmlFor="expiry">Fecha de Expiración</label>
                </div>
                <div className="p-float-label">
                    <InputText id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)}  />
                    <label htmlFor="cvv">CVV</label>
                </div>
            </div>
            <div className="payment-actions">
                <Button label="Pagar" onClick={handlePayment} />
            </div>
        </div>
        )}
        </div>
    );
};

export default Subscription;