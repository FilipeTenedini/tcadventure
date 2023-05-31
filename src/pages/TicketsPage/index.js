import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { BannerArea } from './style';
import HeaderPic from '../../assets/3736390.webp';
import Header from '../../components/Header';
import TicketBoard from './TicketBoard';
import Footer from '../../components/Footer';

export default function TicketsPage() {
  const [ticketList, setTicketList] = useState(null);
  const navigate = useNavigate();
  const ticketRef = useRef();
  const param = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/tickets/${param.id}`);
        setTicketList(data);
      } catch (err) {
        alert('Erro interno, por gentileza atualize a página.');
      }
    })();
  }, []);

  function handleSelectTicket(id) {
    ticketRef.current = id;
    console.log(ticketRef.current);
    navigate(`/tickets/item/${ticketRef.current}`);
  }

  return (
    <>
      <Header />
      <BannerArea>
        <img src={HeaderPic} />
      </BannerArea>
      <TicketBoard list={ticketList} handleSelectTicket={handleSelectTicket} />
      <Footer />
    </>
  );
}
