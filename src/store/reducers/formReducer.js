import { UPDATE_NAME, CLEAR_NAME } from "../types";

const defaultState = {
  name: "",
};

const form = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.name,
      };
    case CLEAR_NAME:
      return {
        ...state,
        name: "",
      };
    default:
      return state;
  }
};

export default form;
