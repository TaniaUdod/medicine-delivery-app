import axios from 'axios';

export const getAllMedicines = async () => {
  const { data } = await axios.get('/medicines');
  return data.result;
};
