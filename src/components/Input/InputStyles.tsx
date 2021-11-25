import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../UI/colors";

type boxInput = {
    isThereFirstIcon: boolean,
    isThereSecondIcon: boolean,
    photo: boolean,
}

type input = {
    width: string,
    color: string,
    border: string,
    inputPlaceholder: string,
    inputPadding: string,
    inputMargin: string,
    inputBackground: string,
}

export const BoxInput = styled.div(({isThereFirstIcon, isThereSecondIcon, photo}: boxInput) => css`
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: ${
        (isThereFirstIcon && isThereSecondIcon && photo) 
            ? "5% 84% 5% 6%" 
            : (
                (isThereFirstIcon && isThereSecondIcon) ?? (isThereFirstIcon && photo) ?? (isThereSecondIcon && photo)
                    ? "6% 88% 6%"
                    : ( 
                        ( isThereFirstIcon )
                            ? "6% 94%"
                            : "100%"
                    )
            )
    };
    align-items: center;
    padding: 0 12px;
    background: ${colors.neutral4};
    border-radius: 16px;
`);

export const InputStyles = styled.input(({ width, color, border, inputPlaceholder, inputPadding, inputMargin, inputBackground }: input) => css`
    width: ${width};
    color: ${color};
    border: ${border};
    outline: none;
    padding: ${inputPadding}; 
    margin: ${inputMargin}; 
    background: ${inputBackground};
    box-sizing: border-box;

    &::placeholder {
        color: ${inputPlaceholder};
    }
`);

export const BoxIconsInput = styled.button`
    margin: 0 12px;
    padding: 0 4px 0 2px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
    
    .iconInput {
        color: ${colors.neutral2};
        font-size: 20px;
        box-sizing: border-box;
    }
`;