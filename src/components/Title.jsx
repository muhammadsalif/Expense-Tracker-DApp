import React from "react";

export default function Title() {
  return (
    <div>
      <h1 className="font-mono text-4xl lg:text-5xl font-bold text-center text-current">
        Expense Tracker App{" "}
        <span role="img" aria-label="rocket">
          {" "}
          🚀
        </span>
      </h1>
    </div>
  );
}
