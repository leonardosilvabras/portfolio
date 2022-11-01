import styled from "styled-components";
import Globo from "../assets/images/globo.png";

const GloboMain = () => {
  const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 35%;

      min-width: 25rem;
      min-height: 25rem;

      border-radius: 50%;

      -webkit-box-shadow: 0px 0px 25px 0px rgba(3, 174, 238, 0.1);
      -moz-box-shadow: 0px 0px 25px 0px rgba(3, 174, 238, 0.1);
      box-shadow: 0px 0px 25px 0px rgba(3, 174, 238, 0.1);
    }

    @media (max-width: 550px) {
      img {
        min-width: 20rem;
        min-height: 20rem;
      }
    }

    @media (max-width: 440px) {
      img {
        min-width: 17rem;
        min-height: 17rem;
      }
    }

    @media (max-width: 380px) {
      img {
        min-width: 15rem;
        min-height: 15rem;
      }
    }

    @media (max-width: 340px) {
      img {
        min-width: 13rem;
        min-height: 13rem;
      }
    }

    @media (max-width: 300px) {
      img {
        min-width: 11rem;
        min-height: 11rem;
      }
    }
  `;

  return (
    <Container>
      <img src={Globo} alt="globo" />
    </Container>
  );
};

export default GloboMain;
