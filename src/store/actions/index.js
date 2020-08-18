import { UPDATE_NAME, CLEAR_NAME, ADD_SURNAME } from "../types";

export const updateNameAction = (name) => ({
  type: UPDATE_NAME,
  name,
});

export const clearNameAction = () => ({
  type: CLEAR_NAME,
});

export const addSurnameAction = (surname) => ({
  type: ADD_SURNAME,
  surname,
});
