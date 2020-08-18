import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./store";
import "./Assets/css/app.css";
import { BrowserRouter } from "react-router-dom";
import { firebase } from "./firebase";

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
