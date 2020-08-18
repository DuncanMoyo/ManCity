import { UPDATE_NAME, CLEAR_NAME, ADD_SURNAME } from "../types";

const defaultState = {
  name: "Zimkitha",
  surname: "",
  employement: "",
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
    case ADD_SURNAME:
      return {
        ...state,
        surname: action.surname,
      };
    default:
      return state;
  }
};

export default form;
