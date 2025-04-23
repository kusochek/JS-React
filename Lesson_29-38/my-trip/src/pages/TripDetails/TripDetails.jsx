import { useParams } from 'react-router-dom';

export default function TripDetails() {
  const params = useParams();
  console.log(params.id);

  return (
    <h2>TRIP DETAILS</h2>
  );
}
