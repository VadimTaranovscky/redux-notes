import { combineReducers } from "redux";
import { alertReducer } from "./Alert/alertReducer";
import { firebaseReducer } from "./Firebase/firebaseReducer";

export const rootReducer = combineReducers({
  alert: alertReducer,
  firebase: firebaseReducer,
});
