import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Dashboard = lazy(() => import('../features/dashboard/Dashboard'));

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Dashboard />} />
  </Routes>
);

export default AppRoutes;