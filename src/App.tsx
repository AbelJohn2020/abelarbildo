import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import './App.css';
import User from "./components/User/User";
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Tasks from './components/Tasks/Tasks';

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

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [selected, setSelected] = useState<Array<prevstate>>(prevState)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <>
      <Router>
        <div className="App">
          <Navbar selected={selected} setSelected={setSelected}/>
          <div className='App__right'>
            <Header inputValue={inputValue} handleChange={handleChange} navbarIcons={navbarIcons} selected={selected} />
            <Routes>
              <Route path="/dashboard" element={<Cards />}/>
              <Route path="/mytask" element={<Tasks />}/>
              <Route path="/profile" element={<User />}/>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
