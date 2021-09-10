import React from 'react';
import './App.css';
import {CounterSettings} from "./components/counterSettings/CounterSettings";
import {Counter} from "./components/counter/Counter";

export const App = () => {
  return (
    <div className="App">
      <CounterSettings/>
      <Counter/>
    </div>
  );
}


export default App;
