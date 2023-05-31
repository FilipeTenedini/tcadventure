import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import HotelsBanner from '../../assets/hotels.webp';
import Header from '../../components/Header';
import BannerArea from '../../components/BannerArea';
import HotelData from './HotelData';
import Footer from '../../components/Footer';
import { Container } from './style';

export default function HotelsPage() {
  const [hotels, setHotels] = useState();
  const param = useParams();
  const hotelRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/hotels/${param.id}`);
        setHotels(data);
      } catch (err) {
        alert('Erro interno, por favor atualize a página.');
      }
    })();
  }, []);

  function handleViewHotel(hotel) {
    hotelRef.current = hotel.id;
    navigate(`/hotels/item/${hotelRef.current}`);
  }

  return (
    <>
      <Header />
      <BannerArea>
        <img src={HotelsBanner} />
      </BannerArea>
      <Container>
        {hotels && hotels.map((hotel) => (
          <HotelData
            key={hotel.id}
            hotel={hotel}
            handleViewHotel={handleViewHotel}
          />
        ))}
      </Container>
      <Footer />
    </>
  );
}
