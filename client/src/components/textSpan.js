import styled from "styled-components";
import { PrimaryColor } from "../colors";

const TextSpan = (span, title, span2) => {
    const Title = styled.h2`
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

    return (
        <Title>
            <span style={{ color: PrimaryColor }}>{span}</span>
            {title}
            <span style={{ color: PrimaryColor }}>{span2}</span>
        </Title>
    )
}

export default TextSpan;