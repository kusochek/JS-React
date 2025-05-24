import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { trip } from '../api/trip/trip';

const useFetchTrip = () => {
  const params = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchTrip = useCallback(async () => {
    setLoading(true);

    try {
      const response = await trip.get(params.id);
      setData(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [params.id]);

  useEffect(() => {
    fetchTrip();
  }, [fetchTrip]);

  return { loading, error, data };
};

export default useFetchTrip;
