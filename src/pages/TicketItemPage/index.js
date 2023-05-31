import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import dayjs from 'dayjs';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { BannerArea } from '../TicketsPage/style';
import { Title } from '../TicketsPage/TicketBoard/style';
import HeaderPic from '../../assets/3736390.webp';
import { TicketInfoArea, Data } from './style';

export default function TicketItemPage() {
  const [ticket, setTicket] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const param = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/tickets/item/${param.id}`);
        setTicket(data);
        setIsLoading(false);
      } catch (err) {
        alert('Erro interno, por favor atualize a página.');
      }
    })();
  }, []);
  console.log(ticket);
  return (
    <>
      <Header />
      <BannerArea>
        <img src={HeaderPic} />
      </BannerArea>
      <TicketInfoArea>
        {isLoading && <h2> Carregando voos... </h2>}
        {!isLoading && !ticket && <h2>Este ticket não existe.</h2>}
        {!isLoading
          && ticket
          && (
            <>
              <Title>
                <h2>Cia. Aérea</h2>
                <h2>Cidade de Partida</h2>
                <h2>Cidade Destino</h2>
                <h2>Hora de Partida</h2>
                <h2>Hora de Chegada</h2>
              </Title>
              <Data>
                <span>{ticket.company}</span>
                <span>{ticket.departure_city}</span>
                <span>{ticket.arrival_city}</span>
                <span>{dayjs(ticket.departure_time).format('DD/MM/YYYY')}</span>
                <span>{dayjs(ticket.arrival_time).format('DD/MM/YYYY')}</span>
              </Data>
            </>
          )}
        <h3>Faça um bom vôo!</h3>
      </TicketInfoArea>
      <Footer />
    </>
  );
}
