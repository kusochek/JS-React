import { createAsyncThunk } from '@reduxjs/toolkit';
import { name } from './constants';
import { trips } from '../../api/trips/trips';

export const fetchCountries = createAsyncThunk(`${name}/fetchCountries`, async () => {
  const data = await trips.get();

  return data;
});
