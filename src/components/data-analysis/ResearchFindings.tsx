import React from "react";
import ThirdHeading from "../common/ThirdHeading";

const ResearchFindings = () => {
  const findings = [
    {
      finding: "Devaluation of Foreign Credentials",
      summary:
        "Most participants experienced a dismissal of their Nigerian academic and professional qualifications, leading 19 out of 30 to accept low wage jobs far below their prior status and experience levels.",
    },
    {
      finding: "Barriers to Career Entry and Advancement",
      summary:
        "Strict licensing rules, lack of U.S. experience, and systemic bias made it difficult for participants to enter or advance in professional fields, limiting long-term career growth.",
    },
    {
      finding: "Migration Motivations",
      summary:
        "All 30 participants were driven to migrate by a belief in the U.S. as a land of opportunity, with push factors like political instability and poor economic conditions in Nigeria playing key roles.",
    },
    {
      finding: "Cultural Assimilation and Identity",
      summary:
        "Participants often faced workplace cultural clashes while simultaneously holding onto strong Nigerian identities, resulting in a dual sense of cultural belonging.",
    },
    {
      finding: "Mental and Financial Strain from Deskilling",
      summary:
        "Nigerian and African community networks provided critical emotional and job support but often limited broader integration into U.S. professional networks and opportunities.",
    },
    {
      finding: "Role of Ethnic Networks",
      summary:
        "Most participants lacked accurate information upon arriving in the U.S., relying on unverified advice that delayed their career progress; only 3 out of 30 had realistic expectations or clear understanding of the U.S. professional landscape.",
    },
    {
      finding: "Resilience and Adaptive Strategies",
      summary:
        "Despite challenges, participants demonstrated resilience through re-skilling, entrepreneurship, volunteering, and community mentorship, often fueled by strong cultural values and faith.",
    },
  ];

  return (
    <section className=" py-12">
      <div className="wrapper">
        <ThirdHeading title="Research Findings" textColor="text-neutral-800" />
        <div className="overflow-x-auto ">
          <table className="w-full border-collapse bg-[#EBDBFF] min-w-6xl text-neutral-800 text-lg text-xl lg:text-xl 2xl:text-2xl font-bold">
            <thead>
              <tr className=" bg-[#9747FF]">
                <th className="border border-purple-500 px-6 py-4 text-left font-bold ">
                  Research Findings
                </th>
                <th className="border border-purple-500 px-6 py-4 text-left font-bold">
                  Summary
                </th>
              </tr>
            </thead>
            <tbody>
              {findings.map((item, index) => (
                <tr key={index} className="  transition-colors duration-200">
                  <td className=" text-nowrap px-6 py-4 font-normal">
                    {item.finding}
                  </td>
                  <td className="  px-6 py-4 font-normal ">{item.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ResearchFindings;
