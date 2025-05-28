import { render, screen } from '@testing-library/react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import TripForm from './TripForm';

const initialValues = {
  country: '',
  image: '',
  price: undefined,
  durationDay: undefined,
  arrivalDateTime: dayjs(),
  city: '',
  description: '',
  fullDescription: '',
  system: [],
  departureDateTime: dayjs(),
};

describe('TripForm', () => {
  it('render all inputs and buttons correctly', () => {
    render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TripForm
          initialValues={initialValues}
          loading={false}
          handleSubmit={jest.fn()}
          buttonText="Submit"
        />
      </LocalizationProvider>,
    );

    expect(screen.getByLabelText('Country')).toBeInTheDocument();
    expect(screen.getByLabelText('Image')).toBeInTheDocument();
    expect(screen.getByLabelText('Price')).toBeInTheDocument();
    expect(screen.getByLabelText('Duration')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('country input should be prefilled', () => {
    render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TripForm
          initialValues={{ ...initialValues, country: 'Japan' }}
          loading={false}
          handleSubmit={jest.fn()}
          buttonText="Submit"
        />
      </LocalizationProvider>,
    );

    expect(screen.getByLabelText('Country')).toHaveValue('Japan');
    expect(screen.getByLabelText('Country')).not.toHaveValue('Podospd');
  });
});
