import styled from "styled-components";
import Column from './column'
import GloboMain from "./globoMain";
import JapanImage from "../assets/images/japan.png";
import Header from "./header";

const Japan = () => {
  const JapanContainer = styled.div`
    position: fixed;
    top: 20%;
    right: 16%;

    @media (max-width: 600px) {
      display: none;
    }
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
        <Column />
        <GloboMain />
        <Japan />
      </HomeContainer>
    </Page>
  );
};

export default Home;
