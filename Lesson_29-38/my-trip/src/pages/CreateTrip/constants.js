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

export const InitialValues = {
  country: '',
  image: '',
  price: undefined,
  duration: undefined,
  city: '',
  description: '',
  fullDescription: '',
  type: [],
};
