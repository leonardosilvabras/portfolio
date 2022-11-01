import styled from "styled-components";
import Globo from "../assets/images/globo.png";

const GloboMain = () => {
  const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 35%;

      min-width: 17rem;
      min-height: 17rem;

      border-radius: 50%;

      -webkit-box-shadow: 0px 0px 25px 0px rgba(3, 174, 238, 0.1);
      -moz-box-shadow: 0px 0px 25px 0px rgba(3, 174, 238, 0.1);
      box-shadow: 0px 0px 25px 0px rgba(3, 174, 238, 0.1);
    }
  `;

  return (
    <Container>
      <img src={Globo} alt="globo" />
    </Container>
  );
};

export default GloboMain;
