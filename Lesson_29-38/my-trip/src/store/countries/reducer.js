/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { name } from './constants';
import { fetchCountries } from './thunks';
import { filterAction } from './actions';

const initialState = {
  countries: [],
  loading: false,
  error: null,
  searchValue: '',
};

export const countriesSlice = createSlice({
  name,
  initialState,
  reducers: {
    // filter: (state, { payload }) => {
    //   state.searchValue = payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(filterAction, (state, { payload }) => {
      state.searchValue = payload;
    });
    builder.addCase(fetchCountries.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCountries.fulfilled, (state, { payload }) => {
      state.countries = payload;
      state.loading = false;
    });
    builder.addCase(fetchCountries.rejected, (state, { payload }) => {
      state.error = payload.message;
      state.loading = false;
    });
  },
});

// export const { filter } = countriesSlice.actions;
export default countriesSlice.reducer;
