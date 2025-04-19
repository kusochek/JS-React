import { trips } from './constants';
import {
  Button, Card, CardsGrid, Content, Description, Image, Price, Title,
} from './styled';

export default function Landing() {
  return (
    <CardsGrid>
      {trips.map((trip) => (
        <Card key={trip.id}>
          <Image src={trip.image} alt={`${trip.city}, ${trip.country}`} />
          <Content>
            <Title>
              {trip.city}
              ,
              {' '}
              {trip.country}
            </Title>
            <Description>{trip.description}</Description>
            <Price>{trip.price}</Price>
            <Button>Details</Button>
          </Content>
        </Card>
      ))}
    </CardsGrid>
  );
}
