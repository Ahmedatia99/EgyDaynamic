import React from "react";

export default function Footer() {
  return (
    <footer className="bg-esclipe text-center text-dark">
      <div className="container px-6 pt-6 mx-auto ">
        <form className="flex justify-between items-center flex-wrap">
          <div>
            <div className="flex items-center justify-center mr-5 mobile:mb-5 desktop:mb-0">
              <svg
                className="tablet:w-8 tablet:h-8 mobile:w-6 mobile:h-6 text-morning  "
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44 24V9H24H4V24V39H24"
                  stroke="#005900cf"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M44 34L30 34"
                  stroke="#005900cf"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M39 29L44 34L39 39"
                  stroke="#005900cf"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 9L24 24L44 9"
                  stroke="#005900cf"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className=" text-dark flex flex-col justify-center items-start ml-2  font-bold tablet:text-sm mobile:text-xs">
                subscribe to the mailing service
                <span className="text-xs font-light">
                  {" "}
                  Join now and get 10% discount on our purchases!
                </span>
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-wrap">
            <div className="relative md:mb-6 flex flex-col justify-center items-start ">
              <span className="text-xs font-semibold mb-2">
                You can unsubscribe at moment
              </span>
              <input
                type="email"
                className="bg-white block min-h-[auto] desktop:w-96 mobile:w-full rounded border-0  px-3 py-2 text-dark outline-none placegolder:text-white "
                placeholder="Email address"
              />
            </div>

            <div className="ml-4">
              <button
                type="submit"
                className=" text-sm desktop:px-6 desktop:py-3  mobile:px-3 mobile:py-2 bg-[#005900cf] text-white rounded-lg shadow-lg mobile:my-5 desktop:my-0"
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-5 text-left">
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold capitalize text-lg">
              About EgyDynamic
            </h5>

            <ul className="mb-0 list-none">
              <li className="text-left text-xs">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                veniam consequuntur praesentium!
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">important Links!</h5>

            <ul className="mb-0 list-none">
              <li>
                <a href="#!" className="text-xs">
                  How are WE?!
                </a>
              </li>
              <li>
                <a href="#!" className="text-xs">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#!" className="text-xs">
                  Terms and conditions
                </a>
              </li>
              <li>
                <a href="#!" className="text-xs">
                  Technical Support
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Contact with us</h5>

            <ul className="mb-0 list-none">
              <li>
                <a href="#!" className="text-xs">
                  WhatsApp: 13456487
                </a>
              </li>
              <li>
                <a href="#!" className="text-xs">
                  Mobile: 1321546
                </a>
              </li>
              <li>
                <a href="#!" className="text-xs">
                  Address: NasrCity - Cairo - Egypt
                </a>
              </li>
              <li>
                <a href="#!" className="text-xs">
                  Mail: email@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" relative p-4 text-center bg-dark text-white text-sm">
        Copyright © 2023 EgyDynamic
        <div className="flex justify-center items-center w-8 h-8 bg-morning absolute bottom-0 right-0 mb-2 mr-5 rounded-full">
          <a href="#home" className="flex justify-center items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-5 h-5 ml-2 bi bi-arrow-up hover:text-white"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                fillRule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
              />{" "}
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
