import styled from "styled-components";
import GitImage from "../assets/images/github.png";
import TextSpan from "../components/textSpan";

const Header = () => {
  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 5rem;
    padding: 3rem 6rem 3rem 6rem;

    @media (max-width: 500px) {
      justify-content: center;
    }

  `;

  const Git = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 3.1rem;
      height: 3.1rem;

      z-index: 2;
      &:hover {
        cursor: pointer;
      }
    }

    @media (max-width: 600px) {
      img {
        width: 2.7rem;
        height: 2.7rem;
      }
    }

    @media (max-width: 500px) {
      margin-right: 2rem;
    }

    @media (max-width: 350px) {
      img {
        width: 2rem;
        height: 2rem;
      }
    }
  `;

  const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
      h2 {
        font-size: 1.5rem;
      }
    }

    @media (max-width: 500px) {
      margin-left: 2rem;
    }

    @media (max-width: 350px) {
      h2 {
        font-size: 1rem;
      }
    }
  `;

  return (
    <Container>
      <Git>
        <img src={GitImage} alt="GitImage" />
      </Git>
      <TitleContainer>{TextSpan("//", "Leonardo", "Silva")}</TitleContainer>
    </Container>
  );
};

export default Header;
