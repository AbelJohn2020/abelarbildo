import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../UI/colors";

type option = {
    image: string | false,
    objectImage: string | oImage,
}

type padding = {
    margin: string,
    padding: string,
}

type margin = {
    margin: string,
}

type width = {
    margin: string,
    width: string,
}

type oImage = {
    avatar: string,
    fullName: string,
}

export const Option = styled.button(({margin}: margin) => `
    width: 100%;
    padding: ${margin};
    margin: 0;
    display: flex;
    border: none;
    outline: none;

    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.neutral};
    text-transform: capitalize;
    cursor: pointer;
    background: ${colors.background};
`);

export const ContainerOptions = styled.div(({margin, width}: width) => css`
    width: ${width};
    padding: 0;
    margin: ${margin};
`);

export const DivImageOption = styled.div(({image, objectImage}: option) => css`
    width: 32px;
    height: 32px;
    border-radius: 100%;
    display: ${typeof(objectImage) !== 'string' ? 'flex' : 'none'};

    background-image: url(${image});
`);

export const ContainerName = styled.div(({margin, padding}: padding) => css`
    width: 88px;
    padding: ${padding};
    margin: ${margin};

    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.neutral};
    text-transform: capitalize;
    cursor: pointer;
    background: ${colors.background};
`);

export const DivName = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
`;

export const DivNameOption = styled.div`
    width: 88px;
    padding: 0;
    margin: 0;
`;

export const Name = styled.div`
    box-sizing: border-box;
    padding: 0;
    margin: 0 0 0 8px;
`;

export const ImgDropDown = styled.img`
    box-sizing: border-box;
    display: flex;
    align-items: center;
`;