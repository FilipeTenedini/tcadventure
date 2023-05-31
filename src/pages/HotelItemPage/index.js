import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BannerArea from '../../components/BannerArea';
import BgImg from '../../assets/homebg.jpg';
import { LoadingArea, PicturesArea, MessageArea } from './style';

export default function HotelItemPage() {
  const [hotel, setHotel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/hotels/item/${param.id}`);
        setHotel(data);
        setIsLoading(false);
      } catch (err) {
        alert('Erro interno, por favor atualize a página.');
      }
    })();
  }, []);
  return (
    <>
      {isLoading && <LoadingArea><h2> Carregando hotel... </h2></LoadingArea>}
      {!isLoading && !hotel && <h2>Este hotel não existe.</h2>}
      {!isLoading
          && hotel
          && (
            <>
              <Header />
              <BannerArea>
                <img src={hotel ? hotel.principal_image : BgImg} />
              </BannerArea>
              <PicturesArea>
                {hotel.photos.map((h) => (
                  <div>
                    <img src={h.url} />
                  </div>
                ))}
                ...
              </PicturesArea>
              <MessageArea>
                <h3>Aproveite as férias!</h3>
                <button type="button" onClick={() => navigate('/')}> Home </button>
              </MessageArea>
            </>
          )}
      <Footer />
    </>
  );
}
