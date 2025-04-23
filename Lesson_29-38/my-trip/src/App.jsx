import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import NotFound from './pages/NotFound/NotFound';
import TripDetails from './pages/TripDetails/TripDetails';
import Landing from './pages/Landing/Landing';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<NotFound />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Landing searchValue="" />} />
        <Route path="/trip/:id" element={<TripDetails />} />
        <Route path="/trip/create" element={<div>Create Trip</div>} />
      </Route>
    </Routes>
  );
}

export default App;
