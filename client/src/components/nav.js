import styled from 'styled-components'
import { PrimaryColor } from "../colors";

const Item = (name) => {
  return (
    <Button>
      <a href='#'>
        <span style={{ color: PrimaryColor }}>#</span>
        {name}
      </a>
    </Button>
  );
};

const Nav = () => {
  return (
    <Menu>
      {Item("Inicio")}
      {Item("Sobre")}
      {Item("Projetos")}
      {Item("Contato")}
    </Menu>
  );
};

const Menu = styled.div`
  position: fixed;
  top: 25%;
  right: 0;

  height: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  list-style: none;
`;

const Button = styled.li`
  width: 92px;
  height: 30px;
  margin: 3rem;

  font-family: 'Alatsi';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;

  text-transform: uppercase;

  transform: rotate(90deg);

  a {
    text-decoration: none;
    color: #fff;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default Nav;
