import styled from "@emotion/styled";
import { colors } from "../UI/colors";

export const Div = styled.div`
  box-sizing: border-box;
  height: 64%;
`;

export const DashBoardStyles = styled.div`
  height: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 24% 24% 24% 24%;
  gap: 16px;
`;

export const Column = styled.div`
  height: 100%;
  box-sizing: border-box;
  color: ${colors.neutral};
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }
`;
