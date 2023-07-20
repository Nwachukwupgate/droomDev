import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLoader from '../components/Loader/PageLoader';
import Layout from '../Layout/Layout';

const AllRoutes = () => {
  const Overview = lazy(() => import('../pages/Dashboard/Overview'));
  const AllOffers = lazy(() => import('../pages/Dashboard/AllOffers'));
  const MyOffers = lazy(() => import('../pages/Dashboard/MyOffers'));
  const Invite = lazy(() => import('../pages/Dashboard/Invite'));
  const Profile = lazy(() => import('../pages/Profile/Profile'));
  const EditProfile = lazy(() => import('../pages/Profile/EditProfile'));

  return (
    <Suspense fallback={<PageLoader />}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Overview />} />
            <Route path='/dashboard' element={<Overview />} />
            <Route path='/alloffer' element={<AllOffers />} />
            <Route path='/myoffer' element={<MyOffers />} />
            <Route path='/invites' element={<Invite />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/profile/edit' element={<EditProfile />} />
            <Route path='/project' element={<Invite />} />
            <Route path='/wallet' element={<Invite />} />
            <Route path='/test' element={<Invite />} />
            <Route path='/jobs' element={<Invite />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
};

export default AllRoutes;
