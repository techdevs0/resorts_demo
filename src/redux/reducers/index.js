import { combineReducers } from "redux";
import { pagesReducer } from "./pagesReducer";
const reducers = combineReducers({
  allPages: pagesReducer
});
export default reducers;
