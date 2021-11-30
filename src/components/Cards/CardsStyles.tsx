import styled from "@emotion/styled";
import { colors } from "../UI/colors";

export const DashBoardStyles = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 24% 24% 24% 24%;
    gap: 16px;
`;

export const Column = styled.div`
    width: 100%;
    box-sizing: border-box;
    color: ${colors.neutral};
`;