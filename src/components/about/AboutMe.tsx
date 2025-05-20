import React from "react";
import ThirdHeading from "../common/ThirdHeading";
import SecondHeading from "../common/second-heading";

export default function AboutMe() {
  return (
    <section className=" py-12 lg:py-16">
      <div className=" wrapper">
        <SecondHeading textColor="text-neutral-800" title="About Me" />
        <div className=" lg:text-2xl md:text-xl text-lg 2xl:text-4xl md:w-[95%] lg:w-[90%] mt-5 lg:mt-8 text-neutral-700">
          <p>
            Hello, and welcome! I'm the researcher behind this project — a
            passionate scholar and storyteller committed to illuminating the
            lived experiences of African immigrants in the United States. With a
            background in qualitative research and a deep personal connection to
            migration stories, I embarked on this journey to amplify the voices
            of highly educated Nigerian immigrants navigating professional and
            cultural landscapes far from home.
          </p>
          <p>
            This project is more than academic — it’s personal. I understand
            what it means to uproot, to rebuild, and to reimagine one’s identity
            in unfamiliar systems. Through this research, I seek not only to
            document but to humanize the data, offering space for authentic
            narratives that reflect resilience, challenge, and triumph.
          </p>
          <p>
            My academic interests lie at the intersection of migration,
            identity, and labor equity. I hold [insert your academic
            qualifications here], and I’m currently pursuing my
            [PhD/Master’s/etc.] in [Your Field] at [Your University]. My work
            combines rigorous case study methodology with narrative storytelling
            to explore the structural and cultural barriers impacting African
            immigrant communities in the U.S., particularly in Maryland — a
            state with a rich, diverse, and growing Nigerian population.
          </p>
          <p>
            Beyond research, I’m committed to advocacy and practical solutions.
            Whether through community engagement, policy dialogue, or
            educational tools, I aim to translate research into impact —
            empowering immigrant professionals and informing institutions of the
            urgent need for reform.
          </p>
          <p>
            Thank you for visiting. I invite you to explore the stories, themes,
            and findings across this project — and to reflect with me on what it
            means to truly belong, thrive, and be seen.
          </p>
        </div>
      </div>
    </section>
  );
}
