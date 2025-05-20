import React from "react";
import ThirdHeading from "../common/ThirdHeading";
const challengesAndPolicies = [
  {
    challenge: "Licensing and Certification Barriers",
    policy:
      "Subsidize re-licensing programs and provide bridge training tailored to foreign-trained professionals.\nNigerian diaspora professional associations should collaborate to sign bilateral agreements between Nigerian and American professional bodies to achieve a more mutually beneficial accreditation and licensing outcomes for Nigerian professionals in the US",
  },
  {
    challenge: "Professional Underemployment",
    policy:
      "Create fast-track employment programs for skilled immigrants tied to their fields of expertise.",
  },
  {
    challenge: "Cultural Assimilation Difficulties",
    policy:
      "Fund orientation programs on cultural norms, workplace expectations, and communication skills.",
  },
  {
    challenge: "Information Gaps / Lack of Support",
    policy:
      "Develop centralized immigrant resource hubs with career counseling, mentorship, and certification guidance.",
  },
  {
    challenge: "Emotional and Mental Health Strain",
    policy:
      "Offer accessible, culturally informed mental health services and community peer-support programs.",
  },
  {
    challenge: "Lack of Professional Networks",
    policy:
      "Support ethnic professional associations and mentorship programs connecting new and established immigrants.",
  },
];

export default function SummaryOfPolicyRecommendations() {
  return (
    <section className=" py-12">
      <div className="wrapper">
        <ThirdHeading
          title="Summary of Policy Recommendations"
          textColor="text-neutral-800"
        />
        <div className="overflow-x-auto ">
          <table className="w-full border-collapse bg-[#EBDBFF] min-w-6xl text-neutral-800 text-lg lg:text-xl 2xl:text-2xl font-bold">
            <thead>
              <tr className=" bg-[#9747FF]">
                <th className="border border-purple-500 px-6 py-4 text-left font-bold ">
                  Challenge Identified
                </th>
                <th className="border border-purple-500 px-6 py-4 text-left font-bold">
                  Policy Response
                </th>
              </tr>
            </thead>
            <tbody>
              {challengesAndPolicies.map((item, index) => (
                <tr key={index} className="  transition-colors duration-200">
                  <td className=" text-nowrap px-6 py-4 font-normal">
                    {item.challenge}
                  </td>
                  <td className="  px-6 py-4 font-normal ">{item.policy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className=" text-lg lg:text-xl 2xl:text-2xl mt-5">
          <p>
            The challenges identified in this study, ranging from certification
            hurdles to mental health strain—are interrelated components of a
            broader systemic issue: the underutilization of highly skilled
            immigrant talent in the United States. The policy recommendations
            outlined above draw from participants' narratives and lived
            experiences and are aimed at correcting inefficiencies in workforce
            integration, improving immigrant well-being, and creating inclusive
            economic opportunities. As a microcosm of the national immigrant
            experience, Maryland benefits significantly from such reforms,
            setting a model for other states with growing African immigrant
            populations. These proposed interventions would empower immigrant
            professionals and enrich the broader US economy by fully harnessing
            the potential of its diverse workforce.
          </p>
        </div>
      </div>
    </section>
  );
}
