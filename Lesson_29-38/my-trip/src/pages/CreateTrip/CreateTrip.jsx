import {
  Typography, Grid, Snackbar,
} from '@mui/material';
import { useState } from 'react';
import { InitialValues } from './constants';
import TripForm from '../../components/TripForm/TripForm';
import useCreateTrip from '../../state/useCreateTrip';

export default function CreateTrip() {
  const { loading, createTrip } = useCreateTrip();
  const [open, setOpen] = useState(false);

  const onFinish = () => {
    setOpen(true);
  };

  const handleCreateTripSubmit = async (values) => {
    const newTrip = {
      createdAt: new Date(),
      ...values,
    };

    await createTrip(newTrip, onFinish);
  };

  return (
    <Grid display="flex" alignItems="center" flexDirection="column" width="100%" p={3}>
      <Typography variant="h3" mb={2}>Create Trip</Typography>
      <Typography variant="body2" mb={4}>Fill free to create a new trip!</Typography>
      <TripForm
        initialValues={InitialValues}
        loading={loading}
        buttonText="Create New Trip"
        handleSubmit={handleCreateTripSubmit}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        message="Trip has been created!"
      />
    </Grid>
  );
}
