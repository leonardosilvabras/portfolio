import styled from "styled-components";
import Globo from "../assets/images/globo.png";

const GloboMain = () => {
  return (
    <Container>
      <img src={Globo} alt="globo" />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 32.5%;
  left: 32.5%;

  width: 35%;
  height: 35%;

  img {
    width: 100%;

    border-radius: 50%;

    -webkit-box-shadow: 0px 0px 25px 0px rgba(3, 174, 238, 0.1);
    -moz-box-shadow: 0px 0px 25px 0px rgba(3, 174, 238, 0.1);
    box-shadow: 0px 0px 25px 0px rgba(3, 174, 238, 0.1);
  }

  @media (max-width: 950px) {
    img {
      width: 400px;
    }
  }

  @media (max-width: 500px) {
    img {
      width: 350px;
    }
  }
`;

export default GloboMain;
