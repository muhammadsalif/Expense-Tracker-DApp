import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function Balance() {
  let { initialTransaction } = useContext(GlobalContext);

  // Using reduce function to iterate on array and getting a sum
  let bal = initialTransaction.reduce((initialVal, currentVal) => {
    return initialVal + currentVal.transAmount;
  }, 0);

  return (
    <div className="flex justify-around items-center w-full text-4xl border-b-4  border-double border-gray-500 pb-2">
      <h1 className="font-bold text-orange-700 ">Your Balance</h1>
      <p className="font-serif border-4 border-double border-orange-300 px-8 rounded-full ">
        ${bal}
      </p>
    </div>
  );
}
