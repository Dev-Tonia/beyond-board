import {
  IntroductionFocusArea,
  IntroductionHero,
  IntroductionProjectStage,
  IntroductionQuoteWall,
  IntroductionResearchConducted,
  IntroResearchQuestions,
  ResearchBasis,
  ResearchPhilosophy,
} from "@/components";
import CircularImages from "@/components/introduction/CircularImages";
// import ResearchPhilosophy from "@/components/introduction/ResearchPhilosophy";
import React from "react";

export default function Introduction() {
  return (
    <>
      <IntroductionHero />
      <IntroductionProjectStage />
      <ResearchPhilosophy />
      <ResearchBasis />
      <IntroResearchQuestions />
      <IntroductionFocusArea />
      <IntroductionResearchConducted />
      <CircularImages />
      <IntroductionQuoteWall />
    </>
  );
}
