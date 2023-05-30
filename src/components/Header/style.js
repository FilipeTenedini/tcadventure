import styled from 'styled-components';

export const Headerr = styled.header`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 1;
  font-family: 'Pacifico', cursive;

  div{
    display: flex;
    align-items: center;
    font-size: 36px;
    color: #FFF;
  }

  svg {
    font-size: 46px;
    margin: 0 20px;
    border-radius: 0 35px 30px 10px;
    cursor: pointer;
  }
  @media(max-width: 1124px) {

  }
`;
