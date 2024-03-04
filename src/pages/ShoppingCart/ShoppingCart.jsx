import React, { useState } from 'react';
import Cart from '../../components/Cart/Cart';
import CartForm from '../../components/CartForm/CartForm';
import { useCart } from '../../components/hooks/useCart';
import { orderService } from '../../services/ordersService';

const ShoppingCart = () => {
  const { cart } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const orderData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        items: cart.cartItems,
        totalPrice: cart.totalPrice,
      };
      const response = await orderService.submitOrder(orderData);
      console.log(response);
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  return (
    <div>
      <CartForm formData={formData} handleInputChange={handleInputChange} />
      <Cart cartItems={cart.items} />
      <p>Total Price: ${cart.totalPrice}</p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ShoppingCart;
