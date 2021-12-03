import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import './App.css';
import User from "./components/User/User";
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Tasks from './components/Tasks/Tasks';
import { useQuery } from '@apollo/client';
import { TASKS } from './components/queries/queries';

const prevState = [
  { id: "1", active: false  },
  { id: "2", active: false  },
  { id: "3", active: false  },
];

export const navbarIcons = [
  { id: "1", type: "dashBoard" },
  { id: "2", type: "hamburger" },
  { id: "3", type: "assignee" },
]

export type prevstate = {
  id: string,
  active: boolean
}

export type globalstate = {
  taskTitleInput: string,
  estimate: string,
  assignee: string,
  label: string,
  dueDate: string,
}

const globalState = {
  taskTitleInput: '',
  estimate: '',
  assignee: '',
  label: '',
  dueDate: '',
}

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [selected, setSelected] = useState<Array<prevstate>>(prevState)
  const [plus, setPlus] = useState<boolean>(false);
  const [newData, setnewData] = useState<globalstate>(globalState)

  const { loading, error, data } = useQuery(TASKS);
  const { tasks } = (data !== undefined) && data;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <>
      <Router>
        <div className="App">
          <Navbar 
            selected={selected} 
            setSelected={setSelected}  
          />

          <div className='App__right'>
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
              <Route path="/dashboard" element={<Cards />}/>
              <Route path="/mytask" element={<Tasks loading={loading} error={error} tasks={tasks} />}/>
              <Route path="/profile" element={<User />}/>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
