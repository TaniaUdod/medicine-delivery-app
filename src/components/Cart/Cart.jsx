import { useCart } from '../hooks/useCart';
import React from 'react';

const Cart = ({ handleQuantityChange }) => {
  const { cart, changeQuantity } = useCart();

  const handleInputChange = (event, itemId) => {
    const newQuantity = parseInt(event.target.value);
    changeQuantity(itemId, newQuantity);
  };

  return (
    <div>
      <ul>
        {cart.cartItems.map((item, index) => (
          <li key={index}>
            <p>{item.medicine.title}</p>
            <p>Price ${item.price}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={event => handleInputChange(event, item.medicine._id)}
              min="1"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
