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
      <section className="py-9">
        <div className="wrapper space-y-5">
          <div className="w-full wrapper h-screen bg-white p-6 rounded-lg ">
            <GroupedBarChart
              title="Stacked Bar Chart: Total Years Of Experience By Profession (Africa And U.S.)"
              africaData={[150, 0, 90, 35, 25, 25, 0, 0, 0, 15, 0, 2, 15, 0]}
              usData={[20, 10, 35, 0, 0, 0, 105, 35, 8, 15, 0, 0, 0, 15]}
            />
          </div>
          <div className="w-full wrapper h-screen bg-white p-6 rounded-lg ">
            <GroupedBarChart
              title="Stacked Bar Chart: Number of participants By Profession (Africa And U.S.)"
              maxCount={14}
              stepSize={2}
              africaData={[7, 1, 7, 2, 1, 4, 4, 0, 1, 1, 1, 0, 2, 0]}
              usData={[3, 0, 4, 0, 0, 14, 5, 1, 0, 0, 0, 1, 0, 2]}
            />
          </div>
        </div>
      </section>
      {/* <GroupedBarChart /> */}
      <ResearchFindings />
      <AlignmentOfResearchFindings />
      <TheoreticalAndPracticalImplications />
    </>
  );
}
