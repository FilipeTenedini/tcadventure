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
`;
