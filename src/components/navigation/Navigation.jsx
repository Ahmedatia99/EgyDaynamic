import React from "react";
import { useState } from "react";
import "./nav.css";
import Landing from "./Landing";

export default function Navigation() {
  const [navbar, setNavbar] = useState(false);

  return (
    <main className=" back relative h-screen">
      <nav
        className={`w-full  text-white  mx-auto py-5 z-10 sticky top-0  ${
          navbar
            ? "bg-dark text-white border-t-2 border-morning "
            : "bg-[#09124240] "
        }`}
      >
        <div className=" container mx-auto px-5 desktop:flex tablet:flex  desktop:items-center desktop:justify-between tablet:justify-between">
          <div>
            <div className="flex items-center justify-between md:flex">
              <div className="flex justify-center items-center rounded-md ">
                <a
                  className=" text-white mr-5"
                  href="https://www.linkedin.com/in/ahmed-atia-b60458206/"
                  target="blank"
                >
                  <img className=" w-5 h-5 " src="./images/linkedin.svg" />
                </a>{" "}
                <a
                  href="https://twitter.com/ahmedatiaa99"
                  className="mr-6 text-caption "
                  target="blank"
                >
                  <img
                    className="w-5 h-5  "
                    src="./images/freelancer-icon.jpg"
                  />
                </a>
                <a
                  href="https://www.instagram.com/ahmedatiaa99/"
                  className="mr-6 text-caption"
                  target="blank"
                >
                  <img className="" src="./images/InstagramLogo.svg" />
                </a>
              </div>
              <div className="md:hidden">
                <button
                  className="p-2 text-light rounded outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block " : "hidden"
              }`}
            >
              <div className="flex justify-between items-center">
                <ul className="flex tablet:flex-row mobile:flex-col items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-light hover:drop-shadow-xl">
                    <a href="">Home</a>
                  </li>
                  <li className=" hover:drop-shadow-xl">
                    <a href="" className="">
                      About
                    </a>
                  </li>
                  <li className=" hover:drop-shadow-xl ">
                    <a href="">Activities</a>
                  </li>
                  <li className=" hover:drop-shadow-xl ">
                    <a href="">Contact-Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Landing />
    </main>
  );
}
