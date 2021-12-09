import React from "react";
import Icons from "../Icons/Icons";
import {
  BoxIconsInput,
  BoxInput,
  DefaulPhoto,
  InputStyles,
} from "./InputStyles";

type input = {
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  firstIcon: string;
  secondIcon: string;
  photo: boolean;
  profile: string;
};

export const Input = ({
  name,
  value,
  onChange,
  firstIcon,
  secondIcon,
  profile,
}: input) => {
  return (
    <BoxInput>
      <BoxIconsInput>
        <Icons type={firstIcon} className="iconInput" />
      </BoxIconsInput>
      <InputStyles
        placeholder="search"
        autoComplete="off"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      />
      <BoxIconsInput>
        <Icons type={secondIcon} className="iconInput" />
      </BoxIconsInput>
      <DefaulPhoto>
        <Icons type="assignee" className="iconInput" />
      </DefaulPhoto>
    </BoxInput>
  );
};
