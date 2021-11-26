import styled from "@emotion/styled";
import { colors } from "../UI/colors";

export const HeaderIconsPLus = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 94% 6%;
    padding: 36px 0 20px 0;
    box-sizing: border-box;
`;

export const HeaderIcons = styled.div`
    width: 100%;
    display: flex;
    padding: 0;
    box-sizing: border-box;
`;

export const PlusBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PlusButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.primary4};
    border: none;
    outline: none;
    padding: 6px;
    border-radius: 8px;
    cursor: pointer;

    .plusIcon {
        color: ${colors.neutral};
        background: transparent;
        font-size: 18px;
    }
`;