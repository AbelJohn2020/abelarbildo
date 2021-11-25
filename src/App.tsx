import React from 'react';
import Icons from './components/Icons/Icons';
import User from './components/User/User';

function App() {
  return (
    <div className="App">
      App
      <User />
      <Icons type="dashBoard" color="red" size="16px"/>
    </div>
  );
}

export default App;
