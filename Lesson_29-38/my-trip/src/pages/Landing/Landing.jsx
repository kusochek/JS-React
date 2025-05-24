import { useMemo } from 'react';
import Card from '../../components/Card/Card';
import { CardsGrid } from './styled';
import useFetchTrips from '../../state/useFetchTrips';

export default function Landing({ searchValue }) {
  const { loading, error, data: trips } = useFetchTrips();

  const filteredTrips = useMemo(() => trips.filter((trip) => {
    const { country, city } = trip;
    const value = searchValue.toLowerCase();

    return country.toLowerCase().includes(value) || city.toLowerCase().includes(value);
  }), [searchValue, trips]);

  if (loading) return <div>Loading...</div>;
  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <CardsGrid>
      {filteredTrips.map((trip) => (
        <Card key={trip.id} trip={trip} />
      ))}
    </CardsGrid>
  );
}
