import dayjs from 'dayjs';
import { Container, Title } from './style';

export default function TicketBoard({ list, handleSelectTicket }) {
  return (
    <>
      <Title>
        <h2>Cia. Aérea</h2>
        <h2>Cidade de Partida</h2>
        <h2>Cidade Destino</h2>
        <h2>Hora de Partida</h2>
        <h2>Hora de Chegada</h2>
      </Title>
      <Container>
        { list
          ? list.map((i) => (
            <div key={i.id} onClick={() => handleSelectTicket(i.id)}>
              <span>{i.company_name}</span>
              <span>{i.departure_city_name}</span>
              <span>{i.arrival_city_name}</span>
              <span>{dayjs(i.departure_time).format('DD/MM/YYYY - hh:mm')}</span>
              <span>{dayjs(i.arrival_time).format('DD/MM/YYYY - hh:mm')}</span>
            </div>
          ))
          : <h2> Carregando voos... </h2>}
      </Container>
    </>

  );
}
