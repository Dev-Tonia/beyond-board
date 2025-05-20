import {
  DataCollection,
  EthicalConsiderations,
  MethodologyHero,
  // ResearchQuestions,
  SamplingStrategy,
} from "@/components";
import React from "react";

export default function Methodology() {
  return (
    <>
      <MethodologyHero />
      <DataCollection />
      {/* <ResearchQuestions /> */}
      <SamplingStrategy />
      <EthicalConsiderations />
    </>
  );
}
