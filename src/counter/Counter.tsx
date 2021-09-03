import React from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/store";


type CounterType = {
  setResetValue: () => void
  incCounterValue: () => void
}

export const Counter = (props: CounterType) => {
  let counter = useSelector<AppStateType, number>(state => state.counter.value)
  let startValueCount = useSelector<AppStateType, number>(state => state.counter.startValue)
  let maxValueCount = useSelector<AppStateType, number>(state => state.counter.maxValue)
  let disableForIncrementButton = useSelector<AppStateType, boolean>(state => state.counter.incDisable)
  let disableForResetButton = useSelector<AppStateType, boolean>(state => state.counter.resDisable)
  let enterNewValue = useSelector<AppStateType, string>(state => state.counter.enterValue) // Как вывести значение "enter new value and pres 'set'" вместо счетчика
  const currentValue = startValueCount === maxValueCount || maxValueCount < startValueCount ?
    <div>Incorrect value</div> : counter
  const classes = counter >= 0 ? true : undefined
  const classesRes = classes ? 'button-res' : 'button-res'
  const disabledForIncBtn = counter === maxValueCount
    ? true
    : disableForIncrementButton
  const classForCurrentValue = counter == maxValueCount ? 'red' : ''

  return (
    <div className={'wrapper-counter'}>

      <div className={'counter'}>
        <div className={classForCurrentValue}>
          <h1>{currentValue}</h1>
        </div>
      </div>

      <div className={'wrapper-inc-res'}>
        <div className={'wrap-button-inc'}>
          <button
            className={'button-inc'}
            onClick={props.incCounterValue}
            disabled={disabledForIncBtn}>INC
          </button>
        </div>

        <div className={'wrap-button-res'}>
          <button
            className={classesRes}
            onClick={props.setResetValue}
            disabled={disableForResetButton}>RES
          </button>
        </div>
      </div>
    </div>
  )
}