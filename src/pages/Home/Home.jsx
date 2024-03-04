import { getAllPharmacies } from '../../services/pharmaciesService';
import { getAllMedicines } from '../../services/medicinesService';
import Loader from '../../components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import PharmacyList from '../../components/PharmacyList/PharmacyList';
import MedicineList from '../../components/MedicineList/MedicineList';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pharmacies, setPharmacies] = useState([]);
  const [medicines, setMedicines] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState('');

  const addToCart = medicineId => {
    const selectedMedicine = medicines.find(
      medicine => medicine._id === medicineId
    );

    if (selectedMedicine) {
      setCartItems([...cartItems, selectedMedicine]);
    } else {
      console.error(`Medicine with id ${medicineId} not found`);
    }
  };

  useEffect(() => {
    setIsLoading(true);

    getAllPharmacies()
      .then(allPharmacies => {
        setPharmacies(allPharmacies);
      })
      .catch(error => {
        setError(error.message);
      });

    getAllMedicines()
      .then(getAllMedicines => {
        setMedicines(getAllMedicines);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      <PharmacyList pharmacies={pharmacies} />
      <MedicineList medicines={medicines} addToCart={addToCart} />
      {error && (
        <p style={{ textAlign: 'center', margin: 'auto' }}>Sorry. {error} 😭</p>
      )}
    </div>
  );
};

export default Home;
