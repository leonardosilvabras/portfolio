import styled from "styled-components";
import { PrimaryColor } from "../colors";

const Item = (name) => {
  return (
    <Button>
      <a href="#">
        <span style={{ color: PrimaryColor }}>#</span>
        {name}
      </a>
    </Button>
  );
};

const Nav = () => {
  return (
    <Menu>
      <Container>
        {Item("Inicio")}
        {Item("Sobre")}
        {Item("Projetos")}
        {Item("Contato")}
      </Container>
    </Menu>
  );
};

const Menu = styled.div`
  position: fixed;
  z-index: 2;
  right: 0;
  margin-right: 1rem;

  height: 100vh;
  width: 5%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  list-style: none;
`;

const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  list-style-type: none;
  padding: 2rem;

  transform: rotate(90deg);
`

const Button = styled.li`
  margin: 0 1rem 0 1rem;

  font-family: "Alatsi";
  font-style: normal;
  font-weight: 400;
  font-size: 1.1rem;

  text-transform: uppercase;

  a {
    text-decoration: none;
    color: #fff;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default Nav;
