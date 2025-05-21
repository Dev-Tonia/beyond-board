"use client";
import React from "react";
import LeadingText from "../common/leading-text";
import CustomButton from "../common/custom-button";
import UserStoriesCard from "./user-stories-card";
import clsx from "clsx";
import { getParticipants } from "@/data/participant";
import { useRouter } from "next/navigation";

const colors = [
  "bg-secondary", // First color
  "bg-[#EBDBFF]", // Second color
  "bg-[#C3FFFF]", // Third color
];

export default function Stories({
  className = "bg-tertiary",
  children,
  headerColor,
}: {
  className?: string;
  children?: React.ReactNode;
  headerColor?: string;
}) {
  const getCardColor = (index: number) => {
    return colors[index % 3]; // Rotates through the 3 colors
  };

  // Getting participants from data
  const participants = getParticipants(6);
  const router = useRouter();

  // Alternate between the two heights you already have
  const getCardHeight = (index: number) => {
    return (index + 1) % 2 === 0 ? "h-[610px]" : "h-[500px]";
  };

  return (
    <section className={clsx("pt-32 pb-16", className)}>
      <div className="wrapper">
        <div className="flex items-center justify-between">
          <LeadingText title="Stories" className={headerColor} />
          <CustomButton
            title="Go to Stories"
            onClick={() => {
              router.push("/stories");
            }}
          />
        </div>

        {/* Masonry layout container */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 mt-12 space-y-4">
          {participants.map((participant, index) => (
            <div key={participant.id} className="break-inside-avoid mb-4">
              <UserStoriesCard
                key={participant.id}
                participant={participant}
                cardHeight={getCardHeight(index)}
                tipColor={getCardColor(index)}
              />
            </div>
          ))}
        </div>

        {children || (
          <div className="bg-secondary text-neutral-800 mx-7 mt-20 font-lato text-center py-8 px-5 italic">
            'I didn't lose myself - I just learned how to grow a new one"
          </div>
        )}
      </div>
    </section>
  );
}
