import {
  Bibliography,
  // AddressingLicensing,
  ConclusionHero,
  ConclusionPoint,
  PolicyRecommendations,
  SummaryOfPolicyRecommendations,
  SummaryOfTheStudy,
} from "@/components";
import React from "react";

export default function Conclusion() {
  return (
    <>
      <ConclusionHero />
      <SummaryOfTheStudy />
      <ConclusionPoint />
      <PolicyRecommendations />
      <SummaryOfPolicyRecommendations />
      <Bibliography />
    </>
  );
}
