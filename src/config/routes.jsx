import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLoader from '../components/Loader/PageLoader';

const AllRoutes = () => {
  const Overview = lazy(() => import('../pages/Dashboard/Overview'));

  return (
    <Suspense fallback={<PageLoader />}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Overview />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AllRoutes;
