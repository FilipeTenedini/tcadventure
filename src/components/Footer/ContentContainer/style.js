import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  margin: 20px;

  svg{
    font-size: 60px;
    margin-right: 20px;
  }

  @media (max-width: 769px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 200px;

    svg {
      margin-right: 0;
      margin-bottom: 5px;
      height: 40px;
    }
  }
`;

export const TextArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  h2{
    font-weight: bold;
    font-size: 16px;
  }
  span{
    font-size: 12px;
  }

  @media (max-width: 769px) {
    h2{
      margin-bottom: 5px;
    }
    span {
      margin-bottom: 5px;
    }
  }
`;
