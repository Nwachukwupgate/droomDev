import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLoader from '../components/Loader/PageLoader';

const AllRoutes = () => {
  const Overview = lazy(() => import('../pages/Dashboard/Overview'));
  const AllOffers = lazy(() => import('../pages/Dashboard/AllOffers'));
  const JobDescription = lazy(() =>
    import('../pages/Dashboard/JobDescription')
  );

  return (
    <Suspense fallback={<PageLoader />}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Overview />} />
          <Route path='/alloffer' element={<AllOffers />} />
          <Route path='/job-description' element={<JobDescription />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AllRoutes;
