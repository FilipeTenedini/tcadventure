import { GiModernCity } from 'react-icons/gi';
import { BiPhoneCall } from 'react-icons/bi';
import { BsCarFront } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import ContentContainer from './ContentContainer';
import { FooterArea, LogoInfo } from './style';

export default function Footer() {
  return (
    <FooterArea>
      <ContentContainer
        title="Milhares de destinos"
        text="São inúmeros destinos no Brasil e no mundo. É só escolher o seu e aproveitar!"
      >
        <GiModernCity />
      </ContentContainer>
      <ContentContainer
        title="Fale conosco"
        text="Possuimos atendimento e suporte 24 horas para fornecer uma experiência sem igual."
      >
        <BiPhoneCall />
      </ContentContainer>
      <ContentContainer
        title="Locadoras"
        text="Precisa de um carro na cidade desejada? Nos contate!"
      >
        <BsCarFront />
      </ContentContainer>
      <LogoInfo>
        <span>
          <a href="https://github.com/filipetenedini" rel="noreferrer" target="_blank">
            <AiFillGithub />
            Maked by Filipe Tenedini with
            <span>❤</span>
          </a>
        </span>
      </LogoInfo>
    </FooterArea>
  );
}
