import {
  Box, TextField, Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import {
  Field, Form, Formik,
} from 'formik';
import { tripValidationSchema, TypeOptions } from './constants';

export default function TripForm({ initialValues, loading, handleSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={tripValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form style={{ width: '100%' }}>
          <Box display="flex" width="100%" gap={2}>
            <Grid size={6} display="flex" flexDirection="column" gap={2} width="100%">
              <Field name="country">
                {({ field, meta }) => (
                  <TextField
                    {...field}
                    label="Country"
                    variant="outlined"
                    fullWidth
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>
              <Field name="image">
                {({ field, meta }) => (
                  <TextField
                    {...field}
                    label="Image"
                    variant="outlined"
                    fullWidth
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>
              <Field name="price">
                {({ field, meta }) => (
                  <TextField
                    {...field}
                    label="Price"
                    variant="outlined"
                    fullWidth
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>
              <Field name="durationDay">
                {({ field, meta }) => (
                  <TextField
                    {...field}
                    label="Duration"
                    variant="outlined"
                    fullWidth
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>
              <Field name="arrivalDateTime">
                {({ field }) => (
                  <DateTimePicker
                    onChange={(value) => setFieldValue('arrivalDateTime', value?.toDate?.() || new Date(value))}
                    label="Start trip date"
                    value={field.value}
                  />
                )}
              </Field>

              <Button variant="contained" color="primary" type="submit" loading={loading}>Create New Trip</Button>
            </Grid>
            <Grid size={6} display="flex" flexDirection="column" gap={2} width="100%">
              <Field name="city">
                {({ field, meta }) => (
                  <TextField
                    {...field}
                    label="City"
                    variant="outlined"
                    fullWidth
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>
              <Field name="description">
                {({ field, meta }) => (
                  <TextField
                    {...field}
                    label="Description"
                    variant="outlined"
                    fullWidth
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>
              <Field name="fullDescription">
                {({ field, meta }) => (
                  <TextField
                    {...field}
                    label="Full Description"
                    variant="outlined"
                    fullWidth
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>
              <FormControl fullWidth>
                <InputLabel id="type-label">Type</InputLabel>
                <Field name="system">
                  {({ field, meta }) => (
                    <Select
                      {...field}
                      labelId="type-label"
                      multiple
                      label="Type"
                      error={meta.touched && meta.error}
                      helperText={meta.touched && meta.error}
                    >
                      {TypeOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                </Field>
              </FormControl>
              <Field name="departureDateTime">
                {({ field }) => (
                  <DateTimePicker
                    value={field.value}
                    onChange={(value) => setFieldValue('departureDateTime', value?.toDate?.() || new Date(value))}
                    label="End trip date"
                  />
                )}
              </Field>
              <Button variant="outlined">Cancel</Button>
            </Grid>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
