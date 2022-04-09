import { combineReducers } from "redux";
import CommonReducer from "./common";

const rootReducer = combineReducers({
  common: CommonReducer,
});

export default rootReducer;
