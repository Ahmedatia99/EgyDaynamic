import React from "react";
import { useState, useEffect } from "react";
let timer;
let counter = 0;
export default function Customer() {
  const [counterState, setCounter] = React.useState(0);
  React.useEffect(() => {
    clearInterval(timer);
    timer = setInterval(() => {
      if (counterState === 1590) {
        clearInterval(timer);
        return;
      }
      setCounter((prev) => prev + 1);
      counter++;
    }, 1);

    return () => clearInterval(timer);
  }, [counterState]);

  return (
    <div className=" text-dark p-2 border-gray-300 border-solid border-2 flex justify-center items-center tablet:max-w-xs mobile:w-60 mx-auto my-10 font-bold text-2xl">
      {counterState}+{" "}
      <span className="text-xs pl-3 text-gray-600 font-normal">
        satisfied Customer
      </span>
    </div>
  );
}
