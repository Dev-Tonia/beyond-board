import React from "react";
import Image from "next/image";
import SixthHeading from "../common/sixth-heading";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

export default function UserStoriesCard({
  userName,
  cardHeight = "400px",
  img,
  tipColor,
}: Readonly<{
  userName: string;
  cardHeight?: string;
  img: string;
  tipColor?: string;
}>) {
  return (
    <div>
      <div className="">
        <div className={clsx("relative  w-full", cardHeight)}>
          <Image
            src={`/img/${img}.png`}
            alt="user-story"
            fill
            sizes="100vw"
            className="object-cover"
            loading="lazy"
            quality={100}
          />

          <div className="flex flex-col gap-4 absolute bottom-0 left-0 right-0 p-4">
            <div>
              <SixthHeading
                title="“I STILL TEACH, BUT NOW I TEACH CODE”"
                className="max-w-[55%]"
              />
              <div className=" relative overflow-hidden">
                <div className=" border-2 border-neutral-50 py-3 px-2.5 lg:px-5 text-neutral-50 ">
                  <SixthHeading title={userName} />
                  <p className=" flex items-center gap-2 2xl:text-xl">
                    <span>Somalia </span>
                    <ArrowRight size={20} />
                    <span>UK</span>
                  </p>
                  <p className=" flex items-center gap-2 2xl:text-xl">
                    Nurse - Software Engineer
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
        </div>
      </div>
    </div>
  );
}
