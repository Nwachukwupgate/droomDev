import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLoader from '../components/Loader/PageLoader';
import Layout from '../Layout/Layout';

import Withdraw from '../pages/Wallet/Withdraw';

const AllRoutes = () => {
  const Overview = lazy(() => import('../pages/Dashboard/Overview'));
  const AllOffers = lazy(() => import('../pages/Dashboard/AllOffers'));
  const MyOffers = lazy(() => import('../pages/Dashboard/MyOffers'));
  const Invite = lazy(() => import('../pages/Dashboard/Invite'));
  const Profile = lazy(() => import('../pages/Profile/Profile'));
  const EditProfile = lazy(() => import('../pages/Profile/EditProfile'));
  const Project = lazy(() => import('../pages/Project/Project'));
  const ActiveProject = lazy(() => import('../pages/Project/ActiveProject'));
  const Wallet = lazy(() => import('../pages/Wallet/Wallet'));
  const Withdraw = lazy(() => import('../pages/Wallet/Withdraw'));
  const MatchedJobs = lazy(() => import('../pages/Dashboard/MatchedJobs'));

  return (
    <Suspense fallback={<PageLoader />}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Overview />} />
            <Route path='/dashboard' element={<Overview />} />
            <Route path='/alloffer' element={<AllOffers />} />
            <Route path='/alloffer/:id' element={<MyOffers />} />
            <Route path='/jobs' element={<MatchedJobs />} />
            <Route path='/invites' element={<Invite />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/profile/edit' element={<EditProfile />} />
            <Route path='/project' element={<Project />} />
            <Route
              path='/project/active-projects'
              element={<ActiveProject />}
            />
            <Route path='/wallet' element={<Wallet />} />
            <Route path='/wallet/withdraw' element={<Withdraw />} />
            <Route path='/test' element={<Invite />} />
            <Route path='/jobs' element={<Invite />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
};

export default AllRoutes;
