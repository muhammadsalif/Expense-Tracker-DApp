import React from "react";

export default function IncomeExpense() {
  return (
    <div className="flex justify-around items-center w-full flex-col lg:flex-row  lg:my-5 lg:py-5">
      {/*Income div  */}
      <div className="flex items-center justify-between bg-green-300 lg:mb-0 border-double border-4 border-green-700 my-2 lg:my-0 px-5 py-3">
        <h1 className="text-4xl">Income</h1>
        <p className="text-4xl font-serif text-gray-800 font-bold mx-2">$500</p>
      </div>

      {/*Expense div  */}
      <div className="flex items-center justify-between  bg-red-300 lg:mb-0 border-double border-4 border-red-700 my-2 lg:my-0 px-5 py-3">
        <h1 className="text-4xl">Expense</h1>
        <p className="text-4xl font-serif text-gray-800 font-bold mx-2">$500</p>
      </div>
    </div>
  );
}
