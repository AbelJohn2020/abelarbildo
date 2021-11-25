import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { Input } from './components/Input/Input';
import { colors } from './components/UI/colors';
import { Button } from './components/Buttons/Buttons';

const prevState = [
  { id: "1", active: false  },
  { id: "2", active: false  },
  { id: "3", active: false  },
];

const navbarIcons = [
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
            <div className="App__right--icons">
              <Input 
                inputType="text"
                name="search"
                placeholder="search"
                value={inputValue}
                onChange={handleChange}
                isThereFirstIcon={true}
                firstIcon="search"
                isThereSecondIcon={true}
                secondIcon="notifications"
                photo={true}
                profile="gaa" //modificar
                width="100%"
                color={colors.neutral2}
                inputPlaceholder={colors.neutral2}
                border="none"
                inputPadding="20px 0"
                inputMargin="0"
                inputBackground="transparent"
              />
              <div className="App_right--icons-dh">
                {
                  navbarIcons.map(({id, type}) => (
                    <Button 
                      key={id}
                      id={id} 
                      type={type} 
                      border={colors.primary4}
                      clickedColor={colors.primary4}
                      color={colors.neutral2}
                      selected={selected}
                    />
                  ))
                }
              </div>
            </div>
            <Switch>
              <Route exact path="/dashboard" />
              <Route exact path="/hamburger" />
              <Route exact path="/profile" />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
