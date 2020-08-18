import React from "react";
import { connect } from "react-redux";
import {
  clearNameAction,
  updateNameAction,
  addSurnameAction,
} from "../../store/actions";

// <input type="text" name="name" value="" onChange={doAction()}>

// Store -> object made up of reducers
// Reducer is an object
// Actions
// Types

const SignIn = ({ name, updateName, clearName, addSurname }) => {
  return (
    <div className="container">
      <h2>Your name is: {name}</h2>
      <input
        type="text"
        value={name || ""}
        onChange={(text) => updateName(name + text.nativeEvent.data)}
      />
      <button onClick={clearName}>Clear name</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.forms.name,
});

const mapDispatchToProps = (dispatch) => ({
  updateName: (name) => dispatch(updateNameAction(name)),
  clearName: () => dispatch(clearNameAction()),
  addSurname: (surname) => dispatch(addSurnameAction(surname)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

// create a type +
// create an action +
// create switch case +
// import action/s +
// declare in mapdispatchtoprops +
// call in props +
// use it
