import styled from 'styled-components'
import { PrimaryColor } from "../colors";

const HeaderTitle = () => {
    return (
        <div>
            <Title>
                <span style={{ color: PrimaryColor }}>
                    //
                </span>
                Leonardo
                <span style={{ color: PrimaryColor }}>
                    Silva
                </span>
            </Title>
        </div>
    )
}

const Title = styled.h1`
    font-family: 'Aldrich';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;

    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;

    color: #fff;
`;

export default HeaderTitle;