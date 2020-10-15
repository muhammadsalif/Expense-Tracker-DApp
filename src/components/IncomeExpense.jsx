import React, { useContext } from "react";
import { GlobalContext } from "./../context/GlobalContext";

export default function IncomeExpense() {
  let { initialTransaction } = useContext(GlobalContext);

  // Income logic and algo's
  //Filtering positive value from the array to find the income
  let income = initialTransaction.filter((val) => {
    return val.transAmount > 0;
  });

  // Finding sum of the income array
  let sumOfIncome = income.reduce((initialVal, currentVal) => {
    return initialVal + currentVal.transAmount;
  }, 0);

  // Expense logic and algo's
  //Filtering negative value from the array to find the expense
  let expense = initialTransaction.filter((val) => {
    return val.transAmount < 0;
  });

  // Finding sum of the expense array
  let sumOfExpense = expense.reduce((initialVal, currentVal) => {
    return initialVal + currentVal.transAmount;
  }, 0);

  return (
    <div className="flex justify-around items-center w-full flex-col lg:flex-row  lg:my-5 lg:py-5">
      {/*Income div  */}
      <div className="flex items-center justify-between bg-green-300 lg:mb-0 border-double border-4 border-green-700 my-2 lg:my-0 px-5 py-3">
        <h1 className="text-4xl">Income</h1>
        <p className="text-4xl font-serif text-gray-800 font-bold mx-2">
          ${sumOfIncome}
        </p>
      </div>

      {/*Expense div  */}
      <div className="flex items-center justify-between  bg-red-300 lg:mb-0 border-double border-4 border-red-700 my-2 lg:my-0 px-5 py-3">
        <h1 className="text-4xl">Expense</h1>
        <p className="text-4xl font-serif text-gray-800 font-bold mx-2">
          ${sumOfExpense}
        </p>
      </div>
    </div>
  );
}
