import React, { lazy, Suspense, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLoader from '../components/Loader/PageLoader';
import Layout from '../Layout/Layout';
import { ThemeContext } from '../context/ThemeContext';

const AllRoutes = () => {
  const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
  const Overview = lazy(() => import('../pages/Dashboard/Overview'));
  const AllOffers = lazy(() => import('../pages/Dashboard/AllOffers'));
  const MyOffers = lazy(() => import('../pages/Dashboard/MyOffers'));
  const Invite = lazy(() => import('../pages/Dashboard/Invite'));
  const Profile = lazy(() => import('../pages/Profile/Profile'));
  const EditProfile = lazy(() => import('../pages/Profile/EditProfile'));
  const Project = lazy(() => import('../pages/Project/Project'));
  const Wallet = lazy(() => import('../pages/Wallet/Wallet'));
  const Withdraw = lazy(() => import('../pages/Wallet/Withdraw'));
  const WithdrawalDetails = lazy(() =>
    import('../pages/Wallet/WithdrawalDetails')
  );
  const MatchedJobs = lazy(() => import('../pages/Dashboard/MatchedJobs'));
  const Test = lazy(() => import('../pages/Test/Test'));
  const TakeTest = lazy(() => import('../pages/Test/TakeTest'));

  const Support = lazy(() => import('../pages/Support/Support'));

  const { theme } = useContext(ThemeContext);

  return (
    <Suspense fallback={<PageLoader />}>
      <BrowserRouter>
        <div data-theme={theme === 'dark' ? 'dark' : 'light'}>
          {/* <div className='bg-bkg text-content' id='app-container' > */}
          <div
            className={theme === 'dark' ? 'dark' : 'light'}
            id='app-container'
            data-theme={theme === 'dark' ? 'dark' : 'light'}
          >
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
                <Route path='/project/:id' element={<MyOffers />} />
                <Route path='/wallet' element={<Wallet />} />
                <Route path='/wallet/withdraw' element={<Withdraw />} />
                <Route
                  path='/wallet/withdraw/details'
                  element={<WithdrawalDetails />}
                />
                <Route path='/support' element={<Support />} />
                <Route path='/jobs' element={<Invite />} />
                <Route path='*' element={<NotFound />} />
                <Route path='/test' element={<Test />} />
                <Route path='/test/retake' element={<TakeTest />} />
              </Routes>
            </Layout>
          </div>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default AllRoutes;
