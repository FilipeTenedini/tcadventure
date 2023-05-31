import { Container, AmenitiesArea } from './style';

export default function HotelData({ hotel, handleViewHotel }) {
  return (
    <Container onClick={() => handleViewHotel(hotel)}>
      <img src={hotel.principal_image} />
      <h2>{hotel.name}</h2>
      <h2>
        R$
        {(hotel.price / 100).toFixed(2).toLocaleString('pt-BR').replace('.', ',')}
      </h2>
      <AmenitiesArea>
        {hotel.amenities.map((amenitie) => (
          <span key={amenitie}>
            {amenitie}
          </span>
        ))}
      </AmenitiesArea>
    </Container>
  );
}
