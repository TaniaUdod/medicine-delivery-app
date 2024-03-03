import axios from 'axios';

export const getAll = async () => {
  const { data } = await axios.get('/medicines');
  return data.result;
};

export const getById = async foodId => {
  const { data } = await axios.get('/api/foods/' + foodId);
  return data;
};

export async function deleteById(foodId) {
  await axios.delete('/api/foods/' + foodId);
}
