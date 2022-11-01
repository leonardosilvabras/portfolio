import styled from "styled-components";
import { PrimaryColor } from "../colors";
import Image from '../assets/images/vetor.png'
import Tecs from '../assets/images/tecs.png'

const About = () => {
  const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  `;

  const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Title = styled.h2`
    margin-top: 3rem;

    font-family: "Audiowide";
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    text-transform: uppercase;
    color: white;
  `;

  const Vetor = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    margin: 3rem 0 3rem 0;

    img {
        width: 40%;
    }
  `;

  const Tecnologias = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Content id="About">
      <TitleContainer>
        <Title>
          <span style={{ color: PrimaryColor }}>#</span>
          Tecnologias
        </Title>
      </TitleContainer>
      <Vetor>
        <img src={Image} alt="Imagem vetorial"/>
      </Vetor>
      <Tecnologias>
        <img src={Tecs} alt="tecnologias" />
      </Tecnologias>
    </Content>
  );
};

export default About;
