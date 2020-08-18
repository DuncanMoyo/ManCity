import { UPDATE_NAME, CLEAR_NAME } from "../types";

export const updateNameAction = (name) => ({
  type: UPDATE_NAME,
  name,
});

export const clearNameAction = () => ({
  type: CLEAR_NAME,
});
