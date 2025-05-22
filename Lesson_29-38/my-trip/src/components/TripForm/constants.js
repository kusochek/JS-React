import {
  array, date, number, object, string,
} from 'yup';

const TypeMap = {
  FLIGHT: 'Flight',
  HOTEL: 'Hotel',
  TRANSFER: 'Transfer',
  BREAKFAST: 'Breakfast',
  LUNCH: 'Lunch',
  DINNER: 'Dinner',
  AI: 'All Inclusive',
};

export const TypeOptions = Object.entries(TypeMap).map(([value, label]) => ({
  label,
  value,
}));

export const tripValidationSchema = object().shape({
  country: string()
    .required('Enter country.')
    .min(3, 'Country must have more than 3 symbols.')
    .max(30, 'Country must have less than 30 symbols.'),

  city: string()
    .required('Enter city.')
    .min(2, 'City must have more than 2 symbols.')
    .max(30, 'City must have less than 30 symbols.'),

  image: string()
    .required('Image URL is required.')
    .url('Enter a valid image URL.'),

  description: string()
    .required('Enter short description.')
    .min(10, 'Description must be at least 10 characters.')
    .max(100, 'Description must be at most 100 characters.'),

  fullDescription: string()
    .required('Enter full description.')
    .min(20, 'Full description must be at least 20 characters.')
    .max(1000, 'Full description must be at most 1000 characters.'),

  price: number()
    .typeError('Price must be a number.')
    .required('Enter price.')
    .min(10, 'Price must more then 10.'),

  durationDay: number()
    .typeError('Duration must be a number.')
    .required('Enter duration in days.')
    .min(1, 'Minimum duration is 1 day.')
    .max(21, 'Maximum duration is 21 days.'),

  departureDateTime: date()
    .typeError('Enter a valid end date.')
    .required('End trip date is required.'),

  arrivalDateTime: date()
    .typeError('Enter a valid start date.')
    .required('Start trip date is required.')
    .when('departureDateTime', (departureDateTime, schema) => (departureDateTime
      ? schema.max(departureDateTime, 'Start date must be before end date.')
      : schema)),

  system: array()
    .of(string().required())
    .min(1, 'Select at least one type.'),
});
