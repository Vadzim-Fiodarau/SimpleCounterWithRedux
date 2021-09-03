// ACTION_TYPE
const INCREMENT_VALUE = 'INCREMENT-VALUE'
const RESET_COUNT = 'RESET-COUNT'
const START_VALUE = 'START-VALUE'
const MAX_VALUE = 'MAX-VALUE'
const SET_BUTTON = 'SET-BUTTON'
const INCREMENT_BUTTON = 'INCREMENT-BUTTON'
const SET_VALUE_FROM_LOCAL_STORAGE = 'SET-VALUE-FROM-LOCAL-STORAGE'
const SET_START_VALUE_FROM_LOCAL_STORAGE = 'SET_START_VALUE_FROM_LOCAL_STORAGE'
const SET_MAX_VALUE_FROM_LOCAL_STORAGE = 'SET_MAX_VALUE_FROM_LOCAL_STORAGE'
const ENTER_VALUE = 'ENTER_VALUE'


//ACTION_CREATE
export type incrementCounterType = ReturnType<typeof incrementValue>
export const incrementValue = () => {
  return {
    type: INCREMENT_VALUE
  } as const
}
export type resetCounterType = ReturnType<typeof resetCounter>
export const resetCounter = () => {
  return {
    type: RESET_COUNT
  } as const
}
export type setValueFromLocalStorageType = ReturnType<typeof setValueFromLocalStorage>
export const setValueFromLocalStorage = (value: number) => {
  return {
    type: SET_VALUE_FROM_LOCAL_STORAGE,
    value
  } as const
}
export type setStartValueFromLocalStorageType = ReturnType<typeof setStartValueFromLocalStorage>
export const setStartValueFromLocalStorage = (value: number) => {
  return {
    type: SET_START_VALUE_FROM_LOCAL_STORAGE,
    value
  } as const
}
export type setMaxValueFromLocalStorageType = ReturnType<typeof setMaxValueFromLocalStorage>
export const setMaxValueFromLocalStorage = (value: number) => {
  return {
    type: SET_MAX_VALUE_FROM_LOCAL_STORAGE,
    value
  } as const
}
export type maxValueType = ReturnType<typeof maxValue>
export const maxValue = (value: number) => {
  return {
    type: MAX_VALUE,
    value
  } as const
}
export type startValueType = ReturnType<typeof startValue>
export const startValue = (value: number) => {
  return {
    type: START_VALUE,
    value
  } as const
}
export type setButtonType = ReturnType<typeof setButton>
export const setButton = () => {
  return {
    type: SET_BUTTON,
  } as const
}

export type setIncrementButtonType = ReturnType<typeof setIncrementButton>
export const setIncrementButton = () => {
  return {
    type: INCREMENT_BUTTON,
  } as const
}
export type enterValueType = ReturnType<typeof enterValue>
export const enterValue = (value: string) => {
  return {
    type: ENTER_VALUE,
    value
  } as const
}

export type initialStateType = typeof initialState
let initialState = {
  value: 0,
  startValue: 0,
  maxValue: 1,
  enterValue: '',
  incDisable: false,
  resDisable: false,
  setDisable: false,
}

// ACTION_TYPES
export type ActionTypes =
  incrementCounterType
  | resetCounterType
  | startValueType
  | maxValueType
  | setButtonType
  | setValueFromLocalStorageType
  | setIncrementButtonType
  | setStartValueFromLocalStorageType
  | setMaxValueFromLocalStorageType
  | enterValueType

export const countReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
  switch (action.type) {
    case INCREMENT_VALUE: {
      return {
        ...state,
        value: state.value + 1
      }
    }
    case RESET_COUNT: {
      return {
        ...state, value: state.value = state.startValue
      }
    }
    case SET_VALUE_FROM_LOCAL_STORAGE: {
      return {
        ...state, value: action.value
      }
    }
    case SET_START_VALUE_FROM_LOCAL_STORAGE: {
      return {
        ...state, value: action.value
      }
    }
    case SET_MAX_VALUE_FROM_LOCAL_STORAGE: {
      return {
        ...state, value: action.value
      }
    }
    case MAX_VALUE: {
      return {
        ...state,
        maxValue: action.value,
        setDisable: false,
        incDisable: true,
        resDisable: true,
      }
    }
    case START_VALUE: {
      return {
        ...state,
        startValue: action.value,
        setDisable: false,
        incDisable: true,
        resDisable: true,
      }
    }
    case SET_BUTTON: {
      return {
        ...state,
        value: state.startValue,
        setDisable: true,
        incDisable: false,
        resDisable: false
      }
    }
    case INCREMENT_BUTTON: {
      return {
        ...state,
        setDisable: true,
        incDisable: false,
        resDisable: false
      }
    }
    case ENTER_VALUE: {
      return {
        ...state,
        enterValue: action.value,
      }
    }
    default:
      return state
  }
}

//THUNK

// export const incrementValueTC = () => (dispatch: Dispatch, getState: () => AppStateType) => {
//   let currentValue = getState().counter.value
//   localStorage.setItem('currentValue', JSON.stringify(currentValue + 1))
//   dispatch(incrementValue())
// }
// export const currentStartValueTC = () => (dispatch: Dispatch, getState: () => AppStateType) => {
//   let currenStartValue = getState().counter.startValue
//   localStorage.setItem('currentStartValue', JSON.stringify(currenStartValue))
//   dispatch(startValue(currenStartValue))
// }
// export const currentMaxValueTC = () => (dispatch: Dispatch, getState: () => AppStateType) => {
//   let currentMaxValue = getState().counter.maxValue
//   localStorage.setItem('currentMaxValue', JSON.stringify(currentMaxValue))
//   dispatch(maxValue(currentMaxValue))
// }


// export const setValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
//   let valueAsString = localStorage.getItem('currentValue')
//
//   if (valueAsString) {
//     let newValue = JSON.parse(valueAsString)
//     dispatch(setValueFromLocalStorage(newValue))
//   }
// }
//
// export const setStartValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
//   let startValueAsString = localStorage.getItem('currentStartValue')
//
//   if (startValueAsString) {
//     let newValue = JSON.parse(startValueAsString)
//     dispatch(setValueFromLocalStorage(newValue))
//   }
// }
// export const setMaxValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
//
//   let maxValueAsString = localStorage.getItem('currentMaxValue')
//
//   if (maxValueAsString) {
//     let newValue = JSON.parse(maxValueAsString)
//     dispatch(setValueFromLocalStorage(newValue))
//   }
// }

