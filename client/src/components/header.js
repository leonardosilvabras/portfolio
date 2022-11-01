import styled from "styled-components";
import GitImage from "../assets/images/github.png";
import TextSpan from "../components/textSpan";

const Header = () => {
  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 3rem 6rem 3rem 6rem;
  `;

  const Git = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 50px;
      height: 50px;

      z-index: 2;
      &:hover {
        cursor: pointer;
      }
    }

    @media (max-width: 600px) {
      img {
        width: 40px;
        height: 40px;
      }
    }
  `;

  const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
      h2 {
        font-size: 24px;
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
