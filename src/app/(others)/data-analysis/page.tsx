import {
  AlignmentOfResearchFindings,
  DataAnalysisHero,
  ExperienceAfrica,
  GroupedBarChart,
  Observation,
  ParticipantsExperienceTable,
  ResearchFindings,
  TheoreticalAndPracticalImplications,
} from "@/components";
import React from "react";

export default function DataAnalysis() {
  return (
    <>
      <DataAnalysisHero />
      <ExperienceAfrica />
      <ParticipantsExperienceTable />
      <Observation />
      <div className="w-full wrapper h-screen bg-white p-6 rounded-lg shadow">
        <GroupedBarChart />
      </div>{" "}
      {/* <GroupedBarChart /> */}
      <ResearchFindings />
      <AlignmentOfResearchFindings />
      <TheoreticalAndPracticalImplications />
    </>
  );
}
