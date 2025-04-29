import { Link } from 'react-router-dom';
import {
  Button, Content, Description, Image, Price, StyledCard, Title,
} from './styled';

export default function Card({ trip }) {
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
        <Link to={`/trip/${trip.id}`}>
          <Button>Details</Button>
        </Link>
      </Content>
    </StyledCard>
  );
}
