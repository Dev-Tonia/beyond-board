import React from "react";
import Image from "next/image";
import { CirclePlay } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="  pt-20 pb-16">
      <div className=" wrapper">
        <div className=" w-full h-[600px] relative">
          <Image
            src="/img/video-thumbnail.png"
            alt="video thumbnail"
            fill
            sizes="100vw"
            className="object-cover"
            loading="lazy"
            quality={100}
          />
          <div className="absolute inset-0 bg-black/20" />
          {/* <button className="  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-neutral-50 z-10">
            <CirclePlay />
          </button> */}
        </div>
      </div>
    </section>
  );
}
