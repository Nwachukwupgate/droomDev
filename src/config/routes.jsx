import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLoader from '../components/Loader/PageLoader';

const AllRoutes = () => {
  const Overview = lazy(() => import('../pages/Dashboard/Overview'));
  const AllOffers = lazy(() => import('../pages/Dashboard/AllOffers'));
  const MyOffers = lazy(() => import('../pages/Dashboard/MyOffers'));
  const Invite = lazy(() => import('../pages/Dashboard/Invite'));

  return (
    <Suspense fallback={<PageLoader />}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Overview />} />
          <Route path='/alloffer' element={<AllOffers />} />
          <Route path='/myoffer' element={<MyOffers />} />
          <Route path='/invites' element={<Invite />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AllRoutes;
