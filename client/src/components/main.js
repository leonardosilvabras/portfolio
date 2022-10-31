import styled from "styled-components";
import { PrimaryColor } from "../colors";
import GloboMain from "./globoMain";
import JapanImage from "../assets/images/japan.png";

const HomeColumn = () => {
  const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;

    padding: 1rem;
  `;

  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 50vh;
    padding-bottom: 3rem;
  `;

  const Science = styled.h3`
    font-family: "Aldrich";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: white;

    text-align: center;
    text-transform: uppercase;
  `;

  const Engineer = styled.h3`
    font-family: "Aldrich";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: white;

    text-align: center;
    text-transform: uppercase;
  `;
  return (
    <Column>
      <Container>
        <Science>
          <span style={{ color: PrimaryColor }}>Ciência da</span>
          <br />
          Computação
        </Science>
      </Container>
      <Container>
        <Engineer>
          Web Software <br />
          <span style={{ color: PrimaryColor }}>Engineer</span>
        </Engineer>
      </Container>
    </Column>
  );
};

const Japan = () => {
  const JapanContainer = styled.div`
    position: fixed;
    top: 10rem;
    right: 15rem;
  `;
  return (
    <JapanContainer>
      <img src={JapanImage} alt="Japan Text" />
    </JapanContainer>
  );
};

const Home = () => {
  return (
    <HomeContainer>
      <HomeColumn />
      <GloboMain />
      <Japan />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export default Home;
