import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './components/Layout/Layout';
import NotFound from './pages/NotFound/NotFound';
import Landing from './pages/Landing/Landing';
import TripRoutes from './routes/TripRoutes';
import store from './store';
import { GlobalSearchContextProvider } from './context/searchContext';

function App() {
  return (
    <Provider store={store}>
      <GlobalSearchContextProvider>
        <Routes>
          <Route path="/*" element={<NotFound />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Landing searchValue="" />} />
            <Route path="/trip/*" element={<TripRoutes />} />
          </Route>
        </Routes>
      </GlobalSearchContextProvider>
    </Provider>
  );
}

export default App;
