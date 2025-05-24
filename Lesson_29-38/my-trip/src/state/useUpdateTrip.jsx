import { useCallback, useState } from 'react';
import { trip } from '../api/trip/trip';

const useUpdateTrip = (id) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const updateTrip = useCallback(async (params, onFinish) => {
    setLoading(true);

    try {
      await trip.put(id, params);
      onFinish?.();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  return { loading, error, updateTrip };
};

export default useUpdateTrip;
