import { css } from "@emotion/react";
import styled from "@emotion/styled";

type option = {
    image: string | false,
}

export const Option = styled.button`
    box-sizing: border-box;
    padding: 4px 8px;
    display: flex;
    border: none;
    outline: none;
`;

export const DivImageOption = styled.div(({image}: option) => css`
    width: 32px;
    height: 32px;
    border-radius: 100%;

    background-image: url(${image});
`);

export const DivName = styled.div`
    box-sizing: border-box;
    display: flex;
`;