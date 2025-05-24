import { useCallback, useState } from 'react';
import { trip } from '../api/trip/trip';

const useCreateTrip = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createTrip = useCallback(async (params, onFinish) => {
    setLoading(true);

    try {
      await trip.post(params);
      onFinish?.();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, createTrip };
};

export default useCreateTrip;
