import { useCallback, useEffect, useState } from 'react';
import { trips } from '../api/trips/trips';

const useFetchTrips = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchTrips = useCallback(async () => {
    setLoading(true);

    try {
      const response = await trips.get();
      setData(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTrips();
  }, [fetchTrips]);

  return { loading, error, data };
};

export default useFetchTrips;
