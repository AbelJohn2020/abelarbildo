import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Prevstate } from "../../App";
import { colors } from "../UI/colors";

type buttonStyles = {
  id: string;
  border: string;
  clickedColor: string;
  color: string;
  state: false | Prevstate | undefined;
};

export const ButtonStyles = styled.button(
  ({ border, clickedColor, color, state }: buttonStyles) => css`
    outline: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    cursor: pointer;
    padding: 6px;
    border: ${state && state.active === true
      ? `${border} solid 1px`
      : `${colors.neutral5} solid 1px`};
    margin: 0 4px 0 0;
    border-radius: 8px;

    .icons {
      color: ${state && state.active === (undefined || false)
        ? color
        : state && state.active === true && clickedColor};
      background: transparent;
      font-size: 28px;
    }
  `
);
