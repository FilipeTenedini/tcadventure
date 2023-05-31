import styled from 'styled-components';

export const TicketInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100vw;
  max-width: 900px;
  height: 360px;

    button{
      color: #fff;
      border-radius: 5px;
      border: none;
      width: 130px;
      background-color: #e91e63;
      font-size: 22px;
      cursor: pointer;
      outline: none;
      margin-top: 75px;
      padding: 10px;
        &:hover{
          opacity: 0.96;
        }
    }

    h3{
      margin-top: 75px;
      font-size: 40px;
    }
`;

export const Data = styled.div`
    width: calc(100vw - 40px);
    max-width: 830px;
    display: flex;
    justify-content: center;

    span{
      display: flex;
      justify-content: center;
      flex: 1;
      font-size: 18px;
    }
`;
