import { combineReducers, configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries/reducer';

const rootReducer = combineReducers({
  countriesReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
