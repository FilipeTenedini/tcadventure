import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Banner = styled.div`
  width: 100%;
  display: flex;
  background-color: #5a50eb;

  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

export const ActivityArea = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (max-width: 769px) {
      width: 100%;
    }
`;

export const FormArea = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  display: flex;

    select {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      font-size: 22px;
      outline: none;
      color: #5a50eb;
      padding-left: 10px;
    }

    button{
      color: #fff;
      border-radius: 0 5px 5px 0;
      border: none;
      width: 130px;
      background-color: #5a50eb;
      font-size: 22px;
      cursor: pointer;
      outline: none;

      &:hover{
        opacity: 0.96;
      }
    }


    @media (max-width: 769px) {
      width: 90%;

      select {
        font-size: 16px;
      }

      button {
        font-size: 16px;
      }
    }
`;

export const SloganArea = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    max-width: 90%;
    font-size: 48px;
    color: #FFF;
    font-weight: 500;
    line-height: 70px;
    text-align: center;
  }

  @media (max-width: 769px) {
      width: 100%;

      span {
        font-size: 26px;
        line-height: 40px;
      }
    }
`;
