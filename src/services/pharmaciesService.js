import axios from 'axios';

export const getAllPharmacies = async () => {
  const { data } = await axios.get('/pharmacies');
  return data.result;
};
