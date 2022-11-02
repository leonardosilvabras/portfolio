import Styled from "styled-components";
import Figma from "../assets/images/figma.png";
import Photoshop from "../assets/images/photoshop.png";

const Tecs = () => {
  const Item = () => {
    const Items = Styled.div`
        display: grid;
    `
    const Content = Styled.div`
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 3rem;
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
      </Items>
    );
  };

  return (
    <div>
      <Item />
    </div>
  );
};

export default Tecs;
