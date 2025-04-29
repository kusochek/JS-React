import { Route, Routes } from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TripDetails from '../pages/TripDetails/TripDetails';
import CreateTrip from '../pages/CreateTrip/CreateTrip';
import UpdateTrip from '../pages/UpdateTrip/UpdateTrip';

export default function TripRoutes() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Routes>
        <Route path="/:id" element={<TripDetails />} />
        <Route path="/create" element={<CreateTrip />} />
        <Route path="/update/:id" element={<UpdateTrip />} />
      </Routes>
    </LocalizationProvider>
  );
}
