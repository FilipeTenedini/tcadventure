import styled from 'styled-components';

export const FooterArea = styled.footer`
  width: 100%;
  height: 320px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const LogoInfo = styled.div`
  position: absolute;
  right: 0;
  bottom: 5px;

  a{
    text-decoration: none;
    display: flex;
    align-items:center;
    font-size: 16px;
    padding: 20px;
    right: 0;
    cursor: pointer;
    color: #000;

    span{
      margin: 5px;
      color: #5a50eb;
      text-decoration: none;
    }
  }
  svg{
    font-size: 32px;
  }
`;
