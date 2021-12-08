import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../UI/colors";

type Buttonheaderstyles = {
  color: string;
  size: string;
};

type Boxicons = {
  padding: string;
  margin: string;
};

type Tag = {
  tag: string;
};

export const ContainerModelCard = styled.div`
  width: 100%;
  box-sizing: border-box;
  color: ${colors.neutral};
  margin: 16px 0 0 0;
  padding: 16px;
  background: ${colors.neutral4};
  border-radius: 8px;
`;

export const HeaderModelCardStyles = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 16px 0;
`;

export const ButtonHeaderCardStyles = styled.button(
  ({ color, size }: Buttonheaderstyles) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background: transparent;
    outline: none;
    border: none;
    color: ${color};
    cursor: pointer;

    .cardIcon {
      background: transparent;
      font-size: ${size};
    }
  `
);

export const BoxIconCardStyles = styled.div(
  ({ margin, padding }: Boxicons) => css`
    padding: ${padding};
    margin: ${margin};
  `
);

export const BoxDay = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 16px;
  background: ${colors.background};
  border-radius: 4px;
`;

export const BoxTagCard = styled.div(
  ({ tag }: Tag) => `
    padding: 4px 16px;
    background: ${
      tag === "ANDROID" || tag === "NODE_JS"
        ? colors.backgroundS
        : colors.backgroundT
    };
    color: ${
      tag === "ANDROID" || tag === "NODE_JS"
        ? colors.secondary
        : colors.tertiary
    };
    margin: 0 8px 0 0;
`
);

export const Tags = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 16px 0;
`;

export const FooterIconsCardStyles = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export const BoxImg = styled.div`
  width: 10%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 100%;
`;
