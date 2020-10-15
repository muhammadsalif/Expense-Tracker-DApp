import React, { createContext, useReducer } from "react";
import { GlobalReducer } from "./../reducer/GlobalReducer";
export const GlobalContext = createContext([]);

let initialTransaction = [
  // { transDescription: "Salary", transAmount: 500 },
  // { transDescription: "abc", transAmount: 500 },
  // { transDescription: "movie", transAmount: -50 },
];

export const GlobalContextProvider = ({ children }) => {
  let [state, dispatch] = useReducer(GlobalReducer, initialTransaction);

  return (
    <GlobalContext.Provider value={{ initialTransaction: state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
