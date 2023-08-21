import React from "react";
import "./overlay.css";

export default function Landing() {
  return (
    <main>
      <section className="">
        {/* <img src="./images/kids/img1.jpg" alt="" className="w-full h-24" /> */}
        <div className="w-full bg-[#EEEAE7] py-40 flex justify-center">
          <div className="flex justify-center items-center container">
            <p className="max-w-lg text-center mr-20 font-semibold">
              We hope to make our children happy , able to describe their
              feelings and control them. We look forward to assisting parents in
              understanding their children's emotions and helping them learn new
              skills to lead a healthy and comfortable life. you can join us
              now, this is our pleasure!
            </p>
            <img
              src="./images/logo/My project.png"
              alt=""
              className=" max-w-xs rote"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
