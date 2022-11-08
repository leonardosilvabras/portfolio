import styled from "styled-components";
import Column from '../components/column'
import GloboMain from "../components/globoMain";
import JapanImage from "../assets/images/japan.png";
import Header from "../components/header";

const Japan = () => {
  const JapanContainer = styled.div`
    position: absolute;
    top: 20%;
    right: 16%;

    img { height: 70rem; }

    @media (max-width: 850px) {
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
    max-width: 100vw;
    height: 100vh;
  `;

  const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  `;

  return (
    <Page id="home">
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
