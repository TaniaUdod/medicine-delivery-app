import React from 'react';
import { Link } from 'react-router-dom';

const PharmacyList = ({ pharmacies }) => {
  return (
    <div>
      <h3>Shops</h3>
      <ul>
        {pharmacies.map(({ _id, name, phone }) => (
          <li key={_id}>
            <Link to={`/pharmacies`}>
              <p>{name}</p>
              <p>{phone}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PharmacyList;
