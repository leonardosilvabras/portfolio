import styled from "styled-components";
import GitImage from "../assets/images/github.png";
import TextSpan from "../components/textSpan";

const Header = () => {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem 5rem 0 5rem;
    height: 15vh;
  `;

  const Git = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 50%;

    img {
      width: 50px;
      height: 50px;

      z-index: 2;
      &:hover {
        cursor: pointer;
      }
    }
  `;

  const TitleContainer = styled.div`
        display: flex;
        justify-content: flex-end;
        width: 50%;
  `;
  
  return (
    <Container>
      <Git>
        <img src={GitImage} alt="GitImage"/>
      </Git>
      <TitleContainer>
        {TextSpan("//", "Leonardo", "Silva")}
      </TitleContainer>
    </Container>
  );
};

export default Header;
