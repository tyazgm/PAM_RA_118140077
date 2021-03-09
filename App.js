import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createStore } from "redux";;
import { Provider } from "react-redux";
import ConvertApp from './ConvertApp.js'

const initialState = {
  inch: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONVERT":
      return { inch: centi * centitoinch };
  }
  return state;
};

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
        <ConvertApp />
    );
  }
}

export default App;
