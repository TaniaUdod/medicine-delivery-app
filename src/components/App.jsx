import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const Home = lazy(() => import('pages/Home/Home'));
// const Shop = lazy(() => import('pages/Shop/Shop'));
const ShoppingCart = lazy(() => import('./ShoppingCart/ShoppingCart'));
// const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
// const Cast = lazy(() => import('../Cast/Cast'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="shop" element={<Shop />} /> */}
        <Route path="cart" element={<ShoppingCart />} />
        {/* <Route path="cart/:medicineId" element={<MedicineDetails />}>
          <Route path="cast" element={<Cast />} />
        </Route> */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
