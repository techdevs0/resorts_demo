import { ActionTypes } from "../constants/action-types";

export const setPages = (pages) => {
  return {
    type: ActionTypes.SET_PAGES,
    payload: pages,
  };
};
