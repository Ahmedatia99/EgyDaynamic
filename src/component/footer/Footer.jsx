import React from "react";

export default function Footer() {
  return (
    <main className="bg-footer py-20 text-white border-t-8 border-b-8 border-solid border-main">
      <section className=" flex flex-col justify-center items-center">
        <div>
          <ul className="flex ">
            <li className="border-r-2 mr-2 pr-2">
              Privacy police & Terms of use
            </li>
            <li className="border-r-2 mr-2 pr-2">Permissions GuideLines</li>
            <li className="border-r-2 mr-2 pr-2">address</li>
            <li className="border-r-2 mr-2 pr-2">Help center</li>
            <li>Contact US</li>
          </ul>
        </div>
        <div className="mt-5">
          <img
            src="./images/logo/logo-footer.png"
            alt="logo"
            className="w-24 h-24"
          />
        </div>
        <div className="px-3 flex justify-center items-center">
          <p className=" max-w-5xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            perspiciatis fugiat explicabo consequatur nesciunt error aspernatur
            mollitia ipsum voluptate. Fugiat, laudantium. Ad ex voluptatem,
            eveniet doloribus molestiae explicabo sit obcaecati!
          </p>
        </div>
      </section>
    </main>
  );
}
