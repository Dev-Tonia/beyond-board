import React from "react";
import SecondHeading from "../common/second-heading";
import ThirdHeading from "../common/ThirdHeading";
import Image from "next/image";
const quoteWall = [
  {
    id: 1,
    name: "Participant 1",
    image: "/img/participants/participant-1.png",
    quote: "“STARTING ALL OVER AGAIN”",
  },
  {
    id: 9,
    name: "Participant 9",
    image: "/img/participants/participant-9.png",
    quote: "“I’M NOT REALLY FULLY USING ALL MY POTENTIALS”",
  },
  {
    id: 12,
    name: "Participant 12",
    image: "/img/participants/participant-12.png",
    quote: "“WHEREVER YOU FIND YOURSELF, MAKE AN IMPACT”",
  },
  {
    id: 15,
    name: "Participant 15",
    image: "/img/participants/participant-15.png",
    quote: "“FOR ME, HERE AND NIGERIA ARE ALMOST THE SAME”",
  },
];
export default function QuoteWall() {
  return (
    <section className=" bg-linear-to-t to-[#F3F9EB] from-[#B0D0A9] py-16">
      <div className=" wrapper">
        <SecondHeading
          title="Quote Wall"
          textColor=" text-neutral-8000"
          className=" max-w-[100px]"
        />
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-10">
          {quoteWall.map((quote) => (
            <div
              className=" bg-black/35 backdrop-blur-md rounded  py-10 md:py-14 px-5 md:px-8"
              key={quote.id}
            >
              <ThirdHeading title={quote.quote} />
              <div className=" flex gap-2 items-center mt-20 ">
                <div className="size-20 rounded-full overflow-hidden relative">
                  <Image
                    src={quote.image}
                    alt={quote.name}
                    fill
                    sizes="100vw"
                    className="object-cover rounded-full"
                    loading="lazy"
                    quality={100}
                  />
                </div>
                <p className=" font-cabin text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-neutral-50">
                  {quote.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
