import styled from "@emotion/styled";
import { colors } from "../UI/colors";

export const DashBoardStyles = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 30.8% 30.8% 30.8%;
    gap: 32px;
`;

export const Column = styled.div`
    width: 100%;
    box-sizing: border-box;
    color: ${colors.neutral};
`;