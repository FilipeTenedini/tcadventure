import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: 150px;
  margin-top: 30px;
  margin: 30px auto;
  display: flex;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  cursor: pointer;

    img {
      width: 15%;
      height: 100%;
      border-radius: 5px;
      object-fit: cover;
    }
    h2 {
      font-size: 22px;
      margin: auto 10px;
      flex: 1;
    }

    @media (max-width: 769px) {
      width: 100%;
      height: auto;
      margin: 30px 0 0 0;
      flex-direction: column;
      align-items: center;
      max-width: 320px;

      img {
        width: 100%;
      }

      h2 {
        margin: 10px;
      }
    }
`;

export const AmenitiesArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px;
    span {
      font-size: 16px;
      flex: 1;
      text-align: left;
    }

    @media (max-width: 769px) {
      flex-direction: row;
      flex-wrap: wrap;

      span {
        margin: 10px;
      }
    }
`;
