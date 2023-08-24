import React from "react";

export default function Nav() {
  return (
    <main
      className="py-5 bg-dark flex items-center justify-around relative"
      id="home"
    >
      <div className="container flex items-center desktop:justify-between tablet:justify-between mobile:justify-center flex-wrap">
        <div className="flex justify-center items-center mobile:mb-5 ">
          <img
            src="./images/Logo/logo22 (1).png"
            className="desktop:w-full labtop:w-14 mobile:w-10"
          />
          <h1 className="text-white font-bold text-2xl">
            <span className="text-[#e0003c]">E</span>gy
            <span className="text-[#e0003c]">D</span>aynamic
          </h1>
        </div>
        <div className="flex items-center justify-between text-sm font-krub ">
          {/* clock */}
          <div className="desktop:flex tablet:flex mobile:hidden items-center justify-center mr-5 ">
            <svg
              className="tablet:w-10 tablet:h-10 mobile:w-8 mobile:h-8 text-morning bg-[#111C55] tablet:p-3 mobile:p-2 rounded-full border-2 border-[#273270]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="0.7"
                d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className="flex flex-col justify-center items-start ml-2 text-white mobile:text-xs tablet:text-sm">
              mon - sat 9.00 - 18.00
              <span> sunday close</span>
            </p>
          </div>
          {/* emil*/}
          <div className="flex items-center justify-center mr-5">
            <svg
              className="tablet:w-10 tablet:h-10 mobile:w-8 mobile:h-8 text-morning bg-[#111C55] tablet:p-3 mobile:p-2 rounded-full border-2 border-[#273270]"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44 24V9H24H4V24V39H24"
                stroke="#FFBE34"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M44 34L30 34"
                stroke="#FFBE34"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M39 29L44 34L39 39"
                stroke="#FFBE34"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 9L24 24L44 9"
                stroke="#FFBE34"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="flex flex-col justify-center items-start ml-2 text-white font-mono tablet:text-sm mobile:text-xs">
              Email
              <span> Contact@email.com</span>
            </p>
          </div>
          {/* call */}
          <div className="flex items-center justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-phone-call tablet:w-10 tablet:h-10 mobile:w-8 mobile:h-8 text-morning bg-[#111C55] tablet:p-3 mobile:p-2 rounded-full border-2 border-[#273270]"
            >
              <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <p className="flex flex-col justify-center items-start ml-2 text-white font-mono mobile:text-xs tablet:text-sm">
              call us
              <span> +0212345678</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
