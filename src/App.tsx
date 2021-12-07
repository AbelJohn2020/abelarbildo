import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import User from "./components/User/User";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Tasks from "./components/Tasks/Tasks";
import { useQuery } from "@apollo/client";
import { TASKS } from "./components/queries/queries";
import Icons from "./components/Icons/Icons";

const prevState = [
  { id: "1", active: false },
  { id: "2", active: false },
  { id: "3", active: false },
];

export const navbarIcons = [
  { id: "1", type: "dashBoard" },
  { id: "2", type: "hamburger" },
  { id: "3", type: "assignee" },
];

export type prevstate = {
  id: string;
  active: boolean;
};

export type globalstate = {
  name: string;
  pointEstimate: string;
  owner: string;
  tags: string[];
  dueDate: string;
  status: string;
};

const globalState = {
  name: "",
  pointEstimate: "",
  owner: "",
  tags: [],
  dueDate: "",
  status: "",
};

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [selected, setSelected] = useState<Array<prevstate>>(prevState);
  const [plus, setPlus] = useState<boolean>(false);
  const [newData, setnewData] = useState<globalstate>(globalState);

  // const [status, setStatus] = useState<string[]>([]);

  const { loading, error, data } = useQuery(TASKS);
  const { tasks } = data !== undefined && data;

  useEffect(() => {
    setnewData(newData);
  }, [newData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.checked);
  //   if (e.target.checked === true) {
  //     return setStatus([...status, e.target.value]);
  //   } else {
  //     console.log(status, "status");
  //     console.log(status.length);
  //     if (status.length > 1) {
  //       const filterArr = status.filter(
  //         (element) => element !== e.target.value
  //       );
  //       return setStatus(filterArr);
  //     } else {
  //       return setStatus([]);
  //     }
  //   }
  // };

  // console.log(status);

  return (
    <>
      <Router>
        <div className="App">
          <Navbar selected={selected} setSelected={setSelected} />
          <div className="App__right">
            <Header
              inputValue={inputValue}
              handleChange={handleChange}
              navbarIcons={navbarIcons}
              selected={selected}
              plus={plus}
              setPlus={setPlus}
              tasks={tasks}
              globalState={newData}
              setGlobalData={setnewData}
            />

            {/* <div>
              <div>
                <div>
                  <Icons type="label" className="icon" />
                </div>
                <div>label</div>
              </div>
              <div>
                <div>
                  <input
                    type="checkbox"
                    name="REACT_JS"
                    value="REACT_JS"
                    onChange={handleChangeCheckbox}
                  />
                  <div>react</div>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="PYTHON"
                    value="PYTHON"
                    onChange={handleChangeCheckbox}
                  />
                  <div>python</div>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="NODE_JS"
                    value="NODE_JS"
                    onChange={handleChangeCheckbox}
                  />
                  <div>node js</div>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="VUE_JS"
                    value="VUE_JS"
                    onChange={handleChangeCheckbox}
                  />
                  <div>vue</div>
                </div>
              </div>
            </div> */}

            <Routes>
              <Route path="/dashboard" element={<Cards />} />
              <Route
                path="/mytask"
                element={
                  <Tasks loading={loading} error={error} tasks={tasks} />
                }
              />
              <Route path="/profile" element={<User />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
