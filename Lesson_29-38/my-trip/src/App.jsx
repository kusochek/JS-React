import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import NotFound from './pages/NotFound/NotFound';
import Landing from './pages/Landing/Landing';
import TripRoutes from './routes/TripRoutes';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<NotFound />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Landing searchValue="" />} />
        <Route path="/trip/*" element={<TripRoutes />} />
      </Route>
    </Routes>
  );
}

export default App;
