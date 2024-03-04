import { useCart } from '../hooks/useCart';
import React from 'react';

const MedicineList = ({ medicines }) => {
  const { addToCart } = useCart();

  const handleAddToCart = medicine => {
    addToCart(medicine);
  };

  return (
    <div>
      <ul>
        {medicines.map(medicine => (
          <li key={medicine._id}>
            <p>{medicine.title}</p>
            <p>{medicine.description}</p>
            <p>${medicine.price}</p>
            <button onClick={() => handleAddToCart(medicine)}>
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicineList;
