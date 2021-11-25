import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../UI/colors";

type boxicon = {
    background: string
}

export const NavbarStyles = styled.div`
    width: 100%;
    height: 100vh;
    background: ${colors.neutral4};
    box-sizing: border-box;
    border-radius: 24px;
    padding: 16px 0 0 0;
    margin: 0;

    .navbarOption {
        width: 100%;
        background: transparent;
        text-decoration: none;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        padding: 16px 20px;
        color: ${colors.neutral2};
        
        &:hover {
            background: ${colors.neutral3};
            .icons {
                background: ${colors.neutral3};
            }
        }
    }

    .icons {
        font-size: 22px;
        box-sizing: border-box;
        background: ${colors.neutral4};
    }
`;

export const BoxIcon = styled.div(({background}: boxicon) => css`
    background: ${background};
    box-sizing: border-box;
    padding: 0;
    margin: 0 20px 0 0;
    display: flex;
    align-items: center;

    &:hover {
        background: ${colors.neutral3};
    }
`);

export const BoxImage = styled.div`
    background: transparent;
    box-sizing: border-box;
    padding: 0;
    margin: 0 0 44px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Img = styled.img`
    background: transparent;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
`;