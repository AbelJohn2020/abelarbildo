import React, { useState } from "react";
import { colors } from "../UI/colors";
import Mplus from "../iconsImages/minusplus.png";
import {
  BoxCC,
  BoxIconsButtonsTT,
  ButtonsCC,
  NameButtonsTT,
  TaskTitleStyles,
} from "./TaskTitleStyles";
import { taskmodels } from "../Tasks/TasksType";
import DropDown from "../DropDown/DropDown";
import { MyGlobalstate } from "../../App";
import { useMutation } from "@apollo/client";
import { CREATE_TASK } from "../mutations/mutations";
import DropdownSelect from "../DropdownSelect/DropdownSelect";
import { TASKS } from "../queries/queries";

type TaskTitleType = {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  tasks: taskmodels[];
  globalState: MyGlobalstate;
  setGlobalData: React.Dispatch<React.SetStateAction<MyGlobalstate>>;
};

export type DropType = {
  id: string;
  isActive: boolean;
};

const labels = ["ANDROID", "IOS", "NODE_JS", "RAILS", "REACT"];

const estimates = ["ZERO", "ONE", "TWO", "FOUR", "EIGHT"];

const status = ["BACKLOG", "CANCELLED", "DONE", "IN_PROGRESS", "TODO"];

const dropState = [
  { id: "estimate", isActive: false },
  { id: "assignee", isActive: false },
  { id: "label", isActive: false },
  { id: "status", isActive: false },
];

const TaskTitle = ({
  setIsActive,
  tasks,
  globalState,
  setGlobalData,
}: TaskTitleType) => {
  const [createTask] = useMutation(CREATE_TASK, {
    refetchQueries: [TASKS],
  });

  const [dropdownState, setDropdownState] = useState<DropType[]>(dropState);

  const [click, setClick] = useState<boolean>(false);

  const getWorkers = () => {
    const workers =
      tasks &&
      tasks.map(({ owner }: taskmodels) => {
        return { avatar: owner.avatar, fullName: owner.fullName };
      });

    return workers.filter(
      (addStates, index, self) =>
        index === self.findIndex((s) => s.avatar === addStates.avatar)
    );
  };

  const handleCancel = () => {
    setIsActive(false);
    setGlobalData({
      name: "",
      pointEstimate: "",
      owner: "",
      tags: [],
      dueDate: "",
      status: "",
    });
  };

  const handleCreate = () => {
    // setIsActive(false);
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalData({ ...globalState, name: event.target.value });
  };

  const handleChangeDueDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value;
    setGlobalData({ ...globalState, dueDate: date });
    setClick(false);
  };

  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClick(true);
    if (e.target.checked === true) {
      return setGlobalData({
        ...globalState,
        tags: [...globalState.tags, e.target.value],
      });
    } else {
      if (status.length > 1) {
        const filterArr = globalState.tags.filter(
          (element) => element !== e.target.value
        );
        return setGlobalData({ ...globalState, tags: [...filterArr] });
      } else {
        return setGlobalData({ ...globalState, tags: [] });
      }
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(globalState);

    // await createTask({
    //   variables: {
    //     dueDate: globalState.dueDate,
    //     name: globalState.name,
    //     pointEstimate: globalState.pointEstimate,
    //     status: globalState.status,
    //     tags: globalState.tags,
    //   },
    // });

    setGlobalData({
      name: "",
      pointEstimate: "",
      owner: "",
      tags: [],
      dueDate: "",
      status: "",
    });
  };

  const workers = getWorkers();

  return (
    <TaskTitleStyles onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChangeInput}
        value={globalState.name}
        name="name"
      />

      <BoxIconsButtonsTT margin="8px 0 16px 0">
        <div>
          <DropDown
            options={estimates}
            image={true}
            nameImage={Mplus}
            name="estimate"
            icon="plus"
            dropdownState={dropdownState}
            setDropdownState={setDropdownState}
            globalState={globalState}
            setGlobalData={setGlobalData}
            keyState="pointEstimate"
            width="128px"
            paddingOption="4px 20px"
            setClick={setClick}
          />
        </div>
        <div>
          <DropDown
            options={workers}
            image={false}
            nameImage=""
            name="assignee"
            icon="assignee"
            dropdownState={dropdownState}
            setDropdownState={setDropdownState}
            globalState={globalState}
            setGlobalData={setGlobalData}
            keyState="owner"
            width="140px" // I was here!
            paddingOption="4px"
            setClick={setClick}
          />
        </div>
        <div>
          <DropdownSelect
            title="label"
            icon="label"
            options={labels}
            handleChangeCheckbox={handleChangeCheckbox}
            globalState={globalState}
            click={click}
            setClick={setClick}
            dropdownState={dropdownState}
            setDropdownState={setDropdownState}
          />
        </div>
      </BoxIconsButtonsTT>

      <BoxCC>
        <div>
          <DropDown
            options={status}
            image={false}
            nameImage=""
            name="status"
            icon="hamburger"
            dropdownState={dropdownState}
            setDropdownState={setDropdownState}
            globalState={globalState}
            setGlobalData={setGlobalData}
            keyState="status"
            width="160px"
            paddingOption="4px 20px"
            setClick={setClick}
          />
        </div>
        <input
          type="date"
          value={globalState.dueDate}
          onChange={handleChangeDueDate}
          name="dueDate"
        />
        <BoxIconsButtonsTT margin="0">
          <ButtonsCC
            background="transparent"
            color={colors.neutral}
            margin="0 8px 0 0"
            onClick={handleCancel}
            type="button"
          >
            <NameButtonsTT>cancel</NameButtonsTT>
          </ButtonsCC>
          <ButtonsCC
            background="transparent"
            color={colors.neutral}
            margin="0"
            onClick={handleCreate}
            type="submit"
          >
            <NameButtonsTT>create</NameButtonsTT>
          </ButtonsCC>
        </BoxIconsButtonsTT>
      </BoxCC>
    </TaskTitleStyles>
  );
};

export default TaskTitle;
