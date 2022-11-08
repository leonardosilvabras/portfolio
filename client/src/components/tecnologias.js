import Styled from "styled-components";
import Figma from "../assets/images/figma.png";
import Photoshop from "../assets/images/photoshop.png";
import Html from "../assets/images/html.png";
import Css from "../assets/images/css.png";
import Sass from '../assets/images/sass.png'
import Bootstrap from "../assets/images/bootstrap.png";
import MUI from "../assets/images/MUI.png";
import React from "../assets/images/react.png";
import Node from "../assets/images/nodejs.png";
import Ts from "../assets/images/typescript.png";
import Js from "../assets/images/js.png";
import Mongodb from "../assets/images/mongodb.png";

const Tecs = () => {
  const Item = () => {
    const Items = Styled.div`
        position: absolute;
        top: 195vh;

        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 1rem;

        @media (max-width: 800px) {
            grid-template-columns: repeat(7, 1fr); 
            top: 180vh;
        }

        @media (max-width: 700px) {
            grid-template-columns: repeat(6, 1fr); 
        }
    `;
    const Content = Styled.div`
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 3rem;
        }

        @media (max-width: 600px) {
          img { width: 2.5rem; }
      }
    `;

    return (
      <Items>
        <Content>
          <img src={Figma} alt="figma" />
        </Content>
        <Content>
          <img src={Photoshop} alt="Photoshop" />
        </Content>
        <Content>
          <img src={Html} alt="Html" />
        </Content>
        <Content>
          <img src={Css} alt="Css" />
        </Content>
        <Content>
          <img src={Sass} alt="Sass" />
        </Content>
        <Content>
          <img src={Bootstrap} alt="Bootstrap" />
        </Content>
        <Content>
          <img src={MUI} alt="MUI" />
        </Content>
        <Content>
          <img src={React} alt="React" />
        </Content>
        <Content>
          <img src={Node} alt="Node" />
        </Content>
        <Content>
          <img src={Ts} alt="Ts" />
        </Content>
        <Content>
          <img src={Js} alt="Js" />
        </Content>
        <Content>
          <img src={Mongodb} alt="MongoDB" />
        </Content>
      </Items>
    );
  };

  const TecContainer = Styled.div`
    display: flex;  
    align-items: center;
    justify-content: center;
    width: 100%;
  `

  return (
    <TecContainer>
      <Item />
    </TecContainer>
  );
};

export default Tecs;
