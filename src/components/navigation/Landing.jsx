import React from "react";

export default function Landing() {
  return (
    <main className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-white mx-auto pt-20 ">
      <div>
        <h2 className="desktop:text-5xl tablet:text-4xl mobile:text-3xl desktop:w-full mobile:w-80  font-bold mobile:text-center ">
          For Vehicle Engineering <span className="text-[#e0003c]">&</span>{" "}
          Renewable Energy
        </h2>
        <div className="flex justify-center mt-20 ">
          <button className="relative px-10 py-3 bg-morning overflow-hidden rounded-sm circle transition-all">
            <span className="relative z-10 text-sm text-dark font-semibold">
              Explore More
            </span>
            <div className="absolute w-12 h-12 bg-white -right-5 -bottom-5 rounded-full this transition-all"></div>
          </button>
        </div>
      </div>
    </main>
  );
}
