import { combineReducers } from "redux";
import all from "./userReducer";
import reviews from "./reviewReducer";


const rootReducer = combineReducers({
  User: all,
  Review: reviews
});

export default rootReducer;
