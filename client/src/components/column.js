import styled from "styled-components";
import { PrimaryColor } from "../colors";

const column = () => {
  const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;

    height: 100vh;
    padding: 0 2rem 0 2rem;
  `;

  const Content = styled.div`
    display: flex;
    height: 50%;

    align-items: flex-end;
  `;

  const Science = styled.h3`
    font-family: "Aldrich";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: white;

    text-align: center;
    text-transform: uppercase;
  `;

  const Engineer = styled.h3`
    font-family: "Aldrich";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: white;

    text-align: center;
    text-transform: uppercase;

    margin-bottom: 5rem;
  `;

  return (
    <Column>
      <Content>
        <Science>
          <span style={{ color: PrimaryColor }}>Ciência</span>
          da <br />
          Computação
        </Science>
      </Content>

      <Content>
        <Engineer>
          Web Software <br />
          <span style={{ color: PrimaryColor }}>Engineer</span>
        </Engineer>
      </Content>
    </Column>
  );
};

export default column;
