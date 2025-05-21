"use client";

import React from "react";
import ThirdHeading from "../common/ThirdHeading";
import SecondHeading from "../common/second-heading";
import Image from "next/image";
import AudioPlayer from "../common/AudioPlayer";

export default function AboutMe() {
  return (
    <section className=" pb-12 lg:pb-16 pt-36">
      <div className="wrapper">
        <div className="max-w-4xl mx-auto p-6 ">
          <div className="flex flex-col items-center text-center mb-6">
            <SecondHeading title="About Me" textColor="text-neutral-800" />
            {/* Profile image with border */}
            <div className="  my-10">
              <div className=" size-96  flex relative items-center justify-center">
                <Image
                  src="/img/Kunle.png"
                  alt="Hero background"
                  fill
                  sizes="100vw"
                  quality={100}
                  className="object-cover object-right h-[50%] w-full"
                  priority
                />
              </div>
            </div>

            <SecondHeading title="Kunle Adeleye" textColor="text-neutral-800" />
          </div>

          <div className="space-y-1 text-neutral-800 text-center 2xl:text-3xl text-lg md:text-xl lg:text-2xl">
            <p className="">
              Hello, and welcome! I'm the researcher behind this public
              scholarship project. This research work is part of the
              requirements for the Doctor of Public Administration (D.P.A.)
              degree at the School of Public and International Affairs,
              University of Baltimore, Maryland. 
            </p>

            <p className={``}>
              I feel honored for the opportunity to contribute to an academic
              work that focuses on international migration and more
              specifically, the challenges highly educated African immigrant
              professionals experience far away from home. As someone who has
              lived and worked across two continents, I understand what it means
              to uproot, to rebuild, and to reimagine one’s identity in
              unfamiliar systems. 
            </p>

            <p className="">
              Through this research, I seek not only to document but to humanize
              the data, offering space for authentic narratives that reflect
              people’s resilience, challenge, and triumph. With academic and
              industry background and private and public sector experience in
              finance, banking and accounting spanning over several years, I
              know numbers don’t tell it all. 
            </p>

            <p className="">
              In this research, I chose a qualitative methodology rich in
              storytelling and narrative analysis to explore the minds and lives
              of 30 real people with authentic experiences. The study delves
              into how they navigate cultural assimilation, find employment,
              negotiate professional identity, and balance dual social,
              cultural, and economic obligations, among other challenges. I
              embarked on this journey to amplify the voices of highly educated
              African immigrants navigating professional and cultural landscapes
              in the United States. My work combines rigorous qualitative
              inquiry with narrative storytelling to explore the structural and
              cultural barriers affecting African immigrant communities, with a
              focus on highly educated Nigerian immigrants in Maryland—a state
              with a rich, diverse, and growing Nigerian population. Initially,
              I planned to follow 15 participants, but I ultimately interviewed
              30 individuals: 28 from Nigeria and 2 from Ghana
            </p>
            <p>
              Beyond research, I’m committed to advocacy and practical
              solutions. Whether through community engagement, policy dialogue,
              or educational tools, I aim to translate research into impact —
              empowering immigrant professionals and informing institutions of
              the urgent need for reform
            </p>
            <p>
              Thank you for visiting. I invite you to explore the stories,
              themes, and findings across this project — and to reflect with me
              on what it means to truly belong, thrive, and be seen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
