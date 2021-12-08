import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Prevstate } from "../../App";
import { colors } from "../UI/colors";

type Boxicon = {
  background: string;
};

type OptionNavbar = {
  state: false | Prevstate | undefined;
};

export const NavbarOptionStyles = styled.div(
  ({ state }: OptionNavbar) => css`
    width: 100%
    background: transparent;
    box-sizing: border-box;
    display: flex;
    height: 44px;
    justify-content: right;
    box-sizing: border-box;

    .red {
        width: 4px;
        display: ${state && state.active === true ? "flex" : "none"};
        border: ${colors.primary4} solid 2px;
        background: ${colors.primary4};
        box-sizing: border-box;
    }

    .navbarOption {
        width: 100%;
        background: ${
          state && state.active === true
            ? "linear-gradient(90deg, rgba(186, 37, 37, 0) 0%, rgba(210, 77, 77, 0.1) 100%)"
            : "transparent"
        };
        padding: 24px 20px;
        text-decoration: none;
        outline: none;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        color: ${
          state && state.active === true ? colors.primary4 : colors.neutral2
        };
        
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
`
);

export const BoxIcon = styled.div(
  ({ background }: Boxicon) => css`
    background: ${background};
    box-sizing: border-box;
    padding: 0;
    margin: 0 20px 0 0;
    display: flex;
    align-items: center;

    &:hover {
      background: ${colors.neutral3};
    }
  `
);

export const TitleNavbarOptions = styled.h1`
  width: 100%;
  box-sizing: border-box;
  family: "SF Pro Display";
  fontstyle: "normal";
  weight: "600";
  size: "16px";
  lineheight: "24px";
  display: "flex";
  align: "center";
  spacing: "0.75px";
  transform: "uppercase";
`;
