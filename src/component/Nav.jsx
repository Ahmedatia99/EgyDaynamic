import React from "react";

export default function Nav() {
  return (
    <main className="container m-auto bg-white flex justify-between items-center w-full ">
      <section>
        <div className="flex items-center">
          <img className=" w-16" src="./images/logo/logo.ico" alt="ERTQA" />
          <h2 className="text-main">ERTQA</h2>
        </div>
      </section>
      <section>
        <ul className="flex justify-center items-center">
          <li className="mr-2">
            <a href="#home">Home</a>
          </li>
          <li className="mr-2">
            <a href="#service">service</a>
          </li>
          <li className="mr-2">
            <a href="#parent">For Parents</a>
          </li>
          <li className="mr-2">
            <a href="#contact">contact</a>
          </li>
        </ul>
      </section>
      <section>
        <div className="flex items-center justify-center ">
          <div
            className="flex items-center max-w-md mx-auto bg-white rounded-lg "
            x-data="{ search: '' }"
          >
            <div className="w-full">
              <input
                type="search"
                className="w-full px-4 py-2 text-gray-800 rounded-full rounded-r-none focus:outline-none border border-solid gray  "
                placeholder="search"
                x-model="search"
              />
            </div>
            <div>
              <button
                type="submit"
                className={
                  "flex items-center bg-main justify-center w-12 h-12 text-white rounded-r-lg"
                }
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
