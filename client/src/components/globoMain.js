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
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 500px;
  }
`;

export default GloboMain;
