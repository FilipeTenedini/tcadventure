import styled from 'styled-components';

export const LoadingArea = styled.div`
  height: 315px;
  display: flex;
  justify-content: center;
  align-items: center;

    h2 {
      position: absolute;
    }
`;

export const PicturesArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

    div {
      margin-top: 50px;
      width: 300px;
      height: 300px;
      flex: 1;
      margin: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 100%;
      height: 100%;
    }

  @media (max-width: 769px) {
    flex-direction: column;

      div {
        width: 100%;
      }

  }
`;

export const MessageArea = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

    button {
      color: #fff;
      border-radius: 5px;
      border: none;
      width: 130px;
      background-color: #5a50eb;
      font-size: 22px;
      cursor: pointer;
      outline: none;
      margin-top: 75px;
      padding: 10px;
        &:hover{
          opacity: 0.96;
        }
    }

    h3 {
      margin-top: 75px;
      font-size: 40px;
    }

    @media (max-width: 769px) {
    flex-direction: column;

      h3 {
        text-align: center;
      }

  }
`;
