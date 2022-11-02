import styled from "styled-components";
import { PrimaryColor } from "../colors";

const column = () => {
  const ColumnWeb = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;

    height: 100vh;
    padding: 0 2rem 0 2rem;

    @media (max-width: 850px) {
      display: none;
    }
  `;

  const ContentWeb = styled.div`
    display: flex;
    height: 50%;

    align-items: flex-end;
  `;

  const ColumnMobile = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;

    margin-top: 50vh;
    width: 100vw;

    padding: 0 2rem 0 2rem;

    @media (max-width: 850px) {
      display: flex;
    }
  `;

  const ContentMobile = styled.div`
    display: flex;
  `;

  const Science = styled.h3`
    font-family: "Aldrich";
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    color: white;

    text-align: center;
    text-transform: uppercase;

    @media (max-width: 850px) {
      margin: 5rem 10rem 5rem 3rem;
    }

    @media (max-width: 400px) {
      font-size: 1.2rem;
    }
  `;

  const Engineer = styled.h3`
    font-family: "Aldrich";
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;;
    color: white;

    text-align: center;
    text-transform: uppercase;

    margin-bottom: 5rem;

    @media (max-width: 400px) {
      font-size: 1.2rem;
    }
  `;

  return (
    <div>
      <ColumnWeb>
        <ContentWeb>
          <Science>
            <span style={{ color: PrimaryColor }}>Ciência </span>
            da <br />
            Computação
          </Science>
        </ContentWeb>

        <ContentWeb>
          <Engineer>
            Web Software <br />
            <span style={{ color: PrimaryColor }}>Engineer</span>
          </Engineer>
        </ContentWeb>
      </ColumnWeb>
      <ColumnMobile>
        <ContentMobile>
          <Science>
            <span style={{ color: PrimaryColor }}>Ciência</span>
            da <br />
            Computação
          </Science>
        </ContentMobile>

        <ContentMobile>
          <Engineer>
            Web Software <br />
            <span style={{ color: PrimaryColor }}>Engineer</span>
          </Engineer>
        </ContentMobile>
      </ColumnMobile>
    </div>
  );
};

export default column;
