import { useEffect, useState } from 'react';
import { trips as apiTrips } from '../../api/trips/trips';
import Card from '../../components/Card/Card';
import { CardsGrid } from './styled';

export default function Landing() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [trips, setTrips] = useState([]);

  const fetchTrips = async () => {
    setLoading(true);

    try {
      const data = await apiTrips.get();
      setTrips(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

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
      {trips.map((trip) => (
        <Card key={trip.id} trip={trip} />
      ))}
    </CardsGrid>
  );
}
