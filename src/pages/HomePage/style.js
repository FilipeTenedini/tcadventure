import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Banner = styled.div`
  width: 100%;
  display: flex;
  background-color: #e91e63;
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
`;

export const FormArea = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  display: flex;

    select {
      width: 100%;
      height: 70px;
      border-radius: 5px;
      font-size: 26px;
      outline: none;
      color: #e91e63;
      padding-left: 10px;
    }

    button{
      color: #fff;
      border-radius: 0 5px 5px 0;
      border: none;
      width: 130px;
      background-color: #e91e63;
      font-size: 26px;
      cursor: pointer;
      outline: none;

      &:hover{
        opacity: 0.96;
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
    font-size: 60px;
    color: #FFF;
    font-weight: 500;
    line-height: 90px;
    text-align: center;
  }
`;
