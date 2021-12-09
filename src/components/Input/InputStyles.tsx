import styled from "@emotion/styled";
import { colors } from "../UI/colors";

export const BoxInput = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 5% 84% 5% 6%;
  align-items: center;
  padding: 0 12px;
  background: ${colors.neutral4};
  border-radius: 16px;
`;

export const InputStyles = styled.input`
  width: 100%;
  color: ${colors.neutral2};
  border: none;
  outline: none;
  padding: 20px 0;
  margin: 0;
  background: ${colors.neutral4};
  box-sizing: border-box;

  &::placeholder {
    color: ${colors.neutral2};
    text-transform: capitalize;
  }
`;

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

export const DefaulPhoto = styled.button`
  margin: 0 12px;
  padding: 10px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  background: ${colors.neutral5};
  cursor: pointer;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .iconInput {
    color: ${colors.neutral2};
    font-size: 24px;
    box-sizing: border-box;
  }
`;
