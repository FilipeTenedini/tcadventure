import {
  Container, BgImage, Header, LogoArea,
} from './style';
import CompanySymbol from '../../assets/image.webp';
import BgImg from '../../assets/bg6.jpg';

export default function HomePage() {
  return (
    <Container>
      <Header>
        <LogoArea>
          <img src={CompanySymbol} />
          <span>AC Adventure</span>
        </LogoArea>
      </Header>
      <BgImage src={BgImg} />

    </Container>
  );
}
