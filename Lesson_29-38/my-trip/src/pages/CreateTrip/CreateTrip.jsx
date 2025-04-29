import {
  Box, TextField, Typography, Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useFormik } from 'formik';
import { InitialValues, TypeOptions } from './constants';

export default function CreateTrip() {
  const handleCreateTripSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: InitialValues,
    onSubmit: (values) => {
      handleCreateTripSubmit(values);
    },
  });

  return (
    <Grid display="flex" alignItems="center" flexDirection="column" width="100%" p={3}>
      <Typography variant="h3" mb={2}>Create Trip</Typography>
      <Typography variant="body2" mb={4}>Fill free to create a new trip!</Typography>
      <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>
        <Box display="flex" width="100%" gap={2}>
          <Grid size={6} display="flex" flexDirection="column" gap={2} width="100%">
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              variant="outlined"
              fullWidth
              value={formik.values.country}
              onChange={formik.handleChange}
            />
            <TextField
              required
              id="image"
              name="image"
              label="Image"
              variant="outlined"
              fullWidth
              value={formik.values.image}
              onChange={formik.handleChange}
            />
            <TextField
              required
              id="price"
              name="price"
              label="Price"
              variant="outlined"
              type="number"
              fullWidth
              value={formik.values.price}
              onChange={formik.handleChange}
            />
            <TextField
              required
              id="duration"
              name="duration"
              label="Duration"
              variant="outlined"
              type="number"
              fullWidth
              value={formik.values.duration}
              onChange={formik.handleChange}
            />
            <DateTimePicker id="startDateAndTime" name="startDateAndTime" label="Start trip date" />
            <Button variant="contained" color="primary" type="submit">Create New Trip</Button>
          </Grid>
          <Grid size={6} display="flex" flexDirection="column" gap={2} width="100%">
            <TextField
              required
              id="city"
              name="city"
              label="City"
              variant="outlined"
              fullWidth
              value={formik.values.city}
              onChange={formik.handleChange}
            />
            <TextField
              required
              id="description"
              name="description"
              label="Description"
              variant="outlined"
              fullWidth
              value={formik.values.description}
              onChange={formik.handleChange}
            />
            <TextField
              required
              id="fullDescription"
              name="fullDescription"
              label="Full Description"
              variant="outlined"
              fullWidth
              value={formik.values.fullDescription}
              onChange={formik.handleChange}
            />
            <FormControl fullWidth>
              <InputLabel id="type-label">Type</InputLabel>
              <Select
                labelId="type-label"
                id="type"
                name="type"
                multiple
                label="Type"
                value={formik.values.type}
                onChange={formik.handleChange}
              >
                {TypeOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <DateTimePicker id="endDateAndTime" name="endDateAndTime" label="End Trip Day" />
            <Button variant="outlined">Cancel</Button>
          </Grid>
        </Box>
      </form>
    </Grid>
  );
}
