import styled from "styled-components";
import { PrimaryColor } from "../colors";
import Image from "../assets/images/vetor.png";
import Tecs from "../components/tecnologias";

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

    margin-top: 5rem;
  `;

  const Title = styled.h2`
    font-family: "Audiowide";
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    text-transform: uppercase;
    color: white;
  `;

  const Vetor = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 3rem 0 3rem 0;

    img {
      width: 40%;
      heigth: auto;

      min-width: 34rem;
    }

    @media (max-width: 850px) {
      margin: 3rem 0 5rem 0;
    }

    @media (max-width: 700px) {
      img {
        min-width: 29rem;
      }
    }

    @media (max-width: 600px) {
      img {
        min-width: 28rem;
      }
    }

    @media (max-width: 500px) {
      img {
        min-width: 27rem;
      }
    }

    @media (max-width: 480px) {
      img {
        min-width: 26rem;
      }
    }

    @media (max-width: 470px) {
      img {
        min-width: 23rem;
      }
    }

    @media (max-width: 420px) {
      img {
        min-width: 21rem;
      }
    }

    @media (max-width: 390px) {
      img {
        min-width: 19rem;
      }
    }
  `;

  const Gestao = styled.h3`
    top: 150vh;
    left: 1rem;
    position: absolute;

    font-family: "Aldrich";
    font-style: normal;
    font-weight: 400;
    font-size: 1.3rem;
    color: white;

    text-align: center;
    text-transform: uppercase;

    @media (max-width: 900px) {
      display: none;
    }

    @media (max-width: 400px) {
      font-size: 1.2rem;
    }
  `;

  return (
    <Content id="About">
      <TitleContainer>
        <Title>
          <span style={{ color: PrimaryColor }}>#</span>
          Tecnologias
        </Title>
      </TitleContainer>
      <Gestao>
        <span style={{ color: PrimaryColor }}>Gestão </span>
        da Tecnologia
        <br />
        da Informação
      </Gestao>
      <Vetor>
        <img src={Image} alt="Imagem vetorial" />
      </Vetor>
      <Tecs />
    </Content>
  );
};

export default About;
