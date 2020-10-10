import React from "react";

export default function IncomeExpense() {
  return (
    <div className="flex justify-around border-4 border-red-500 items-center w-full flex-col lg:flex-row py-5">
      {/*Income div  */}
      <div className="flex flex-row px-8 bg-teal-200 py-5 lg:mb-0 border-double border-4 border-green-700 my-2 lg:my-0">
        <h1 className="text-4xl">Income</h1>
        <p className="text-green-700 text-4xl font-serif rounded-full px-5 border border-current">
          $500
        </p>
      </div>
      {/*Income div  */}
      <div className="flex flex-row px-8 bg-red-200 py-5 border-double border-4 border-red-700">
        <h1 className="text-4xl">Expense</h1>
        <p className="text-red-700 text-4xl font-serif">$400</p>
      </div>
    </div>
  );
}
