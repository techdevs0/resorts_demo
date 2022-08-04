import { combineReducers } from "redux";
import { pagesReducer } from "./pagesReducer";
import { premuiumOffersReducer } from "./premiuimOffersReducer";

const reducers = combineReducers({
  allPages: pagesReducer,
  allPremiuimOffers: premuiumOffersReducer
});
export default reducers;
