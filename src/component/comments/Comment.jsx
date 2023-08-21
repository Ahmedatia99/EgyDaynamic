import React from "react";
import "./back.css";
import localdata from "./data.json";
export default function Comment() {
  return (
    <main className="back w-full relative py-40" id="parent">
      <h1 className="text-center text-white relative font-bold text-4xl mb-20">
        Comments
      </h1>
      <div className=" w-full flex justify-center items-center">
        {localdata.map((obj) => {
          return (
            <div
              key={obj.id}
              className=" relative mr-5  max-w-xs border border-solid border-main rounded-lg bg-white"
            >
              <img
                src={obj.imageUrl}
                alt={obj.name}
                className="absolute -top-2  -left-2 w-16 h-16 rounded-full "
              />
              <div className="w-full text-white bg-main py-3 rounded-md rounded-b-none text-center">
                <h2>{obj.name}</h2>
              </div>
              <p className="p-5">{obj.description}</p>
            </div>
          );
        })}
      </div>
      <div className=" container mr-10 mt-20 flex justify-end relative">
        <button className="flex justify-center items-center border border-solid border-main rounded-md px-2 py-1 bg-main text-white transition-all hover:translate-x-3 ">
          Learn More
          <svg
            size={30}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right ml-1"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />{" "}
          </svg>
        </button>
      </div>
    </main>
  );
}
