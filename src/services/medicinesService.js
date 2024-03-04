import axios from 'axios';

export const getAllMedicines = async () => {
  const { data } = await axios.get('/medicines');
  return data.result;
};

// export const getById = async medicineId => {
//   const { data } = await axios.get('/medicines' + medicineId);
//   return data;
// };

// export async function deleteById(medicineId) {
//   await axios.delete('/medicines' + medicineId);
// }
