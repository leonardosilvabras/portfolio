import styled from "styled-components";
import { PrimaryColor } from "../colors";
import GloboMain from "./globoMain";
import JapanImage from "../assets/images/japan.png";
import Header from "./header";

const HomeColumn = () => {
  const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;

    padding-left: 3rem;
  `;

  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 50vh;
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

    padding-bottom: 3rem;
  `;

  return (
    <Column>
      <Container>
        <Science>
          <span style={{ color: PrimaryColor }}>Ciência</span>
          da <br />
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
  const Page = styled.div`
    min-width: 100vw;
    min-height: 100vh;
  `;

  const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  `;

  return (
    <Page>
      <Header/>
      <HomeContainer>        
        <HomeColumn />
        <GloboMain />
        <Japan />
      </HomeContainer>
    </Page>
  );
};

export default Home;
