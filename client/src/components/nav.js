import styled from "styled-components";
import { PrimaryColor } from "../colors";

const Item = (name, link) => {
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

  return (
    <Button>
      <a href={link}>
        <span style={{ color: PrimaryColor }}>#</span>
        {name}
      </a>
    </Button>
  );
};

const Nav = () => {
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
  `;

  return (
    <Menu id="nav">
      <Container>
        {Item("Inicio", "#home")}
        {Item("Sobre", "#About")}
        {Item("Projetos")}
        {Item("Contato")}
      </Container>
    </Menu>
  );
};

export default Nav;
