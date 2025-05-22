import {
  Typography, Grid, Snackbar,
} from '@mui/material';
import { useState } from 'react';
import dayjs from 'dayjs';
import TripForm from '../../components/TripForm/TripForm';
import useFetchTrip from '../TripDetails/hooks/useFetchTrip';
import { InitialValues } from '../CreateTrip/constants';

export default function UpdateTrip() {
  const { data: trip, loading, error } = useFetchTrip();
  const [open, setOpen] = useState(false);

  const onFinish = () => {
    setOpen(true);
  };

  const initialValue = {
    ...trip,
    system: trip.system || [],
    departureDateTime: dayjs(trip.departureDateTime) || dayjs(),
    arrivalDateTime: dayjs(trip.arrivalDateTime) || dayjs(),
  };

  // eslint-disable-next-line no-unused-vars
  const handleUpdateTrip = () => {
    console.log('UPDATE');
    onFinish();
  };

  if (loading || !trip) return <h2>Loading...</h2>;
  if (error) {
    return (
      <div>
        Trip is not found!
      </div>
    );
  }

  return (
    <Grid display="flex" alignItems="center" flexDirection="column" width="100%" p={3}>
      <Typography variant="h3" mb={2}>Create Trip</Typography>
      <Typography variant="body2" mb={4}>Fill free to create a new trip!</Typography>
      <TripForm
        initialValues={initialValue || InitialValues}
        loading={loading}
        handleSubmit={handleUpdateTrip}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        message="Trip has been updated!"
      />
    </Grid>
  );
}
