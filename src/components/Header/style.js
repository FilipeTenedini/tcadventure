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

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);


  div{
    display: flex;
    align-items: center;
    font-size: 36px;
    color: color: ${({ scrolled }) => (scrolled ? '#e91e63' : '#FFF')};

    a {
      text-decoration: none;
      color: ${({ scrolled }) => (scrolled ? '#e91e63' : '#FFF')};
    }
  }

  svg {
    font-size: 32px;
    margin: 0 20px;
    border-radius: 0 35px 30px 10px;
    cursor: pointer;
    color: ${({ scrolled }) => (scrolled ? '#e91e63' : '#FFF')};
  }
`;
