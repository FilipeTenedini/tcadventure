import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100vw - 40px);
  max-width: 1200px;
  height: 800px;
  overflow: auto;
  margin: auto;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    &::-webkit-scrollbar-thumb {
      background:  #5a50eb;
    }

  div{
    width: 98%;
    display: flex;
    margin-top: 5px;
    margin-bottom: 25px;
    padding: 20px;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    cursor: pointer;

    span{
      display: flex;
      justify-content: center;
      flex: 1;
      color: #5a50eb;
      font-weight: bold;
      font-size: 14px;

      @media (max-width: 580px) {
        margin: 10px 0;
      }
    }

    @media (max-width: 580px) {
      flex-direction: column;
      margin: 10px 0;
    }
  }
`;

export const Title = styled.div`
  width: calc(100vw - 40px);
  max-width: 1200px;
  width: 98%;
  height: 30px;
  display: flex;
  margin: 20px auto;
  padding: 30px;
    h2{
      display: flex;
      justify-content: center;
      flex: 1;
      color: #5a50eb;
      font-weight: bold;
      font-size: 18px;
    }

  @media (max-width: 610px) {
    display: none;
  }
`;
