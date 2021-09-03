import {applyMiddleware, combineReducers, createStore} from "redux";
import {countReducer} from "./CountReducer";
import thunk from 'redux-thunk'
import {loadState, saveState} from "../utils/localstorage-utils";

const rootReducer = combineReducers({
  counter: countReducer,
})
export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
  saveState(
    {
    counter: store.getState().counter,
  })
})
export type AppStateType = ReturnType<typeof rootReducer>
//@ts-ignore
window.store = store


