import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { Input } from './components/Input/Input';
import { colors } from './components/UI/colors';

function App() {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <div className='App__right'>
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
            <Switch>
              <Route exact path="/dashboard" />
              <Route exact path="/hamburger" />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
