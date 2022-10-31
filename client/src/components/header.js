import styled from "styled-components";
import { PrimaryColor } from "../colors";
import GitImage from "../assets/images/github.png";

const Header = () => {
  return (
    <Container>
      <Git>
        <img src={GitImage} alt="GitImage"/>
      </Git>
      <TitleContainer>
        <Title>
          <span style={{ color: PrimaryColor }}>//</span>
          Leonardo
          <span style={{ color: PrimaryColor }}>Silva</span>
        </Title>
      </TitleContainer>
    </Container>
  );
};
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

const Title = styled.h1`
  font-family: "Aldrich";
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  color: #fff;
`;

export default Header;
