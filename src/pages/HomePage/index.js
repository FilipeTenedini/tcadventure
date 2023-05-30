import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import {
  Container, Banner, ActivityArea, FormArea, SloganArea,
} from './style';
import BgImg from '../../assets/homebg.jpg';
import Header from '../../components/Header';

export default function HomePage() {
  const [destines, setDestines] = useState();
  const destineRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/cities`);
        setDestines(data);
      } catch (err) {
        alert('Erro interno, por gentileza atualize a página.');
      }
    })();
  }, []);

  function handleViewTickets(item) {
    destineRef.current = destines.find((destine) => destine.name === item);
  }

  function handleViewDestine(e) {
    e.preventDefault();
    navigate('/tickets', { state: destineRef.current });
  }

  return (
    <Container>
      <Header />
      <Banner>
        <ActivityArea img={BgImg}>
          <img src={BgImg} />
          <FormArea>
            <select onClick={(item) => handleViewTickets(item.target.value)}>
              <option> Selecione seu destino...</option>
              { destines && destines.map((item) => (
                <option key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <button type="submit" onClick={handleViewDestine}>Buscar</button>
          </FormArea>
        </ActivityArea>
        <SloganArea>
          <span>
            Viaje com alegria e faça memórias incríveis pelo mundo!
          </span>
        </SloganArea>
      </Banner>
    </Container>
  );
}
