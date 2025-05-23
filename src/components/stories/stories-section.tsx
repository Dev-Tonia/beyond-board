"use client";

import React from "react";
import LeadingText from "../common/leading-text";
import CustomButton from "../common/custom-button";
import clsx from "clsx";
import UserStoriesCard from "../common/user-stories-card";
import {
  getParticipants,
  participantInterviews,
  participants,
} from "@/data/participant";

const colors = [
  "bg-secondary", // First color
  "bg-[#EBDBFF]", // Second color
  "bg-[#C3FFFF]", // Third color
];

export default function StoriesSection() {
  const getCardColor = (index: number) => {
    return colors[index % 3]; // Rotates through the 3 colors
  };
  const setCardAlignment = (index: number) => {
    return index === 0 || index === 2 ? "self-end" : "";
  };

  // implementing load more
  const [showMore, setShowMore] = React.useState(6);

  // getting participants from data
  const participantList = getParticipants(showMore);
  return (
    <section className={clsx(" pt-32 pb-16 ")}>
      <div className="wrapper">
        <div className="flex items-center justify-between">
          <LeadingText title="All Stories" className=" text-neutral-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20">
          {participantList.map((participant, index) => (
            <div className={setCardAlignment(index)} key={participant.id}>
              <UserStoriesCard
                key={participant.id}
                participant={participant}
                cardHeight={(index + 1) % 2 === 0 ? "h-[500px]" : "h-[400px]"}
                tipColor={getCardColor(index)}
              />
            </div>
          ))}
        </div>

        <div className=" justify-center items-center flex ">
          <CustomButton
            title="Load More"
            className={clsx(
              "bg-secondary text-neutral-800  hover:bg-secondary/80 ",
              showMore === participantInterviews.length ? "hidden" : ""
            )}
            onClick={() => setShowMore((prev) => prev + 3)}
          />
        </div>
      </div>
    </section>
  );
}
