import { shallow } from "enzyme";
import React, { useState } from "react";
import DropDown from "../components/DropDown/DropDown";
import { DropType, MyGlobalstate } from "../components/TaskTitle/TaskTitle";

const globalState = {
  name: "",
  pointEstimate: "",
  owner: "",
  tags: [],
  dueDate: "",
  status: "",
};

const dropState = [
  { id: "estimate", isActive: false },
  { id: "assignee", isActive: false },
  { id: "label", isActive: false },
  { id: "status", isActive: false },
];

describe("Test in <Dropdown /> component", () => {
  const [dropdownState, setDropdownState] = useState<DropType[]>(dropState);
  const [newData, setnewData] = useState<MyGlobalstate>(globalState);
  const [click, setClick] = useState<boolean>(false);
  test("Sould return a string", () => {
    const estimates = ["ZERO", "ONE", "TWO", "FOUR", "EIGHT"];
    const testOptions = estimates;
    const testImage = false;
    const testNameImage = "";
    const testName = "assignee";
    const testIcon = "assignee";
    const testDropdownState = dropdownState;
    const testSetDropdownState = setDropdownState;
    const testGlobalState = newData;
    const testSetGlobalData = setnewData;
    const testKeyState = "owner";
    const testWidth = "140px";
    const testPaddingOption = "4px";
    const testSetClick = setClick;

    const wrapper = shallow(
      <DropDown
        options={testOptions}
        image={testImage}
        nameImage={testNameImage}
        name={testName}
        icon={testIcon}
        dropdownState={testDropdownState}
        setDropdownState={testSetDropdownState}
        globalState={testGlobalState}
        setGlobalData={testSetGlobalData}
        keyState={testKeyState}
        width={testWidth}
        paddingOption={testPaddingOption}
        setClick={testSetClick}
      />
    );
  });
});
