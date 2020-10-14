import React, { createContext } from "react";

export const GlobalContext = createContext([]);

let initialTransaction = [
  { transDescription: "Salary", transAmount: 500 },
  { transDescription: "abc", transAmount: 500 },
  { transDescription: "movie", transAmount: -50 },
];

export const GlobalContextProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={initialTransaction}>
      {children}
    </GlobalContext.Provider>
  );
};
