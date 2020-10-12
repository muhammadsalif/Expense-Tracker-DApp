import React from "react";

export default function TransactionHistory() {
  return (
    <>
      <h1 className="border-b-4 font-bold text-orange-700 border-double border-gray-500 text-4xl">
        Transactions History
      </h1>
      <ul className="flex justify-between items-center flex-col">
        <li className="flex items-center justify-around w-3/4 mx-auto bg-yellow-200 py-3 border-double border-4 border-green-700 my-2">
          <h1 className="text-3xl text-green-700 font-bold">Salary</h1>
          <p className="text-3xl font-serif text-green-700 font-bold border-green-500 border-4 rounded-full px-6">
            $500
          </p>
          <button className="border-black border-double border-4 px-6 text-2xl bg-orange-200 hover:bg-orange-400 text-gray-900 font-bold rounded">
            X
          </button>
        </li>
        <li className="flex items-center justify-around w-3/4 mx-auto bg-yellow-200 py-3 border-double border-4 border-red-700 my-2">
          <h1 className="text-3xl text-red-700 font-bold">Rent</h1>
          <p className="text-3xl font-serif text-red-700 font-bold border-red-500 border-4 rounded-full px-6">
            $200
          </p>
          <button className="border-red-700 border-double border-4 px-6 text-2xl bg-orange-200 hover:bg-red-100 text-gray-900 font-bold rounded">
            X
          </button>
        </li>

        <li className="flex items-center justify-around w-3/4 mx-auto bg-yellow-200 py-3 border-double border-4 border-red-700 my-2">
          <h1 className="text-3xl text-red-700 font-bold">Movie</h1>
          <p className="text-3xl font-serif text-red-700 font-bold border-red-500 border-4 rounded-full px-6">
            $50
          </p>
          <button className="border-red-700 border-double border-4 px-6 text-2xl bg-orange-200 hover:bg-red-100 text-gray-900 font-bold rounded">
            X
          </button>
        </li>
      </ul>
    </>
  );
}
