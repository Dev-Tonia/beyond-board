import React from "react";
import Image from "next/image";
import SixthHeading from "../common/sixth-heading";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

export default function UserStoriesCard({
  cardHeight = "400px",
  tipColor,
  participant,
}: Readonly<{
  cardHeight?: string;
  tipColor?: string;
  participant: {
    id: number;
    name: string;
    image: string;
    quote: string;
    careerBefore: string;
    careerAfter: string;
    from: string;
  };
}>) {
  return (
    <div>
      <div className=" relative">
        <div className={clsx("relative  w-full", cardHeight)}>
          <Image
            src={participant.image}
            alt="user-story"
            fill
            sizes="100vw"
            className="object-cover"
            loading="lazy"
            quality={100}
          />

          <div className="flex flex-col gap-4 absolute bottom-0 left-0 right-0 p-4 z-10">
            <div>
              <SixthHeading title={participant.quote} />
              <div className=" relative overflow-hidden">
                <div className=" border-2 border-neutral-50 py-3 px-2.5 lg:px-5 text-neutral-50 ">
                  <SixthHeading title={participant.name} />
                  <p className=" flex items-center gap-2 2xl:text-xl">
                    <span>{participant.from} </span>
                    <ArrowRight size={20} />
                    <span>USA</span>
                  </p>
                  <p className=" flex items-center gap-2 2xl:text-xl">
                    {participant.careerBefore} - {participant.careerAfter}
                  </p>
                  <div
                    className={clsx(
                      " absolute -bottom-6 rotate-45  -right-6 size-10 ",
                      tipColor
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-black/10 to-black/70"></div>
        </div>
      </div>
    </div>
  );
}
