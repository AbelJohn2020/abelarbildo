import { css } from "@emotion/react";
import styled from "@emotion/styled";

type titleStyles = {
    family: string,
    fontStyle: string,
    weight: string,
    size: string,
    lineHeight: string,
    display: string,
    align: string,
    spacing: string,
    transform: string,
    background: string,
}

export const TitleStyles = styled.h1(( { family, fontStyle, weight, size, lineHeight, display, align, spacing, transform, background }: titleStyles) => css`
    width: 100%;
    box-sizing: border-box;
    font-family: ${family};
    font-style: ${fontStyle};
    font-weight: ${weight};
    font-size: ${size};
    line-height: ${lineHeight};

    display: ${display};
    align-items: ${align};
    letter-spacing: ${spacing};
    text-transform: ${transform};
    background: ${background};
`);