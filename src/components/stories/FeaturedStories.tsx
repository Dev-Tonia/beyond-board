"use client";
import React, { useState } from "react";
import SecondHeading from "../common/second-heading";
import { ChevronLeftCircleIcon, ChevronRightCircle } from "lucide-react";
import Image from "next/image";
import { featuredStories } from "@/data/featuredStories";

// Define the story card data structure
interface StoryCard {
  id: number;
  image: string;
  participant: string;
  description: string;
  quote: string;
}

export default function FeaturedStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredStories.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredStories.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-gradient-to-t from-[#B0D0A9] to-[#F3F9EB] py-16">
      <div className="wrapper">
        <div className="flex items-center justify-between">
          <SecondHeading
            textColor="text-neutral-800"
            title="Featured Interesting Stories"
            className="max-w-xl"
          />
          <div className="flex gap-2">
            <button
              onClick={goToPrevious}
              className="transition-transform hover:scale-105"
              aria-label="Previous story"
            >
              <ChevronLeftCircleIcon className="size-16 cursor-pointer" />
            </button>
            <button
              onClick={goToNext}
              className="transition-transform hover:scale-105"
              aria-label="Next story"
            >
              <ChevronRightCircle className="size-16 cursor-pointer" />
            </button>
          </div>
        </div>

        <div className="relative h-[500px] mt-9">
          {featuredStories.map((card, index) => {
            // Calculate the position in the stack
            const isActive = index === currentIndex;
            const zIndex =
              featuredStories.length - Math.abs(currentIndex - index);

            return (
              <div
                key={card.id}
                className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out
                  ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-4 pointer-events-none"
                  }
                `}
                style={{
                  zIndex: isActive ? featuredStories.length : zIndex,
                  transform: `perspective(1000px) rotateX(${
                    isActive ? 0 : 5
                  }deg)`,
                }}
              >
                <div className="bg-black/30 backdrop-blur-md p-5 lg:p-6">
                  <div className="flex flex-col md:flex-row gap-7 z-10 relative">
                    {/* picture */}
                    <div className="md:w-1/3">
                      <div className="h-72 w-full md:w-80 relative">
                        <Image
                          src={card.image}
                          alt={`Photo of ${card.participant}`}
                          fill
                          quality={100}
                          className="object-cover"
                          priority={isActive}
                        />
                      </div>
                      <p className="text-neutral-50 font-cabin text-lg lg:text-xl 2xl:text-2xl text-center mt-3">
                        {card.participant}
                      </p>
                    </div>
                    {/* description */}
                    <div className="md:w-2/3">
                      <p className="text-neutral-50 font-cabin text-lg lg:text-xl 2xl:text-2xl font-light">
                        {card.story}
                      </p>
                      <p className="border-l-[4px] border-neutral-50 pl-4 mt-5 text-neutral-50 font-extralight italic font-cabin text-lg lg:text-xl 2xl:text-2xl">
                        {card.quote}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center mt-6 gap-2">
          {featuredStories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                index === currentIndex ? "bg-neutral-800 w-6" : "bg-neutral-400"
              }`}
              aria-label={`Go to story ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
