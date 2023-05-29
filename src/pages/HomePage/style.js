import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const BgImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Header = styled.header`
  width: 100%;
  height: 90px;
  display: flex;
  position: fixed;
  top: 0;
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Pacifico', cursive;
  font-size: 36px;

  img {
    width: 180px;
    height: 90px;
    margin: 0 20px;
    border-radius: 0 35px 30px 10px;
  }

  span {
    color: #FFF;
  }
`;
