import React from "react";
import { globalstate } from "../../App";
import Icons from "../Icons/Icons";
import { OptionsSelectStyles } from "./DropdownSelectStyles";

type select = {
  title: string;
  icon: string;
  options: string[];
  handleChangeCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  globalState: globalstate;
  click: boolean;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
};

const DropdownSelect = ({
  title,
  icon,
  options,
  handleChangeCheckbox,
  globalState,
  click,
  setClick,
}: select) => {
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div onClick={handleClick}>
      <div>
        {globalState && globalState.tags.length <= 1 ? (
          <div>
            <div>
              <Icons type={icon} className="icon" />
            </div>
            <div>{title}</div>
          </div>
        ) : (
          <div>
            <div>{globalState.tags[0]}</div>
            <div>{globalState.tags.length - 1}</div>
          </div>
        )}
      </div>
      <OptionsSelectStyles click={click}>
        {options &&
          options.map((option) => (
            <div key={option}>
              <input
                type="checkbox"
                value={option}
                name={option}
                onChange={handleChangeCheckbox}
              />
              <div>{option}</div>
            </div>
          ))}
      </OptionsSelectStyles>
    </div>
  );
};

export default DropdownSelect;
