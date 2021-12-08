import React from "react";
import { Link } from "react-router-dom";
import { Prevstate } from "../../App";
import Icons from "../Icons/Icons";
import { Title } from "../Titles/Titles";
import { colors } from "../UI/colors";
import {
  BoxIcon,
  NavbarOptionStyles,
  TitleNavbarOptions,
} from "./NavbarOptionStyles";

export type navbarOption = {
  selected: Prevstate[];
  setSelected: React.Dispatch<React.SetStateAction<Prevstate[]>>;
  id: string;
  link: string;
  name: string;
  type: string;
};

const NavbarOption = ({
  id,
  link,
  name,
  type,
  selected,
  setSelected,
}: navbarOption) => {
  const handleClick = (event: { currentTarget: { id: string } }) => {
    const newArr = selected.map((prevState) => {
      if (prevState.id === event.currentTarget.id) {
        return { id: prevState.id, active: (prevState.active = true) };
      } else {
        return { id: prevState.id, active: (prevState.active = false) };
      }
    });

    const add = [...selected, ...newArr];
    const newState = add.filter(
      (addStates, index, self) =>
        index ===
        self.findIndex(
          (s) => s.id === addStates.id && s.active === addStates.active
        )
    );

    setSelected(newState);
  };

  const findTrue = (divId: string) => {
    if ((e: { currentTarget: { id: string } }) => handleClick(e)) {
      return selected.find(({ id, active }) => divId === id && active === true);
    }
  };

  const blankSpace = findTrue(id) !== undefined && findTrue(id);

  return (
    <NavbarOptionStyles id={id} state={blankSpace} onClick={handleClick}>
      <Link to={link} className="navbarOption" id={id}>
        <BoxIcon background={colors.neutral4}>
          <Icons type={type} className="icons" />
        </BoxIcon>
        <TitleNavbarOptions>{name}</TitleNavbarOptions>
      </Link>
      <div className="red"></div>
    </NavbarOptionStyles>
  );
};

export default NavbarOption;
