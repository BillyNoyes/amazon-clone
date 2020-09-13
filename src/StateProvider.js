// Setup Data Layer

import React, { createContext, useContext, useReducer } from "react";

// DATA LAYER
export const StateContext = createContext();

// BUILD PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This is how it is used inside of a component
export const useStateValue = () => useContext(StateContext);
