import React from "react";
import wordsToNumbers from "words-to-numbers";
import Icons from "../Icons/Icons";
import { DropType, MyGlobalstate } from "../TaskTitle/TaskTitle";
import {
  ContainerName,
  ContainerOptions,
  DivImageOption,
  DivName,
  DivNameOption,
  ImgDropDown,
  Name,
  Option,
} from "./DropDownStyles";

type Owner = {
  avatar: string;
  fullName: string;
};

export type DropdownType = {
  options: Owner[] | string[];
  image: boolean;
  nameImage: string;
  name: string;
  icon: string;
  dropdownState: DropType[];
  setDropdownState: React.Dispatch<React.SetStateAction<DropType[]>>;
  globalState: MyGlobalstate;
  setGlobalData: React.Dispatch<React.SetStateAction<MyGlobalstate>>;
  keyState: string;
  width: string;
  paddingOption: string;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
};

const DropDown = ({
  options,
  image,
  nameImage,
  name,
  icon,
  dropdownState,
  setDropdownState,
  globalState,
  setGlobalData,
  keyState,
  width,
  paddingOption,
  setClick,
}: DropdownType) => {
  const handleClick = () => {
    setClick(false);
    const activeDeactivate = dropdownState?.map((prevState) => {
      if (prevState.id === name) {
        return { ...prevState, isActive: !prevState.isActive };
      } else {
        return { ...prevState, isActive: false };
      }
    });

    setDropdownState(activeDeactivate);
  };

  const convertEstimate = (estimate: string) => {
    const lower = estimate.toString().toLowerCase();
    return wordsToNumbers(lower);
  };

  const handleChange = (e: any) => {
    setGlobalData({
      ...globalState,
      [keyState]: e.target.value || e.target.id,
    });

    const activeDeactivate = dropdownState?.map((prevState) => {
      return { ...prevState, isActive: false };
    });

    setDropdownState(activeDeactivate);
  };

  const blankSpace = (state: any) => {
    return state[keyState];
  };

  const getId = () => {
    return dropdownState.find(({ id }) => id === name);
  };

  const showHide = getId();
  const noContent = blankSpace && blankSpace(globalState);

  return (
    <div>
      <ContainerName onClick={handleClick}>
        {noContent === "" ? (
          <DivName>
            <DivName>
              {image ? (
                <i className="iconImageTT">
                  <ImgDropDown src={nameImage} alt="icon minus plus" />
                </i>
              ) : (
                <Icons type={icon} className="icons" />
              )}
            </DivName>
            <Name>{name}</Name>
          </DivName>
        ) : (
          <DivNameOption>
            {keyState === "pointEstimate"
              ? `${convertEstimate(noContent)} points`
              : noContent}
          </DivNameOption>
        )}
      </ContainerName>
      <ContainerOptions width={width}>
        {showHide &&
          showHide.id === name &&
          showHide.isActive === true &&
          options?.map((option: Owner | string) => (
            <Option
              key={typeof option === "string" ? option : option.fullName}
              value={typeof option === "string" ? option : option.fullName}
              onClick={handleChange}
              margin={paddingOption}
            >
              <DivImageOption
                id={typeof option === "string" ? option : option.fullName}
                image={typeof option !== "string" && option.avatar}
                objectImage={option}
              ></DivImageOption>
              {typeof option === "string"
                ? keyState === "pointEstimate"
                  ? `${convertEstimate(option)} points`
                  : option
                : option.fullName}
            </Option>
          ))}
      </ContainerOptions>
    </div>
  );
};

export default DropDown;
