import React, { useContext } from "react";
import "./App.css";
import {GlobalContextProvider} from "./context/GlobalContext"
// Importing components
import Title from './components/Title';
import Balance from "./components/Balance"
import IncomeExpense from './components/IncomeExpense';
import TransactionHistory from './components/TransactionHistory';
import AddTransaction from './components/AddTransaction';

function App() {
  return (
    <GlobalContextProvider>
      <div className="container grid lg:grid-cols-2 gap-5 mx-auto border border-black">
        
        <div className="col-span-2 border-black border-double border-b-4 mx-auto mt-5">
         <Title></Title>
        </div>
        
        <div className="col-span-2 lg:col-span-1  flex justify-center items-center flex-col">
            <Balance></Balance>
            <IncomeExpense></IncomeExpense>
            <AddTransaction></AddTransaction>
        </div>
        
        <div className="col-span-2 lg:col-span-1 border-red-500 border-4 flex justify-center items-center flex-col">

            <TransactionHistory></TransactionHistory>
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
