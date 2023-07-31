import React, { lazy, Suspense, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLoader from '../components/Loader/PageLoader';
import Layout from '../Layout/Layout';
import { ThemeContext } from '../context/ThemeContext';

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
  const Test = lazy(() => import('../pages/Test/Test'));
  const Support = lazy(() => import('../pages/Support/Support'));

  const { theme } = useContext(ThemeContext);
  return (
    <Suspense fallback={<PageLoader />}>
      <BrowserRouter>
        <div className={theme === 'dark' ? 'dark' : 'light'} id='app-container'>
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
              <Route path='/support' element={<Support />} />
              <Route path='/test' element={<Test />} />
              <Route path='/jobs' element={<Invite />} />
            </Routes>
          </Layout>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default AllRoutes;
