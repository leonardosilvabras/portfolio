import styled from "styled-components";
import { PrimaryColor } from "../colors";
import Image from '../assets/images/vetor.png'

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
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;

    img {
        width: 40%;
    }
  `;

  return (
    <Content>
      <TitleContainer>
        <Title>
          <span style={{ color: PrimaryColor }}>#</span>
          Tecnologias
        </Title>
      </TitleContainer>
      <Vetor>
        <img src={Image} />
      </Vetor>
    </Content>
  );
};

export default About;
