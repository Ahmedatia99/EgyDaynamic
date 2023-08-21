import React, { useState } from "react";
import localdata from "./feature.json";

export default function Service() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? localdata.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === localdata.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <main className="bg-[#EEEAE7] py-20" id="service">
      <section className="capitalize flex justify-center flex-col items-center">
        <h2 className="text-main text-2xl font-bold">ERTQA</h2>
        <p className="text-md">
          ERTQA company for training and human development
        </p>
        <h2 className="text-main">service</h2>
      </section>
      <section className=" flex justify-center items-center">
        {localdata.map((obj) => {
          return (
            <div
              key={obj.id}
              className="py-10 px-5 mr-2 mt-10 max-w-xs text-white bg-main capitalize border border-white border-solid rounded-md"
            >
              {obj.name}
            </div>
          );
        })}
        <div>
          {/* <div className="block text-2xl rounded-full p-2 bg-main text-white cursor-pointer">
            <svg
              onClick={prevSlide}
              size={30}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />{" "}
            </svg>
          </div>
          <div className=" text-2xl rounded-full p-2 bg-main text-white cursor-pointer">
            <svg
              onClick={nextSlide}
              size={30}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />{" "}
            </svg>
          </div> */}
        </div>
      </section>
    </main>
  );
}
