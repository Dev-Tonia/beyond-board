import {
  CareerAdaptation,
  CulturalAssimilation,
  // CulturalIntegration,
  LiteratureReviewHero,
  // MigrationDrivers,
  OtherLiterature,
  // OvercomingBarriers,
  Overview,
  // ProfessionalChallenges,
  PushAndPull,
  SystemicBarriers,
} from "@/components";
import React from "react";

export default function LiteratureReview() {
  return (
    <>
      <LiteratureReviewHero />
      <Overview />
      <PushAndPull />
      {/* <MigrationDrivers /> */}
      {/* <ProfessionalChallenges /> */}
      <SystemicBarriers />
      {/* <CulturalIntegration /> */}
      <CareerAdaptation />
      {/* <OvercomingBarriers /> */}
      <CulturalAssimilation />
      <OtherLiterature />
    </>
  );
}
