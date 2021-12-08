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

export type Prevstate = {
  id: string;
  active: boolean;
};

export type MyGlobalstate = {
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
  const [selected, setSelected] = useState<Array<Prevstate>>(prevState);
  const [plus, setPlus] = useState<boolean>(false);
  const [newData, setnewData] = useState<MyGlobalstate>(globalState);

  const { loading, error, data } = useQuery(TASKS);
  const { tasks } = data !== undefined && data;

  useEffect(() => {
    setnewData(newData);
  }, [newData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

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
