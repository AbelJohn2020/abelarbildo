import React from "react";
import { Prevstate } from "../../App";
import Icons from "../Icons/Icons";
import { ButtonStyles } from "./ButtonsStyles";

type iconsButton = {
  id: string;
  type: string;
  border: string;
  clickedColor: string;
  color: string;
  selected: Prevstate[];
};

export const Button = ({
  id,
  type,
  border,
  clickedColor,
  color,
  selected,
}: iconsButton) => {
  const filteredArray = (divId: string) => {
    return selected.find(({ id }) => id === divId);
  };

  const changeColor = filteredArray(id) !== undefined && filteredArray(id);

  return (
    <div id={id}>
      <ButtonStyles
        type="button"
        border={border}
        clickedColor={clickedColor}
        color={color}
        id={id}
        state={changeColor}
      >
        <Icons type={type} className="icons" />
      </ButtonStyles>
    </div>
  );
};
