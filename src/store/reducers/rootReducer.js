import userReducer from "./userReducer";
import { combineReducers } from "redux";
import users from "./userReducer";

const rootReducer = combineReducers({
  users: userReducer
});

export default rootReducer;
