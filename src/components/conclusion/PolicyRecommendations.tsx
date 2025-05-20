import React from "react";
import SecondHeading from "../common/second-heading";
import AddressingLicensing from "./AddressingLicensing";
import CombatingProfessionalUnderemployment from "./CombatingProfessionalUnderemployment";
import EasingCulturalAssimilation from "./EasingCulturalAssimilation";
import ClosingInformationGaps from "./ClosingInformationGaps";
import PromotingEmotionalMentalHealth from "./PromotingEmotionalMentalHealth";

export default function PolicyRecommendations() {
  return (
    <section className=" py-12">
      <div className="wrapper">
        <SecondHeading
          title="Policy Recommendations"
          textColor="text-neutral-800"
        />
        <p className=" lg:text-xl text-lg 2xl:text-2xl  mt-5 lg:mt-8 text-neutral-800 space-y-6">
          Based on the findings from participant narratives and grounded in
          recurring themes, the following policy recommendations address the
          systemic challenges highly educated Nigerian immigrants in Maryland
          face. Each recommendation is paired with a rationale drawn from
          participants' lived experiences to create pathways for career
          alignment, social integration, and emotional well-being.
        </p>
        <div className=" space-y-10">
          <AddressingLicensing />
          <CombatingProfessionalUnderemployment />
          <EasingCulturalAssimilation />
          <ClosingInformationGaps />
          <PromotingEmotionalMentalHealth />
        </div>
      </div>
    </section>
  );
}
