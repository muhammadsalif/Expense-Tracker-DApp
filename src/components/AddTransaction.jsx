import React from "react";

export default function AddTransaction() {
  return (
    <>
      <h1 className="pl-4 text-2xl w-full border-b-4 border-double border-gray-500 pb-1 font-bold text-2xl">
        Add New Transaction
      </h1>
      <form className="px-2 w-full">
        {/* First Group */}
        <div>
          <label className="ml-2 text-2xl" htmlFor="description">
            Enter Description
          </label>
          <input
            name="description"
            type="text"
            required
            className="rounded w-full px-3 py-2 border border-gray-500 placeholder-gray-500 text-black-500"
            placeholder="Enter Description"
          />
        </div>
        {/* Second Group */}
        <div className="mt-2">
          <label className="ml-2 text-2xl" htmlFor="amount">
            Enter Amount
          </label>
          <input
            name="amount"
            type="text"
            required
            className="rounded w-full px-3 py-2 border border-gray-500 placeholder-gray-500 text-black-500"
            placeholder="Enter Amount"
          />
        </div>
        <button
          type="submit"
          className="text-xl my-2 bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded"
        >
          Add Transaction
        </button>
      </form>
    </>
  );
}
