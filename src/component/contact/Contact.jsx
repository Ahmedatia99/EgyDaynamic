import React from "react";

export default function Contact() {
  return (
    <main className="flex justify-center py-20 " id="contact">
      <section className="flex flex-col justify-center w-96 p-10 rounded-lg bg-main text-white mr-20">
        <div className="flex flex-col mb-5">
          <label className="text-sm">Name:</label>
          <input
            className="border-none text-main  outline-none rounded-md placeholder:text-sm placeholder:pl-2"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-sm">Email:</label>
          <input
            className="border-none text-main outline-none rounded-md placeholder:text-sm placeholder:pl-2"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-sm">Phone:</label>
          <input
            className="border-none text-main outline-none rounded-md placeholder:text-sm placeholder:pl-2"
            type="number"
            placeholder="Enter your phone"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-sm">Your massage:</label>
          <input
            className="border-none text-main outline-none rounded-md placeholder:text-sm placeholder:pl-2"
            type="text"
            placeholder="Enter your massage"
          />
        </div>
        <button className="border-main border-solid border bg-white text-main font-semibold rounded-md py-1 hover:scale-95">
          Send
        </button>
      </section>
      <section>
        <div className="mapouter overflow-hidden bg-none ">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe w-96 h-96"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=580&amp;height=496&amp;hl=en&amp;q=ERTQA-شركة ارتقاء&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <a href="https://gachanox.io/">Gacha Nox APK</a>
          </div>
        </div>
      </section>
    </main>
  );
}
