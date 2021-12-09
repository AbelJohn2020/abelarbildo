import React from "react";
import { Prevstate } from "../../App";
import { Button } from "../Buttons/Buttons";
import Icons from "../Icons/Icons";
import { Input } from "../Input/Input";
import { taskmodels } from "../Tasks/TasksType";
import TaskTitle from "../TaskTitle/TaskTitle";
import { colors } from "../UI/colors";
import {
  HeaderIcons,
  HeaderIconsPLus,
  ShowTaskForm,
  PlusButton,
} from "./HeaderStyles";

type navIcons = {
  id: string;
  type: string;
};

type header = {
  inputValue: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  navbarIcons: navIcons[];
  selected: Prevstate[];
  plus: boolean;
  setPlus: React.Dispatch<React.SetStateAction<boolean>>;
  tasks: taskmodels[];
};

const Header = ({
  inputValue,
  handleChange,
  navbarIcons,
  selected,
  plus,
  setPlus,
  tasks,
}: header) => {
  const handleClick = () => {
    setPlus(!plus);
  };

  return (
    <div className="App__right--icons">
      <Input
        name="search"
        value={inputValue}
        onChange={handleChange}
        firstIcon="search"
        secondIcon="notifications"
        photo={true}
        profile="" //modificar
      />
      <HeaderIconsPLus>
        <HeaderIcons>
          {navbarIcons.map(({ id, type }) => (
            <Button
              key={id}
              id={id}
              type={type}
              border={colors.primary4}
              clickedColor={colors.primary4}
              color={colors.neutral2}
              selected={selected}
            />
          ))}
        </HeaderIcons>
        <ShowTaskForm>
          {plus && <TaskTitle setIsActive={setPlus} tasks={tasks} />}
          <PlusButton onClick={handleClick}>
            <Icons type="plus" className="plusIcon" />
          </PlusButton>
        </ShowTaskForm>
      </HeaderIconsPLus>
    </div>
  );
};

export default Header;
