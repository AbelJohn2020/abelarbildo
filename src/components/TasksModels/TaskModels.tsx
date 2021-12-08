import React from "react";
import wordsToNumbers from "words-to-numbers";
import Icons from "../Icons/Icons";
import {
  BoxTasksTagsLength,
  BoxTaskTag,
  ButtonTask,
  FirstBoxGlobalTask,
  H1TaskTitleStyles,
  Img,
  Lenght,
  LimitAndPadding,
  SecondBoxGlobalTask,
  TaskAssign,
  TaskModelNameStyles,
  TasksTagsLength,
  TaskTitleStylesDownRadius,
  TaskTitleStylesNoRadius,
  TaskTitleStylesUpRadius,
  TitleModel,
  TitleTask,
  TitleTaskNoPadding,
} from "./TaskModelStyles";
import { taskmodelname, taskmodels, taskmodeltitle } from "./TaskModelsType";

export const TaskModelTitle = ({
  firstColumn,
  secondColumn,
  thirdColumn,
  fourthColumn,
  fifthColumn,
}: taskmodeltitle) => {
  return (
    <FirstBoxGlobalTask>
      <TaskTitleStylesUpRadius>
        <TitleModel># {firstColumn}</TitleModel>
      </TaskTitleStylesUpRadius>
      <TaskTitleStylesNoRadius>
        <TitleModel>{secondColumn}</TitleModel>
      </TaskTitleStylesNoRadius>
      <TaskTitleStylesNoRadius>
        <TitleModel>{thirdColumn}</TitleModel>
      </TaskTitleStylesNoRadius>
      <TaskTitleStylesNoRadius>
        <TitleModel>{fourthColumn}</TitleModel>
      </TaskTitleStylesNoRadius>
      <TaskTitleStylesDownRadius>
        <TitleModel>{fifthColumn}</TitleModel>
      </TaskTitleStylesDownRadius>
    </FirstBoxGlobalTask>
  );
};

export const TaskModels = ({
  title,
  tasksTags,
  pointEstimate,
  image,
  name,
  tasksAssignName,
  dueDate,
}: taskmodels) => {
  const converEestimate = () => {
    const lower = pointEstimate.toString().toLowerCase();
    return wordsToNumbers(lower);
  };

  const estimate = converEestimate();

  const convertDueDate = () => {
    const date = new Date();
    const today = date.toDateString();

    const newDate = new Date(dueDate);
    const day = newDate.toDateString();

    const arrToday = today.split(" ");
    const arrDay = day.split(" ");

    if (arrToday[1] === arrDay[1] && arrToday[3] === arrDay[3]) {
      if (Number(arrToday[2]) === Number(arrDay[2])) {
        return "today";
      } else {
        if (Number(arrToday[2]) === Number(arrDay[2]) + 1) {
          return "yesterday";
        } else {
          if (Number(arrToday[2]) + 1 === Number(arrDay[2])) {
            return "tomorrow";
          } else {
            return day;
          }
        }
      }
    } else {
      return day;
    }
  };

  const dueDt = convertDueDate();

  return (
    <SecondBoxGlobalTask>
      <TaskTitleStylesNoRadius>
        <TitleTask>{title}</TitleTask>
      </TaskTitleStylesNoRadius>
      <TaskTitleStylesNoRadius>
        <LimitAndPadding>
          {tasksTags && tasksTags.length > 1 ? (
            <BoxTasksTagsLength>
              <BoxTaskTag tag={tasksTags[0].toString()}>
                {tasksTags[0]}
              </BoxTaskTag>
              <TasksTagsLength>+{tasksTags.length - 1}</TasksTagsLength>
            </BoxTasksTagsLength>
          ) : (
            <BoxTaskTag tag={tasksTags.toString()}>{tasksTags}</BoxTaskTag>
          )}
        </LimitAndPadding>
      </TaskTitleStylesNoRadius>
      <TaskTitleStylesNoRadius>
        <TitleTask>{estimate} points</TitleTask>
      </TaskTitleStylesNoRadius>
      <TaskAssign>
        <Img src={image} alt={name} />
        <TitleTaskNoPadding>{tasksAssignName}</TitleTaskNoPadding>
      </TaskAssign>
      <TaskTitleStylesNoRadius>
        <TitleTask>{dueDt}</TitleTask>
      </TaskTitleStylesNoRadius>
    </SecondBoxGlobalTask>
  );
};

export const TaskModelName = ({
  id,
  title,
  icon,
  length,
  state,
  setState,
}: taskmodelname) => {
  const handleClick = (event: { currentTarget: { id: string } }) => {
    const newArr = state.map((prevState) => {
      if (prevState.id === event.currentTarget.id) {
        return { ...prevState, show: !prevState.show };
      } else {
        return { ...prevState };
      }
    });

    setState(newArr);
  };

  const isTrue = (divId: string) => {
    return state.find(({ id }) => divId === id);
  };

  const separation = isTrue && isTrue(id);

  return (
    <TaskModelNameStyles id={id} separation={separation}>
      <ButtonTask name={title} id={id} onClick={handleClick}>
        <Icons type={icon} className="iconTMN" />
      </ButtonTask>
      <div>
        <H1TaskTitleStyles>
          {title}
          <Lenght>{`(0${length})`}</Lenght>
        </H1TaskTitleStyles>
      </div>
    </TaskModelNameStyles>
  );
};
