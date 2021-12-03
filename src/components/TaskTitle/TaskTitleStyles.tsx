import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../UI/colors";

type box = {
    margin: string,
}

type buttonstt = {
    background: string,
    color: string,
    margin: string,
}

export const TaskTitleStyles = styled.div`
    margin: 0 16px 0 0;
    max-height: 124px;
    padding: 8px;
    background: ${colors.neutral3};
`;

export const BoxIconsButtonsTT = styled.div(({margin}: box) => css`
    margin: ${margin};
    display: flex;
    box-sizing: border-box;
`);

export const ButtonsTT = styled.button(({background, color, margin}: buttonstt) => css`
    background: ${background};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
    border: none;
    outline: none;
    color: ${color};
    margin: ${margin};
    cursor: pointer;

    .icons {
        font-size: 16px;
    }
`); 

export const ButtonsCC = styled.button(({background, color, margin}: buttonstt) => css`
    background: ${background};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
    border: none;
    outline: none;
    color: ${color};
    margin: ${margin};
    cursor: pointer;

    &:hover {
        background: ${colors.primary2};
        border-radius: 8px;
    }

    .icons {
        font-size: 16px;
    }
`); 

export const NameButtonsTT = styled.div`
    margin: 0 0 0 6px;
    text-transform: capitalize;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.75px;
`;

export const BoxCC = styled.div`
    display: flex;
    box-sizing: border-box;
    justify-content: flex-end;
`;