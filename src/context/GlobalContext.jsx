import React, { createContext } from "react";

export const GlobalContext = createContext("Default");

let initialTransaction = [
  { transDescription: "Salary", transAmount: 500 },
  { transDescription: "rent", transAmount: -200 },
  { transDescription: "movie", transAmount: -50 },
];

export const GlobalContextProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={initialTransaction}>
      {children}
    </GlobalContext.Provider>
  );
};
