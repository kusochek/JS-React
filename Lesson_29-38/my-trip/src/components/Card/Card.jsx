import { useNavigate } from 'react-router-dom';
import {
  Button, Content, Description, Image, Price, StyledCard, Title,
} from './styled';

// export default function Card(props) {
// const { currentTrip: trip, count, counter } = props;

export default function Card({ trip }) {
  const navigate = useNavigate();

  const redirectToTripDetails = () => {
    navigate(`/trip/${trip.id}`);
  };

  return (
    <StyledCard>
      <Image src={trip.image} alt={`${trip.city}, ${trip.country}`} />
      <Content>
        <Title>
          {trip.city}
          ,
          {' '}
          {trip.country}
        </Title>
        <Description>{trip.description}</Description>
        <Price>
          {trip.price}
          $
        </Price>
        {/* <Link to="/trip"> */}
        <Button onClick={redirectToTripDetails}>Details</Button>
        {/* </Link> */}
      </Content>
    </StyledCard>
  );
}
