import { combineReducers, createStore } from "redux";
import formReducer from "./reducers/formReducer";

const rootReducer = combineReducers({
  forms: formReducer,
});

const store = createStore(rootReducer);

export default store;
