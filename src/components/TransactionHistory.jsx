import React, { useContext } from "react";
import { GlobalContext } from "./../context/GlobalContext";
export default function TransactionHistory() {
  let initialTransaction = useContext(GlobalContext);

  return (
    <>
      <h1 className="border-b-4 font-bold text-orange-700 border-double border-gray-500 text-4xl">
        Transactions History
      </h1>
      <ul className="flex justify-between items-center flex-col">
        {initialTransaction.map((trans, ind) => {
          return (
            <li
              key={ind}
              className="flex items-center justify-around w-full lg:w-3/4 mx-auto bg-yellow-200 py-3 border-double border-4 border-green-700 my-2"
            >
              <h1 className="text-3xl text-green-700 font-bold">
                {trans.transDescription}
              </h1>
              <p className="text-3xl font-serif text-green-700 font-bold border-green-500 border-4 rounded-full px-6">
                {trans.transAmount}
              </p>
              <button className="border-black border-double border-4 px-6 text-2xl bg-orange-200 hover:bg-orange-400 text-gray-900 font-bold rounded">
                X
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
