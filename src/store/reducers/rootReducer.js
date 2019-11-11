import { combineReducers } from "redux";
import all from "./userReducer";

const rootReducer = combineReducers({
  User: all
});

export default rootReducer;
