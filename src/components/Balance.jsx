import React from "react";

export default function Balance() {
  return (
    <div className="flex justify-around w-full text-4xl ">
      <h1 className="border-b-4 font-bold text-orange-700 border-double border-gray-500 ">
        Your Balance
      </h1>
      <p className="font-serif border-4 border-double border-orange-300 px-8 rounded-full ">
        $500
      </p>
    </div>
  );
}
