import styled from 'styled-components';

export const Headerr = styled.header`
  width: 100%;
  height: 90px;
  font-family: 'Pacifico', cursive;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 1;

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);


  div{
    display: flex;
    align-items: center;
    font-size: 36px;
    color: ${({ scrolled }) => (scrolled ? '#5a50eb' : '#FFF')};

    a {
      text-decoration: none;
      color: ${({ scrolled }) => (scrolled ? '#5a50eb' : '#FFF')};
    }
  }

  svg {
    font-size: 32px;
    margin: 0 20px;
    border-radius: 0 35px 30px 10px;
    cursor: pointer;
    color: ${({ scrolled }) => (scrolled ? '#5a50eb' : '#FFF')};
  }

  @media (max-width: 769px) {
      div {
        font-size: 22px;
      }

      svg {
        font-size: 28px;
      }
    }

    @media (max-width: 345px) {
      div {
        font-size: 18px;
      }
    }
`;
