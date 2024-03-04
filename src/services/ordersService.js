import axios from 'axios';

export const orderService = {
  async submitOrder(orderData) {
    const response = await axios.post('/order', orderData);
    return response.data;
  },
};
