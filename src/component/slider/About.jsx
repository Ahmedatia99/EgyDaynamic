import React, { useState } from "react";

export default function About() {
  const slides = [
    {
      src: "./images/carousel/homepage-hero-kids.jpg",
    },
    {
      src: "./images/carousel/homepage-hero-parents.jpg",
    },
    {
      src: "./images/carousel/homepage-hero-promo.jpg",
    },

    {
      src: "./images/carousel/parents.jpeg",
    },
    {
      src: "./images/carousel/selfdev.jpeg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full h-[500px] m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].src})` }}
        className="w-full h-full  bg-center bg-cover duration-500"
      >
      </div>
      {/* Left Arrow */}
      <div className=" hidden group-hover:block absolute top-[50%]  left-5 text-2xl rounded-full p-2 bg-main text-white cursor-pointer">
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
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%]   translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-main text-white cursor-pointer">
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
      </div>
      <div>
        <div className="flex flex-col items-center ml-24 max-w-sm border-2 border-solid border-white rounded-xl px-4 py-5 bg-main text-white absolute top-2/4 ">
          <h2 className="text-center text-2xl font-bold">About Us</h2>
          <p className="text-md capitalize mb-5">
            training Children to Enhance and Develop comunication Skills,
            Attention, and Foucs.
          </p>
          <button className="flex justify-center items-center border border-solid border-white rounded-md px-2 py-1 bg-white text-main transition-all hover:translate-x-3  ">
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
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          ></div>
        ))}
      </div>
    </div>
  );
}
