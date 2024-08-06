import React from 'react';

interface PlanProps {
  name: string;
  price: number;
  features: string[];
  onSelect: () => void;
  selected: boolean;
}

const Plan: React.FC<PlanProps> = ({ name, price, features, onSelect, selected }) => {
  return (
    <div className={`plan-card ${selected ? 'selected' : ''}`} onClick={onSelect}>
      <h3>{name}</h3>
      <p>${price} /Por mes</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default Plan;