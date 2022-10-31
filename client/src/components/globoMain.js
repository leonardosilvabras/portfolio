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

  -webkit-box-shadow: 0px 0px 25px 0px rgba(3,174,238,.1);
  -moz-box-shadow: 0px 0px 25px 0px rgba(3,174,238,.1);
  box-shadow: 0px 0px 25px 0px rgba(3,174,238,.1);

  border-radius: 50%;

  img {
    width: 500px;
  }
`;

export default GloboMain;
