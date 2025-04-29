import { Link } from 'react-router-dom';
import useFetchTrip from './hooks/useFetchTrip';
import {
  BackButton,
  BuyButton,
  ButtonsWrapper,
  Content,
  Description,
  Duration,
  Image,
  InfoWrapper,
  Price,
  StyledTripDetails,
  System,
  Title,
} from './styled';

export default function TripDetails() {
  const { data: trip, loading, error } = useFetchTrip();

  if (loading) return <h2>Loading...</h2>;
  if (error) {
    return (
      <div>
        Trip is not found!
      </div>
    );
  }

  return (
    <StyledTripDetails>
      <Image src={trip.image} alt={`${trip.city}, ${trip.country}`} />
      <Content>
        <Title>
          {trip.city}
          ,
          {' '}
          {trip.country}
        </Title>
        <Description>{trip.fullDescription}</Description>
        <InfoWrapper>
          <Duration>
            🗓 Duration:
            {trip.durationDay}
            {' '}
            days
          </Duration>
          <System>
            ✈️ Travel:
            {trip.system}
          </System>
          <Price>
            {trip.price}
            $
          </Price>
        </InfoWrapper>
        <ButtonsWrapper>
          <Link to="/">
            <BackButton>← Back</BackButton>
          </Link>
          <BuyButton>Buy Now</BuyButton>
          <Link to={`/trip/update/${trip.id}`}>
            <BuyButton>Update Trip</BuyButton>
          </Link>
        </ButtonsWrapper>
      </Content>
    </StyledTripDetails>
  );
}
