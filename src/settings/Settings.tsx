import React, {ChangeEvent} from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/store";

type SettingsType = {
  changeHandlerStartValue: (e: ChangeEvent<HTMLInputElement>) => void
  changeHandlerMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
  setNewCounterValue: () => void
}

export const Settings = (props: SettingsType) => {

  let disableForSetButton = useSelector<AppStateType, boolean>(state => state.counter.setDisable)
  let startValueCount = useSelector<AppStateType, number>(state => state.counter.startValue)
  let maxValueCount = useSelector<AppStateType, number>(state => state.counter.maxValue)
  const incorrectInput = maxValueCount <= startValueCount ? 'inputError' : ''
  const classForMaxValueInput = maxValueCount < 0 || incorrectInput ? 'inputError' : 'border'
  const classForStartValueInput  = startValueCount < 0 || incorrectInput ? 'inputError' : 'border'
  const disabledForSetBtn = startValueCount === maxValueCount || maxValueCount < startValueCount
    ? true
    : disableForSetButton

  return (
    <div className={'set-wrapper-counter'}>
      <div className={'set-counter'}>
        <div className={'set-input'}>
          <h3>
            max value :
            <input
              type={"number"}
                   onChange={props.changeHandlerMaxValue}
                   value={maxValueCount}
                   className={classForMaxValueInput}/>
          </h3>

          <h3>start value :
            <input type={"number"}
                   onChange={props.changeHandlerStartValue}
                   value={startValueCount}
                   className={classForStartValueInput}/>
          </h3>
        </div>
      </div>

      <div className={'set-wrapper'}>
        <div className={'wrap-button-set'}>
          <button
            className={'button-set'}
            onClick={props.setNewCounterValue}
            disabled={disabledForSetBtn}>SET
          </button>
        </div>
      </div>
    </div>
  )
}