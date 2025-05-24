import {
  Typography, Grid, Snackbar,
} from '@mui/material';
import { useState } from 'react';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';
import TripForm from '../../components/TripForm/TripForm';
import { InitialValues } from '../CreateTrip/constants';
import useUpdateTrip from '../../state/useUpdateTrip';
import useFetchTrip from '../../state/useFetchTrip';

export default function UpdateTrip() {
  const params = useParams();
  const { data: trip, loading: tripLoading, error } = useFetchTrip();
  const { loading, updateTrip } = useUpdateTrip(params.id);
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

  const handleUpdateTrip = (values) => {
    updateTrip(values, onFinish);
  };

  if (tripLoading || !trip) return <h2>Loading...</h2>;
  if (error) {
    return (
      <div>
        Trip is not found!
      </div>
    );
  }

  return (
    <Grid display="flex" alignItems="center" flexDirection="column" width="100%" p={3}>
      <Typography variant="h3" mb={2}>Update Trip</Typography>
      <Typography variant="body2" mb={4}>Fill free to update the trip!</Typography>
      <TripForm
        initialValues={initialValue || InitialValues}
        loading={loading}
        buttonText="Update Trip"
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
