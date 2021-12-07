import { css } from "@emotion/react";
import styled from "@emotion/styled";

type optionSelect = {
  click: boolean;
};

export const OptionsSelectStyles = styled.div(
  ({ click }: optionSelect) => css`
    display: ${click === true ? "flex" : "none"};
  `
);
