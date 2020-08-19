import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import "./Assets/css/app.css";
import { BrowserRouter } from "react-router-dom";
import { firebase } from "./firebase";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./Components/Store/reducer";

const store = createStore(reducer);

const App = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes {...props} />
      </BrowserRouter>
    </Provider>
  );
};

firebase.auth().onAuthStateChanged((user) => {
  // console.log(user);

  ReactDOM.render(
    <React.StrictMode>
      <App user={user} />
    </React.StrictMode>,
    document.getElementById("root")
  );
});
