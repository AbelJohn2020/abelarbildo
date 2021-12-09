import React from "react";
import Icons from "../Icons/Icons";
import { DropType, MyGlobalstate } from "../TaskTitle/TaskTitle";
import { OptionsSelectStyles } from "./DropdownSelectStyles";

type select = {
  title: string;
  icon: string;
  options: string[];
  handleChangeCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  globalState: MyGlobalstate;
  click: boolean;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
  dropdownState: DropType[];
  setDropdownState: React.Dispatch<React.SetStateAction<DropType[]>>;
};

const DropdownSelect = ({
  title,
  icon,
  options,
  handleChangeCheckbox,
  globalState,
  click,
  setClick,
  dropdownState,
  setDropdownState,
}: select) => {
  const handleClick = () => {
    setClick(!click);
    if (click === true) {
      setDropdownState([
        { id: "estimate", isActive: false },
        { id: "assignee", isActive: false },
        { id: "label", isActive: false },
        { id: "status", isActive: false },
      ]);
    }
  };

  const handleCheckClick = () => {
    setClick(true);
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
      <OptionsSelectStyles click={click} onClick={handleCheckClick}>
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
