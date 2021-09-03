import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {
  incrementValue,
  maxValue,
  resetCounter,
  setButton,
  startValue,
} from "./redux/CountReducer";
import {Counter} from "./counter/Counter";
import {Settings} from "./settings/Settings";


function App() {

  const dispatch = useDispatch()
  const changeHandlerStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    const currentTarget = e.currentTarget.valueAsNumber;
      dispatch(startValue(currentTarget))
  }
  const changeHandlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    const currentTarget = e.currentTarget.valueAsNumber;
    dispatch((maxValue(currentTarget)))
  }
  const setNewCounterValue = () => {
    dispatch(setButton())
  }
  const setResetValue = () => {
    dispatch(resetCounter())
  }
  const incCounterValue = () => {
    dispatch(incrementValue())
  }

  return (
    <div className={'App'}>
      <Settings
        changeHandlerStartValue={changeHandlerStartValue}
        changeHandlerMaxValue={changeHandlerMaxValue}
        setNewCounterValue={setNewCounterValue}
      />
      <Counter
        setResetValue={setResetValue}
        incCounterValue={incCounterValue}
      />
    </div>
  )
}

export default App

