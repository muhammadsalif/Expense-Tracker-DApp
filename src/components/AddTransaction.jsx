import React, { useContext, useState } from "react";
import { GlobalContext } from "./../context/GlobalContext";

export default function AddTransaction() {
  let { dispatch } = useContext(GlobalContext);

  let [amount, setAmount] = useState(0);
  let [des, setDescription] = useState("");
  let [id, setId] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    setId(id + 1);
    dispatch({
      type: "ADD_TRANSACTION",
      data: {
        transDescription: des,
        // Changing transamout to number property
        transAmount: +amount,
        transId: id,
      },
    });
    setAmount(0);
    setDescription("");
  }

  return (
    <>
      <h1 className="pl-4 text-2xl w-full border-b-4 border-double border-gray-500 pb-1 font-bold text-2xl">
        Add New Transaction
      </h1>
      <form className="px-2 w-full" onSubmit={handleSubmit}>
        {/* First Group */}
        <div>
          <label className="ml-2 text-2xl" htmlFor="description">
            Enter Description
          </label>
          <input
            name="description"
            type="text"
            required
            className="rounded w-full px-3 py-2 border border-gray-500 placeholder-gray-500 text-black-500 capitalize"
            placeholder={des}
            value={des}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
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
            value={amount}
            placeholder={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="text-xl mt-4 w-full bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 rounded"
        >
          Add Transaction
        </button>
      </form>
    </>
  );
}
