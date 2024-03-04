import React from 'react';
import Cart from '../../components/Cart/Cart';
import CartForm from '../../components/CartForm/CartForm';
import { useCart } from '../../components/hooks/useCart';

const ShoppingCart = () => {
  const { cart } = useCart();

  return (
    <div>
      <CartForm />
      <Cart cartItems={cart.items} />
      <p>Total Price: ${cart.totalPrice}</p>
      <button>Submit</button>
    </div>
  );
};

export default ShoppingCart;
