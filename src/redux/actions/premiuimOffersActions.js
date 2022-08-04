import { ActionTypes } from "../constants/action-types";

export const setPremuiumOffers = (sections) => {
    return {
        type: ActionTypes.SET_PREMIUIM_OFFERS,
        payload: sections,
    };
};
